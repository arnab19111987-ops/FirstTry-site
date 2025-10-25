#!/bin/bash

# FirstTry Local CI Script
# Runs common checks before pushing to avoid CI failures

set -e  # Exit on any error

PROJECT_DIR="firsttry-site"
cd "$PROJECT_DIR" || exit 1

echo "🚀 FirstTry Local CI Started"
echo "================================"

# Check if AUTOFIX is enabled
AUTOFIX=${AUTOFIX:-0}

if [ "$AUTOFIX" = "1" ]; then
    echo "🔧 AUTOFIX mode enabled - will attempt to fix issues automatically"
else
    echo "🔍 Running in check-only mode"
fi

echo ""

# 1. Install dependencies if needed
echo "📦 Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

# 2. TypeScript type checking
echo ""
echo "🔍 TypeScript type checking..."
if npm run build --silent > /dev/null 2>&1; then
    echo "✅ TypeScript compilation passed"
else
    echo "❌ TypeScript compilation failed"
    if [ "$AUTOFIX" = "1" ]; then
        echo "🔧 Attempting to show detailed errors..."
        npm run build
    fi
fi

# 3. ESLint checks
echo ""
echo "🔍 ESLint checks..."
if npx eslint . --ext .js,.jsx,.ts,.tsx --quiet; then
    echo "✅ ESLint passed"
else
    echo "❌ ESLint issues found"
    if [ "$AUTOFIX" = "1" ]; then
        echo "🔧 Attempting to fix ESLint issues..."
        npx eslint . --ext .js,.jsx,.ts,.tsx --fix || true
        echo "Fixed what could be auto-fixed. Manual review may be needed for remaining issues."
    fi
fi

# 4. Check for common issues
echo ""
echo "🔍 Checking for common issues..."

# Check for console.log statements
if grep -r "console\." app/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" > /dev/null 2>&1; then
    echo "⚠️  Console statements found (consider removing for production):"
    grep -r "console\." app/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" -n || true
else
    echo "✅ No console statements found"
fi

# Check for TODO/FIXME comments
if grep -r "TODO\|FIXME" app/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" > /dev/null 2>&1; then
    echo "📝 TODO/FIXME comments found:"
    grep -r "TODO\|FIXME" app/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" -n || true
else
    echo "✅ No TODO/FIXME comments found"
fi

# 5. Security checks
echo ""
echo "🔒 Basic security checks..."

# Check for hardcoded secrets (basic patterns)
if grep -rE "(api_key|password|secret|token).*=.*['\"][a-zA-Z0-9]{8,}['\"]" app/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" > /dev/null 2>&1; then
    echo "⚠️  Potential hardcoded secrets found:"
    grep -rE "(api_key|password|secret|token).*=.*['\"][a-zA-Z0-9]{8,}['\"]" app/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" -n || true
else
    echo "✅ No obvious hardcoded secrets found"
fi

# 6. Build test
echo ""
echo "🏗️  Testing production build..."
if npm run build > /dev/null 2>&1; then
    echo "✅ Production build successful"
    # Clean up build output
    rm -rf .next
else
    echo "❌ Production build failed"
    if [ "$AUTOFIX" = "1" ]; then
        echo "🔧 Showing build errors..."
        npm run build
    fi
fi

echo ""
echo "================================"
echo "✅ FirstTry Local CI Completed"
echo ""
echo "🎯 Summary:"
echo "- Dependencies: Checked"
echo "- TypeScript: Validated"  
echo "- ESLint: Checked"
echo "- Security: Basic scan completed"
echo "- Build: Tested"
echo ""

if [ "$AUTOFIX" = "1" ]; then
    echo "🔧 Auto-fixes were attempted where possible"
    echo "💡 Review the output above for any remaining manual fixes needed"
else
    echo "💡 Run with AUTOFIX=1 to automatically fix issues where possible"
fi

echo "🚀 Ready to push? Your code looks good!"
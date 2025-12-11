# 🔄 Development Workflow Guide

This guide explains the professional development workflow now enabled in your project.

---

## 📋 Daily Development Workflow

### 1. Starting Your Day

```bash
# Pull latest changes
git pull origin main

# Install any new dependencies
npm install

# Start development server
npm run dev
```

---

## 🎯 Feature Development Workflow

### Step 1: Create a New Branch
```bash
git checkout -b feature/your-feature-name
```

### Step 2: Write Code
- Make your changes
- VSCode will auto-format on save
- Check for TypeScript errors in real-time

### Step 3: Check Your Work
```bash
# Check types
npm run type-check

# Check and fix linting issues
npm run lint:fix

# Format code
npm run format
```

### Step 4: Test Your Changes
```bash
# Development test
npm run dev

# Production build test
npm run build
npm run start
```

### Step 5: Commit Your Changes
```bash
git add .
git commit -m "feat: add your feature"
```

**What happens automatically:**
1. ✅ Pre-commit hook runs
2. ✅ Lint-staged checks changed files
3. ✅ ESLint runs on staged files
4. ✅ Prettier formats staged files
5. ✅ Commit proceeds if no errors

### Step 6: Push Your Changes
```bash
git push origin feature/your-feature-name
```

**What happens automatically:**
1. ✅ Pre-push hook runs
2. ✅ TypeScript type checking
3. ✅ Push proceeds if no errors

---

## 🛠️ Common Tasks

### Adding New Dependencies

```bash
# Production dependency
npm install package-name

# Development dependency
npm install -D package-name

# Update package.json and reinstall
npm install
```

### Removing Dependencies

```bash
npm uninstall package-name
```

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all to latest
npm update

# Update specific package
npm install package-name@latest
```

### Creating New Components

```bash
# Example: Create a new card component
# 1. Create file: components/my-card.tsx
# 2. Write component code
# 3. Auto-formatting will apply on save
# 4. Import where needed
```

### Adding New Pages (App Router)

```bash
# Create new route: app/my-page/page.tsx
# Next.js will automatically create the route
```

---

## 🧪 Before Pushing Code

Run this checklist:

```bash
# 1. Type check
npm run type-check

# 2. Lint
npm run lint

# 3. Format
npm run format

# 4. Build test
npm run build

# 5. If all pass, commit and push!
git add .
git commit -m "your message"
git push
```

---

## 🚨 Fixing Common Issues

### TypeScript Errors

```bash
# Clear cache and rebuild
npm run clean
npm install
npm run type-check
```

### Linting Errors

```bash
# Auto-fix most issues
npm run lint:fix

# For remaining issues, fix manually
```

### Build Errors

```bash
# Clear everything and rebuild
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Git Hook Issues (Windows)

```bash
# Reinitialize hooks
npm run prepare

# Ensure Git Bash is installed
```

### Git Hook Issues (Mac/Linux)

```bash
# Make hooks executable
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
```

---

## 📝 Commit Message Convention

Use conventional commits:

### Format
```
type(scope): subject

body (optional)

footer (optional)
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements

### Examples
```bash
git commit -m "feat: add user authentication"
git commit -m "fix: resolve navbar rendering issue"
git commit -m "docs: update README with new features"
git commit -m "style: format all components with prettier"
git commit -m "refactor: optimize image loading"
git commit -m "chore: update dependencies"
```

---

## 🔍 Code Review Checklist

Before submitting PR:

- [ ] Code follows project conventions
- [ ] All tests pass (when implemented)
- [ ] TypeScript has no errors
- [ ] ESLint has no errors
- [ ] Code is properly formatted
- [ ] No console.logs left in code
- [ ] Comments explain complex logic
- [ ] Imports are organized
- [ ] No unused imports or variables
- [ ] Environment variables are documented
- [ ] README updated if needed

---

## 🎨 VSCode Tips

### Keyboard Shortcuts

**Windows:**
- Format Document: `Shift + Alt + F`
- Organize Imports: `Shift + Alt + O`
- Quick Fix: `Ctrl + .`
- Go to Definition: `F12`
- Find References: `Shift + F12`

**Mac:**
- Format Document: `Shift + Option + F`
- Organize Imports: `Shift + Option + O`
- Quick Fix: `Cmd + .`
- Go to Definition: `F12`
- Find References: `Shift + F12`

### Recommended Settings

Already configured in `.vscode/settings.json`:
- ✅ Format on save
- ✅ Auto-fix ESLint on save
- ✅ Organize imports on save
- ✅ Tailwind CSS IntelliSense

---

## 🚀 Deployment Workflow

### Vercel Deployment

```bash
# 1. Ensure build succeeds
npm run build

# 2. Commit all changes
git add .
git commit -m "chore: prepare for deployment"

# 3. Push to main branch
git push origin main

# Vercel will automatically deploy!
```

### Manual Deployment

```bash
# 1. Build for production
npm run build

# 2. Start production server
npm run start

# Or deploy the .next folder to your hosting
```

---

## 📊 Performance Monitoring

### During Development

```bash
# Check bundle size
npm run build
# Look for "Compiled successfully" message with sizes
```

### Analyze Bundle

```bash
# Install analyzer
npm install -D @next/bundle-analyzer

# Update next.config.ts to use analyzer
# Then run:
ANALYZE=true npm run build
```

---

## 🔐 Environment Variables Management

### Development
```bash
# Use .env.local (git-ignored)
cp .env.example .env.local
# Edit values
```

### Production
```bash
# Set in your hosting platform:
# - Vercel: Project Settings > Environment Variables
# - Netlify: Site Settings > Environment Variables
# - Others: Follow platform documentation
```

### Required Variables
Check `lib/env.ts` for validation schema

---

## 🎯 Best Practices

### 1. Always Work on Feature Branches
```bash
git checkout -b feature/my-feature
# Never commit directly to main!
```

### 2. Write Meaningful Commits
```bash
# Good
git commit -m "feat: add user profile page with avatar upload"

# Bad
git commit -m "updates"
```

### 3. Keep Components Small
- One component per file
- Break down large components
- Use composition over inheritance

### 4. Use TypeScript Properly
- Define interfaces for props
- Avoid `any` type
- Use type inference when possible

### 5. Optimize Images
```typescript
// Use Next.js Image component
import Image from "next/image"

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // for above-fold images
/>
```

### 6. Code Organization
```typescript
// Group imports
import React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import { formatDate } from "@/lib/utils"
import { UserType } from "@/types/user"
```

---

## 🆘 Getting Help

### Check Documentation First
1. Project docs (README, guides)
2. Next.js documentation
3. Package-specific docs

### Common Resources
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Tailwind CSS Docs](https://tailwindcss.com)

### Debug Tools
- Chrome DevTools
- React Developer Tools
- Next.js built-in error overlay
- VSCode debugger

---

## ✅ Weekly Maintenance

Do this weekly:

```bash
# 1. Update dependencies
npm outdated
npm update

# 2. Check for security issues
npm audit

# 3. Fix security issues
npm audit fix

# 4. Clean up
npm run clean

# 5. Reinstall
npm install

# 6. Test everything
npm run type-check
npm run lint
npm run build
```

---

## 🎊 Happy Coding!

You now have a professional development workflow that:
- ✅ Prevents bad code from being committed
- ✅ Maintains consistent code style
- ✅ Catches errors early
- ✅ Optimizes for performance
- ✅ Follows industry best practices

**Now go build something amazing! 🚀**

---

*Remember: Good code is code that works, is maintainable, and follows conventions!*

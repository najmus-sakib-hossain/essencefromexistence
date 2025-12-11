# Post-Upgrade Checklist 📋

Follow these steps after the upgrade to ensure everything works correctly.

## Immediate Actions Required

### 1. Install Dependencies
```bash
cd www
npm install
```

**Expected outcome**: All packages install without errors.

### 2. Setup Environment Variables
```bash
# Copy the example file
cp .env.example .env.local

# Edit with your actual values
# Windows: notepad .env.local
# Mac/Linux: nano .env.local
```

**Required variables** to set:
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_URL`

### 3. Initialize Git Hooks
```bash
npm run prepare
```

**Expected outcome**: Husky installs git hooks successfully.

### 4. Fix File Permissions (Mac/Linux only)
```bash
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
```

**Note**: Windows users can skip this step.

## Verification Steps

### 5. Check TypeScript
```bash
npm run type-check
```

**Expected outcome**: No type errors. If you see errors, review the breaking changes in UPGRADE_GUIDE.md.

### 6. Lint Your Code
```bash
npm run lint
```

**If errors occur**:
```bash
npm run lint:fix
```

### 7. Format Your Code
```bash
npm run format
```

**Expected outcome**: All files formatted consistently.

### 8. Test Development Server
```bash
npm run dev
```

**Expected outcome**: 
- Server starts on http://localhost:3000
- No console errors
- Application loads correctly
- All routes work

### 9. Test Production Build
```bash
npm run build
```

**Expected outcome**: Build completes without errors.

### 10. Test Production Server
```bash
npm run start
```

**Expected outcome**: Production server runs smoothly.

## Optional Enhancements

### Install Recommended VSCode Extensions

Open VSCode and install these extensions:
1. ESLint (dbaeumer.vscode-eslint)
2. Prettier (esbenp.prettier-vscode)
3. Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
4. Error Lens (usernamehw.errorlens)
5. Pretty TypeScript Errors (yoavbls.pretty-ts-errors)

Or use Command Palette: `Extensions: Show Recommended Extensions`

### Configure Git

Make sure your git is configured:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Test Git Hooks

Make a small change and commit:
```bash
git add .
git commit -m "test: verify git hooks"
```

**Expected outcome**: 
- Pre-commit hook runs
- Code is linted and formatted
- Commit succeeds if no errors

## Troubleshooting

### Problem: "Cannot find module" errors
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problem: Husky hooks not running
**Solution**:
```bash
npm run prepare
git config core.hooksPath .husky
```

### Problem: TypeScript errors after upgrade
**Solution**:
```bash
rm -rf .next node_modules/.cache
npm install
npm run type-check
```

### Problem: Port 3000 already in use
**Solution**:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Problem: ESLint and Prettier conflicts
**Solution**: Already configured! Just run:
```bash
npm run format
npm run lint:fix
```

## Final Checks

- [ ] Dependencies installed successfully
- [ ] Environment variables configured
- [ ] Development server runs without errors
- [ ] Production build completes successfully
- [ ] Git hooks are working
- [ ] TypeScript has no errors
- [ ] ESLint has no errors
- [ ] Code is formatted correctly
- [ ] All routes are accessible
- [ ] Images load correctly
- [ ] Dark mode works
- [ ] No console errors in browser

## Success! 🎉

If all checks pass, your upgrade is complete! Your project now uses:

✅ Latest npm packages
✅ Professional folder structure
✅ Best practices and code quality tools
✅ Comprehensive documentation

## Next Steps

1. **Review the documentation**:
   - `README.md` - Project overview
   - `FOLDER_STRUCTURE.md` - Folder organization
   - `UPGRADE_GUIDE.md` - Detailed changes

2. **Commit your changes**:
```bash
git add .
git commit -m "chore: upgrade to latest packages and implement best practices"
git push
```

3. **Start developing**:
```bash
npm run dev
```

## Need Help?

- Check `UPGRADE_GUIDE.md` for common issues
- Review Next.js 15 documentation
- Check individual package documentation
- Review breaking changes for React 19

---

**Congratulations on upgrading your project! 🚀**

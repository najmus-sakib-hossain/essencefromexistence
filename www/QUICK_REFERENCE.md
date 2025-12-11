# 🎯 Quick Reference Card

Keep this handy for everyday commands!

---

## 🚀 Essential Commands

### Development
```bash
npm run dev              # Start development server (Turbopack)
npm run build            # Build for production
npm run start            # Start production server
```

### Code Quality
```bash
npm run lint             # Check for linting errors
npm run lint:fix         # Fix linting errors automatically
npm run format           # Format all code with Prettier
npm run format:check     # Check formatting without changes
npm run type-check       # Check TypeScript types
```

### Maintenance
```bash
npm install              # Install dependencies
npm update               # Update dependencies
npm outdated             # Check for outdated packages
npm audit                # Check for security vulnerabilities
npm run clean            # Clean build artifacts
npm run prepare          # Setup git hooks
```

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `next.config.ts` | Next.js configuration |
| `tsconfig.json` | TypeScript configuration |
| `.eslintrc.json` | ESLint rules |
| `.prettierrc` | Prettier formatting rules |
| `.env.local` | Local environment variables |
| `lib/env.ts` | Environment validation |

---

## 📂 Folder Structure

```
app/          → Routes and pages
components/   → React components
  ui/         → Base components
  sidebar/    → Sidebar components
lib/          → Utilities
hooks/        → Custom hooks
config/       → App configuration
types/        → TypeScript types
public/       → Static assets
styles/       → Global styles
```

---

## 🔄 Git Workflow

```bash
# 1. Create branch
git checkout -b feature/my-feature

# 2. Make changes & save files

# 3. Check your work
npm run type-check
npm run lint:fix
npm run format

# 4. Commit (auto-runs checks)
git add .
git commit -m "feat: description"

# 5. Push (auto-runs type-check)
git push origin feature/my-feature
```

---

## 🎨 Import Aliases

```typescript
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { siteConfig } from "@/config/site"
import { UserType } from "@/types/user"
```

---

## 🐛 Quick Fixes

### Clear Everything
```bash
npm run clean
rm -rf node_modules package-lock.json
npm install
```

### Fix Git Hooks (Mac/Linux)
```bash
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
```

### Fix Port 3000 in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

---

## 📝 Commit Types

```bash
feat:      # New feature
fix:       # Bug fix
docs:      # Documentation
style:     # Formatting
refactor:  # Code restructuring
test:      # Tests
chore:     # Maintenance
perf:      # Performance
```

---

## ⌨️ VSCode Shortcuts

### Windows
- Format: `Shift + Alt + F`
- Quick Fix: `Ctrl + .`
- Find: `Ctrl + F`
- Replace: `Ctrl + H`

### Mac
- Format: `Shift + Option + F`
- Quick Fix: `Cmd + .`
- Find: `Cmd + F`
- Replace: `Cmd + Option + F`

---

## 🔍 Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | `npm run clean && npm install` |
| Type errors | `npm run type-check` |
| Lint errors | `npm run lint:fix` |
| Git hooks fail | `npm run prepare` |
| Port in use | Kill process on port 3000 |

---

## 📚 Documentation

| File | Content |
|------|---------|
| `README.md` | Project overview |
| `FOLDER_STRUCTURE.md` | Folder organization |
| `UPGRADE_GUIDE.md` | Upgrade details |
| `POST_UPGRADE_CHECKLIST.md` | Setup steps |
| `DEVELOPMENT_WORKFLOW.md` | Daily workflow |
| `SUMMARY.md` | Complete summary |
| `QUICK_REFERENCE.md` | This file |

---

## 🎯 Before Every Commit

```bash
✓ npm run type-check
✓ npm run lint
✓ npm run format
✓ Test in browser
✓ git commit
```

---

## 🚀 Before Every Deploy

```bash
✓ npm run build
✓ Test production build
✓ Check .env variables
✓ Review changes
✓ git push
```

---

## 📧 Environment Variables

```bash
# Required
NEXT_PUBLIC_APP_NAME="Your App"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# See .env.example for all options
```

---

## 💡 Pro Tips

1. Use auto-format on save (already configured)
2. Check TypeScript errors in real-time
3. Use path aliases for cleaner imports
4. Commit often with meaningful messages
5. Let git hooks catch issues early
6. Run `npm run clean` when stuck
7. Keep dependencies updated weekly
8. Read error messages carefully
9. Use browser DevTools
10. Document complex code

---

## 🎊 Success Indicators

You're doing great if:
- ✅ `npm run dev` starts without errors
- ✅ `npm run build` completes successfully
- ✅ No TypeScript errors
- ✅ No ESLint errors
- ✅ Git commits work smoothly
- ✅ Code looks consistent
- ✅ App loads in browser

---

**Print this and keep it handy! 📌**

For detailed help, see the other documentation files.

---

*Last updated: December 11, 2025*

# Project Folder Structure

This document outlines the professional folder structure for this Next.js 15 project.

## Current Structure Overview

```
www/
├── app/                          # Next.js 15 App Router
│   ├── (app)/                    # Main application routes
│   │   ├── layout.tsx           # App layout wrapper
│   │   ├── page.tsx             # Homepage
│   │   ├── gaming/              # Gaming section
│   │   ├── lists/               # Lists section
│   │   ├── thoughts/            # Blog/thoughts section
│   │   └── works/               # Portfolio/works section
│   ├── project/                 # Project routes
│   ├── layout.tsx               # Root layout
│   ├── robots.ts                # SEO robots configuration
│   ├── sitemap.ts               # SEO sitemap generation
│   └── google-adsense.tsx       # Ad integration
│
├── components/                   # Reusable UI components
│   ├── ui/                      # Base shadcn/ui components
│   ├── sidebar/                 # Sidebar components
│   ├── *-cards.tsx              # Feature-specific card components
│   └── *.tsx                    # Shared components
│
├── config/                       # Application configuration
│   ├── site.ts                  # Site metadata & config
│   └── docs.ts                  # Documentation config
│
├── content/                      # Content management
│   ├── articles/                # Article/blog content
│   ├── docs/                    # Documentation
│   ├── functions/               # Content functions
│   └── article.ts               # Content schemas
│
├── data/                         # Static data & constants
│   ├── cards.ts                 # Card data
│   └── index.ts                 # Data exports
│
├── hooks/                        # Custom React hooks
│   ├── use-*.tsx                # Hook files
│   └── use-toast.ts             # Toast notifications hook
│
├── lib/                          # Utility libraries
│   ├── utils.ts                 # Utility functions
│   └── fonts.ts                 # Font configurations
│
├── public/                       # Static assets
│   ├── avatars/                 # User avatars
│   ├── contents/                # Content images
│   ├── essencefromexistence/        # Brand assets
│   └── *.txt, *.json            # Static files
│
├── registry/                     # Component registry
│   ├── registry-base-colors.ts  # Color system
│   └── registry-styles.ts       # Style variants
│
├── styles/                       # Global styles
│   └── globals.css              # Global CSS & Tailwind
│
├── types/                        # TypeScript type definitions
│   ├── chat.ts                  # Chat types
│   └── nav.ts                   # Navigation types
│
└── Configuration Files
    ├── .env                     # Environment variables
    ├── .eslintrc.json          # ESLint configuration
    ├── .gitignore              # Git ignore rules
    ├── components.json         # shadcn/ui config
    ├── next.config.ts          # Next.js configuration
    ├── package.json            # Dependencies
    ├── postcss.config.cjs      # PostCSS configuration
    ├── tailwind.config.ts      # Tailwind CSS config
    └── tsconfig.json           # TypeScript config
```

## Best Practices Implemented

### 1. **App Router Structure (Next.js 15)**
- Route groups: `(app)` for organizing routes without affecting URL structure
- Colocation: Keep related components close to routes
- Server Components by default for better performance

### 2. **Component Organization**
- **ui/**: Base, reusable UI primitives (buttons, inputs, etc.)
- **Feature components**: Named by domain (e.g., `prayer-cards.tsx`, `chess-cards.tsx`)
- **Layout components**: Navigation, headers, footers, sidebars

### 3. **Configuration Centralization**
- All app configs in `config/` directory
- Environment-specific settings separated
- Type-safe configuration objects

### 4. **Content Management**
- Structured content in `content/` directory
- Type-safe schemas with Contentlayer
- Markdown/MDX support for articles and docs

### 5. **Type Safety**
- Centralized type definitions in `types/`
- Shared interfaces and types
- Proper TypeScript path aliases

### 6. **Code Quality**
- ESLint for linting
- Prettier for formatting
- Husky for pre-commit hooks
- TypeScript strict mode

## Recommended Improvements

### Consider creating these directories:

```
src/                              # Optional: Move all source code here
├── features/                     # Feature-based architecture
│   ├── gaming/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── types.ts
│   ├── chess/
│   └── prayer/
│
├── services/                     # API & external services
│   ├── api/
│   ├── supabase/
│   └── analytics/
│
├── middleware/                   # Next.js middleware
│   └── auth.ts
│
└── utils/                        # Global utilities
    ├── api.ts
    ├── format.ts
    └── validation.ts
```

## Path Aliases

Current aliases in `tsconfig.json`:
```json
{
  "@/*": ["./*"],
  "@/components/*": ["./components/*"],
  "@/lib/*": ["./lib/*"],
  "@/hooks/*": ["./hooks/*"],
  "@/types/*": ["./types/*"],
  "@/config/*": ["./config/*"]
}
```

## Migration Notes

If you want to implement feature-based architecture:
1. Group related components, hooks, and utils by feature
2. Each feature should be self-contained
3. Share common code through `lib/` and `components/ui/`
4. Keep the `app/` directory for routing only

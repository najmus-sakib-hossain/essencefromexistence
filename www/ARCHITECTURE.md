# 🏗️ Project Architecture

Visual guide to understanding the project structure and data flow.

---

## 📊 Application Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     USER BROWSER                        │
│                    (localhost:3000)                     │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                   NEXT.JS 15 APP                        │
│                   (App Router)                          │
│  ┌───────────────────────────────────────────────────┐  │
│  │  app/                                             │  │
│  │  ├── layout.tsx         (Root Layout)            │  │
│  │  ├── (app)/             (Route Group)            │  │
│  │  │   ├── page.tsx       (Homepage)               │  │
│  │  │   ├── gaming/        (Gaming Routes)          │  │
│  │  │   ├── lists/         (Lists Routes)           │  │
│  │  │   ├── thoughts/      (Blog Routes)            │  │
│  │  │   └── works/         (Portfolio Routes)       │  │
│  │  └── project/           (Project Routes)         │  │
│  └───────────────────────────────────────────────────┘  │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
┌──────────────┐ ┌──────────┐ ┌────────────┐
│  Components  │ │   Data   │ │  Services  │
│              │ │          │ │            │
│  • UI        │ │  • Cards │ │  • API     │
│  • Sidebar   │ │  • Index │ │  • Auth    │
│  • Cards     │ │  • Types │ │  • Analytics│
└──────────────┘ └──────────┘ └────────────┘
```

---

## 🗂️ Folder Hierarchy

```
www/
│
├── 📱 app/                      # Next.js App Router
│   ├── layout.tsx              # Root layout with providers
│   ├── (app)/                  # Main app routes (grouped)
│   │   ├── layout.tsx          # App layout with header/footer
│   │   ├── page.tsx            # Homepage
│   │   ├── gaming/             # Gaming section
│   │   ├── lists/              # Lists section
│   │   ├── thoughts/           # Blog/thoughts
│   │   └── works/              # Portfolio
│   └── project/                # Project showcase
│
├── 🧩 components/               # React Components
│   ├── ui/                     # Base UI primitives
│   │   ├── button.tsx          # Button component
│   │   ├── card.tsx            # Card component
│   │   ├── dialog.tsx          # Dialog component
│   │   └── ...                 # 40+ components
│   ├── sidebar/                # Sidebar components
│   │   ├── left-sidebar.tsx    # Left navigation
│   │   ├── right-sidebar.tsx   # Right widgets
│   │   └── ...
│   ├── *-cards.tsx             # Feature cards
│   └── *.tsx                   # Shared components
│
├── ⚙️ config/                   # Configuration
│   ├── site.ts                 # Site metadata
│   └── docs.ts                 # Docs configuration
│
├── 📝 content/                  # Content Management
│   ├── articles/               # Blog articles
│   ├── docs/                   # Documentation
│   ├── functions/              # Content utilities
│   └── article.ts              # Content schemas
│
├── 💾 data/                     # Static Data
│   ├── cards.ts                # Card data
│   └── index.ts                # Data exports
│
├── 🪝 hooks/                    # Custom Hooks
│   ├── use-toast.ts            # Toast notifications
│   ├── use-mobile.tsx          # Mobile detection
│   └── ...
│
├── 🛠️ lib/                      # Utilities
│   ├── utils.ts                # Helper functions
│   ├── fonts.ts                # Font configurations
│   └── env.ts                  # Environment validation
│
├── 🎨 styles/                   # Global Styles
│   └── globals.css             # Tailwind + custom CSS
│
├── 📘 types/                    # TypeScript Types
│   ├── nav.ts                  # Navigation types
│   └── chat.ts                 # Chat types
│
├── 📁 public/                   # Static Assets
│   ├── avatars/                # User images
│   ├── contents/               # Content images
│   └── ...
│
└── 📋 Configuration Files
    ├── package.json            # Dependencies
    ├── next.config.ts          # Next.js config
    ├── tsconfig.json           # TypeScript config
    ├── .eslintrc.json          # ESLint rules
    ├── .prettierrc             # Prettier rules
    ├── tailwind.config.ts      # Tailwind config
    └── ...
```

---

## 🔄 Data Flow

```
┌─────────────┐
│   Browser   │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────┐
│   Next.js Server Component      │
│   (app/page.tsx)                │
└──────┬──────────────────────────┘
       │
       ├─────────────┬──────────────┬──────────────┐
       ▼             ▼              ▼              ▼
   ┌──────┐    ┌──────────┐   ┌─────────┐   ┌──────────┐
   │ Data │    │Components│   │ Hooks   │   │ Services │
   │      │    │          │   │         │   │          │
   │• Get │    │• Render  │   │• State  │   │• Fetch   │
   │• Map │    │• Style   │   │• Effect │   │• Process │
   └──────┘    └──────────┘   └─────────┘   └──────────┘
       │             │              │              │
       └─────────────┴──────────────┴──────────────┘
                     │
                     ▼
              ┌─────────────┐
              │  HTML + CSS │
              │   (Output)  │
              └─────────────┘
```

---

## 🎯 Component Hierarchy

```
Layout (Root)
│
├── Providers
│   ├── ThemeProvider
│   ├── ToastProvider
│   └── AnalyticsProvider
│
└── App Layout
    ├── Header
    │   ├── Logo
    │   ├── MainNav
    │   └── MobileNav
    │
    ├── Main Content
    │   ├── Left Sidebar
    │   │   ├── Navigation
    │   │   └── Categories
    │   │
    │   ├── Page Content
    │   │   └── Dynamic Components
    │   │
    │   └── Right Sidebar
    │       ├── Actions
    │       └── Widgets
    │
    └── Footer
        ├── Links
        └── Social Media
```

---

## 🔌 Import Structure

```typescript
// External dependencies (npm packages)
import React from "react"
import { useState } from "react"
import Link from "next/link"

// Internal UI components
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Feature components
import { PrayerCards } from "@/components/prayer-cards"
import { ChessCards } from "@/components/chess-cards"

// Utilities and helpers
import { cn } from "@/lib/utils"
import { formatDate } from "@/lib/format"

// Hooks
import { useToast } from "@/hooks/use-toast"
import { useMobile } from "@/hooks/use-mobile"

// Types
import type { NavItem } from "@/types/nav"
import type { SiteConfig } from "@/config/site"

// Data
import { cards } from "@/data/cards"
```

---

## 🛠️ Build Process

```
┌──────────────┐
│ Source Code  │
│  (.tsx, .ts) │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│   TypeScript     │
│   Compilation    │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│   Next.js Build  │
│   • SSG Pages    │
│   • SSR Routes   │
│   • API Routes   │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│   Optimization   │
│   • Minification │
│   • Tree Shaking │
│   • Code Split   │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│  Output (.next)  │
│   • HTML         │
│   • CSS          │
│   • JavaScript   │
└──────────────────┘
```

---

## 🎨 Styling Architecture

```
┌────────────────────────────────┐
│     Tailwind CSS Base          │
│     (Reset + Normalize)        │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│     CSS Variables              │
│     • Colors                   │
│     • Spacing                  │
│     • Typography               │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│     Component Styles           │
│     • Utility Classes          │
│     • Custom Classes           │
│     • Variants (CVA)           │
└────────────┬───────────────────┘
             │
             ▼
┌────────────────────────────────┐
│     Theme System               │
│     • Light Mode               │
│     • Dark Mode                │
│     • Custom Themes            │
└────────────────────────────────┘
```

---

## 🔐 Environment Flow

```
┌─────────────┐
│ .env.local  │  (Local development)
│ (Ignored)   │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│  lib/env.ts     │  (Validation)
│  • Zod Schema   │
│  • Type Safety  │
│  • Defaults     │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  process.env    │  (Runtime)
│  • Validated    │
│  • Type-safe    │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Application    │
│  (Uses env)     │
└─────────────────┘
```

---

## 📦 Package Dependencies

```
Core Framework
├── next (15.1.7)
├── react (19.0.0)
└── react-dom (19.0.0)

UI & Styling
├── @radix-ui/react-* (40+ packages)
├── tailwindcss (3.4.17)
├── framer-motion (11.15.0)
└── lucide-react (0.468.0)

Development Tools
├── typescript (5.7.2)
├── eslint (9.16.0)
├── prettier (3.4.2)
└── husky (9.1.7)

Utilities
├── zod (3.24.1)
├── date-fns (4.1.0)
└── clsx (2.1.1)
```

---

## 🚀 Performance Strategy

```
┌──────────────────────────────┐
│    Server Components         │
│    • Default behavior        │
│    • Zero JavaScript         │
│    • Fast initial load       │
└──────────┬───────────────────┘
           │
           ▼
┌──────────────────────────────┐
│    Static Generation         │
│    • Build time rendering    │
│    • CDN caching             │
│    • Instant page loads      │
└──────────┬───────────────────┘
           │
           ▼
┌──────────────────────────────┐
│    Image Optimization        │
│    • Next/Image component    │
│    • AVIF/WebP formats       │
│    • Lazy loading            │
└──────────┬───────────────────┘
           │
           ▼
┌──────────────────────────────┐
│    Code Splitting            │
│    • Route-based             │
│    • Component-based         │
│    • Dynamic imports         │
└──────────────────────────────┘
```

---

## 🎯 Development Workflow

```
1. Write Code
   │
   ▼
2. Save (Auto-format)
   │
   ▼
3. Commit
   │
   ├─→ Pre-commit Hook
   │   ├─→ Lint Staged Files
   │   └─→ Format Code
   │
   ▼
4. Push
   │
   ├─→ Pre-push Hook
   │   └─→ Type Check
   │
   ▼
5. Deploy
   │
   └─→ Build & Optimize
```

---

## 📚 Learning Path

```
Start Here
    │
    ├─→ README.md
    │   └─→ Project Overview
    │
    ├─→ QUICK_REFERENCE.md
    │   └─→ Common Commands
    │
    ├─→ FOLDER_STRUCTURE.md
    │   └─→ Organization
    │
    ├─→ DEVELOPMENT_WORKFLOW.md
    │   └─→ Daily Workflow
    │
    └─→ UPGRADE_GUIDE.md
        └─→ Detailed Changes
```

---

**Use this guide to understand how everything connects! 🧠**

*Visual diagrams help you see the big picture!*

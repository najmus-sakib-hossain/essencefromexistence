# Friday - Your AI Friend! 🚀

A modern, professional Next.js 15 application built with best practices and the latest technologies.

## ✨ Features

- ⚡️ **Next.js 15** - App Router with Server Components
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **Radix UI** - Accessible component primitives
- 📝 **TypeScript** - Type-safe development
- 🎭 **Framer Motion** - Smooth animations
- 📊 **Recharts** - Beautiful charts
- 🔍 **ESLint & Prettier** - Code quality and formatting
- 🐕 **Husky** - Git hooks for quality control
- 📦 **Turbopack** - Fast bundler (dev mode)
- 🌙 **Dark Mode** - Built-in theme switching

## 📋 Prerequisites

- Node.js >= 18.18.0
- npm >= 9.0.0

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
NEXT_PUBLIC_APP_NAME="Friday"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
# Add other required variables...
```

### 3. Initialize Git Hooks (Optional)

```bash
npm run prepare
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Check TypeScript types |
| `npm run clean` | Clean build artifacts |

## 📁 Project Structure

```
www/
├── app/              # Next.js App Router
├── components/       # React components
│   ├── ui/          # Base UI components
│   └── sidebar/     # Sidebar components
├── config/          # App configuration
├── content/         # Content & articles
├── data/            # Static data
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── public/          # Static assets
├── styles/          # Global styles
└── types/           # TypeScript types
```

See [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) for detailed structure documentation.

## 🔧 Configuration

### TypeScript

- Strict mode enabled
- Path aliases configured (`@/*`)
- Modern ES2022 target
- Comprehensive type checking

### Next.js

- Image optimization configured
- Security headers enabled
- Performance optimizations
- Turbopack for fast development

### Code Quality

- **ESLint**: Linting with Next.js and Tailwind CSS rules
- **Prettier**: Code formatting with Tailwind CSS plugin
- **Husky**: Pre-commit and pre-push hooks
- **lint-staged**: Run linters on staged files

## 🎨 Styling

This project uses:
- Tailwind CSS for utility-first styling
- CSS variables for theming
- Radix UI for accessible components
- Framer Motion for animations

## 🌐 Environment Variables

See `.env.example` for all available environment variables.

Required variables:
- `NEXT_PUBLIC_APP_NAME` - Application name
- `NEXT_PUBLIC_APP_URL` - Application URL

Optional variables:
- Analytics, Database, Authentication, etc.

All environment variables are validated at runtime using Zod schemas (see `lib/env.ts`).

## 📦 Key Dependencies

### Production
- **next**: 15.1.7
- **react**: 19.0.0
- **typescript**: 5.7.2
- **tailwindcss**: 3.4.17
- **framer-motion**: 11.15.0
- **@radix-ui/react-***: Latest versions

### Development
- **eslint**: 9.16.0
- **prettier**: 3.4.2
- **husky**: 9.1.7
- **turbo**: 2.4.4

## 🏗️ Building for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 📈 Performance

This project includes:
- Automatic image optimization
- Static page generation where possible
- Code splitting and lazy loading
- Optimized fonts (Geist)
- Compression enabled

## 🔒 Security

Security headers configured:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Strict-Transport-Security
- Referrer-Policy
- Permissions-Policy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)

---

Built with ❤️ using Next.js 15
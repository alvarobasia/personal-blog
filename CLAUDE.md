# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev --turbopack` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm ci` - Clean install dependencies

## Architecture Overview

This is a Next.js 15 personal blog built with TypeScript, React 19, and Tailwind CSS. The application uses the App Router pattern and follows a component-based architecture.

### Key Structure

- **Pages**: Built using App Router in `src/app/`
- **Components**: Reusable UI components in `src/components/`
- **Blog System**: MDX-based blog posts stored in `src/app/blog/contents/` and processed by `src/app/blog/utils.ts`
- **Styling**: Tailwind CSS with custom fonts (Geist, Lexend Deca, DM Serif Display, Source Code Pro)
- **Theming**: Dark/light mode support via `next-themes` with custom ThemeProvider

### Component Architecture

- **Layout Components**: `Header`, `Footer`, `AsideMenu` for navigation
- **Content Components**: `LatestPosts` displays blog posts with sorting and filtering
- **UI Components**: Shadcn/ui components in `src/components/ui/`
- **Theme Components**: `ThemeProvider`, `Texture` for visual effects

### Blog System

- Uses `gray-matter` to parse MDX frontmatter
- Blog posts stored as `.mdx` files in `src/app/blog/contents/`
- `getBlogPosts()` function reads and parses all blog posts
- Custom date formatting with Portuguese localization
- Posts include metadata: title, summary, category, publishedAt

### Styling & Theming

- Tailwind CSS with custom configuration
- Multiple Google Fonts loaded with CSS variables
- Blue color scheme (#3b82f6) as primary
- Responsive design with mobile-first breakpoints
- Dark/light theme toggle in header

### Code Quality & Git Workflow

- ESLint configuration with Next.js rules
- Prettier for code formatting
- Husky git hooks for pre-commit validation
- Commitlint for conventional commit messages
- Currently on `add-footer` branch with `main` as primary branch
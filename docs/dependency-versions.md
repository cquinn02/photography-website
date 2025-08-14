# Dependency Versions - Research Results

## Research Findings

### Core Runtime
- **Node.js**: 22.11.0 (Current LTS version as of 2025)

### Core Framework & Libraries
- **Next.js**: 15.4.6 (Latest stable - Next.js 15 line)
- **React**: 19.1.0 (Latest stable)
- **React DOM**: 19.1.0 (Match React version)

### Language & Tools
- **TypeScript**: 5.9.2 (Latest stable)

### Styling (v4.1+ REQUIRED)
- **Tailwind CSS**: 4.1.0 (MUST be v4.1+ minimum per requirements)
- **@tailwindcss/postcss**: 4.1.0 (Match Tailwind version)
- **PostCSS**: 8.5.6 (Latest stable)
- **Autoprefixer**: 10.4.21 (Latest stable)

### Development Dependencies
- **@types/node**: 22.11.0 (Match Node.js LTS major version)
- **@types/react**: 19.1.10 (Match React major version)
- **@types/react-dom**: 19.1.7 (Match React DOM major version)
- **ESLint**: 9.33.0 (Latest stable)
- **eslint-config-next**: 15.4.6 (Match Next.js version)
- **Prettier**: 3.6.2 (Latest stable)

### Additional Dependencies
- **next-seo**: 6.8.0 (Latest stable)
- **lucide-react**: 0.539.0 (Latest stable)
- **gray-matter**: 4.0.3 (Latest stable - still widely used)

## Installation Commands
Update these with researched versions:

```bash
# Core dependencies
pnpm add next@15.4.6 react@19.1.0 react-dom@19.1.0 typescript@5.9.2

# Styling dependencies  
pnpm add tailwindcss@4.1.0 @tailwindcss/postcss@4.1.0 postcss@8.5.6 autoprefixer@10.4.21

# Development dependencies
pnpm add -D @types/node@22.11.0 @types/react@19.1.10 @types/react-dom@19.1.7 eslint@9.33.0 eslint-config-next@15.4.6 prettier@3.6.2

# Additional dependencies
pnpm add next-seo@6.8.0 lucide-react@0.539.0 gray-matter@4.0.3
```

## Critical Notes
- Use EXACT researched versions - NO SUBSTITUTIONS
- Tailwind CSS MUST be v4.1.0 or higher per project requirements
- All versions researched on: August 14, 2025
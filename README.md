# SM Fresh Hyper - Fresh Produce Website

A modern, interactive website for a fresh produce business featuring 3D animations, smooth transitions, and responsive design. Built with Next.js 13+, React Three Fiber, and Tailwind CSS.

## ✨ Features

- **3D Interactive Elements**: Animated fruit and vegetable models using React Three Fiber
- **Responsive Design**: Fully responsive across all devices with Tailwind CSS
- **Product Catalog**: Categorized product browsing with filtering and search
- **Contact Integration**: Contact forms with email integration via Formspree
- **Gallery & Testimonials**: Image gallery with lightbox and customer testimonials
- **Offers & Promotions**: Dynamic offers with countdown timers
- **Performance Optimized**: Static site generation, image optimization, and lazy loading
- **SEO Ready**: Optimized meta tags, structured data, and semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS v4 with custom design tokens
- **3D Graphics**: React Three Fiber + Drei
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
sm-fresh-hyper/
├── public/
│   ├── images/          # Optimized product and gallery images
│   ├── models/          # 3D models (.glb format)
│   └── icons/           # SVG icons and favicon
├── src/
│   ├── app/             # Next.js 13+ App Router pages
│   ├── components/      # Reusable UI components
│   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   ├── ui/          # UI components (Cards, Buttons)
│   │   ├── 3d/          # 3D model components
│   │   ├── forms/       # Form components
│   │   └── gallery/     # Gallery components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions
│   ├── data/            # Static data files
│   └── types/           # TypeScript type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sm-fresh-hyper
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Add the SM Fresh Mart logo:
   - Save the logo image as `public/images/sm-fresh-mart-logo.png`
   - The logo should be in PNG format with transparent background
   - Recommended size: 200x200px or higher for crisp display

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts

## 🎨 Design System

The project uses a custom design system with fresh produce-inspired colors:

- **Primary**: Fresh green (#22c55e)
- **Secondary**: Orange accent (#f97316) 
- **Accent**: Yellow highlight (#eab308)
- **Typography**: Inter for body text, Poppins for headings

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project is configured for static export and can be deployed to any static hosting service:

```bash
npm run build
```

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. Please contact the project maintainer for contribution guidelines.
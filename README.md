# 🚀 Anurag Kumar - 3D Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.2.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.183.0-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com)

> **Premium SaaS-like 3D Developer Portfolio** - A cutting-edge, interactive portfolio showcasing full-stack development expertise with immersive 3D experiences and modern web technologies.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-6366F1?style=for-the-badge&logo=vercel)
![Status](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge)


## 🌟 Live Demo

[🔗 **View Live Portfolio**](https://anurag-new-portfolio.vercel.app/) - Experience the interactive 3D portfolio in action!

## ✨ Features

### 🎨 **Immersive 3D Experience**
- **Interactive 3D Background**: Dynamic particle systems and floating geometric shapes
- **Hero Sphere Animation**: Rotating 3D sphere with connecting nodes and mouse-responsive interactions
- **Floating Icons**: Animated tech stack icons that respond to user presence
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions

### 🌐 **Multi-Language Support**
- **English & Hindi**: Complete bilingual interface with seamless language switching
- **Context-Aware Content**: All sections adapt to selected language dynamically

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all screen sizes from mobile to desktop
- **Glass Morphism UI**: Modern glass-card components with backdrop blur effects
- **Dark Theme**: Professional dark theme with carefully crafted color palette

### 🚀 **Performance Optimized**
- **Next.js 16**: Latest App Router with server components and streaming
- **Lazy Loading**: 3D components loaded only when needed
- **Optimized Images**: Efficient image loading and caching
- **Preloader**: Engaging loading animation with progress tracking

### 📧 **Contact Integration**
- **Nodemailer API**: Server-side email handling with SMTP configuration
- **Form Validation**: Client-side validation with success/error feedback
- **Secure Communication**: Environment variable protected credentials

### 🎯 **Interactive Sections**

#### **Hero Section**
- Animated introduction with gradient text effects
- Social media links with hover animations
- Call-to-action buttons with glow effects

#### **About Section**
- Personal story and development philosophy
- Key highlights with animated cards
- Professional background and expertise

#### **Skills Section**
- Categorized tech stack (Frontend, Backend, Database, DevOps, Languages)
- Interactive skill cards with hover effects
- Comprehensive technology coverage

#### **Projects Section**
- Featured projects with detailed case studies
- Challenge-Solution-Result format
- Live demo and source code links
- Tech stack badges for each project

#### **Journey Section**
- Professional experience timeline
- Education background
- Achievement counters with animations
- Certification highlights

#### **Certificates Section**
- Industry-recognized certifications
- Direct PDF links to certificates
- Organized by issuer and date

#### **Contact Section**
- Interactive contact form
- Social media integration
- Direct email and messaging links

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript

### **Styling & UI**
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library
- **Custom Glass Components** - Reusable UI components

### **3D Graphics**
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### **Backend & APIs**
- **Next.js API Routes** - Server-side API endpoints
- **Nodemailer** - Email sending functionality
- **SMTP Integration** - Secure email delivery

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript Compiler** - Type checking

### **Deployment**
- **Vercel** - Cloud platform for deployment
- **Environment Variables** - Secure configuration management

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── api/contact/             # Contact form API endpoint
│   ├── globals.css              # Global styles and Tailwind config
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page component
├── components/                   # Reusable React components
│   ├── 3d/                      # Three.js components
│   │   ├── GlobalBackground.tsx # 3D background scene
│   │   ├── HeroFloatingIcons.tsx# Floating tech icons
│   │   ├── HeroSphere.tsx       # Interactive 3D sphere
│   │   └── SceneContainer.tsx   # 3D scene wrapper
│   ├── layout/                  # Layout components
│   │   ├── CustomCursor.tsx     # Custom mouse cursor
│   │   └── Navbar.tsx           # Navigation bar
│   ├── sections/                # Page sections
│   │   ├── About.tsx            # About section
│   │   ├── Certificates.tsx     # Certifications
│   │   ├── Contact.tsx          # Contact form
│   │   ├── Hero.tsx             # Hero section
│   │   ├── IDCard.tsx           # ID card component
│   │   ├── Journey.tsx          # Experience & achievements
│   │   ├── Projects.tsx         # Projects showcase
│   │   └── Skills.tsx           # Skills section
│   └── ui/                      # UI components
│       ├── GlassCard.tsx        # Glass morphism card
│       ├── GlowButton.tsx       # Animated button
│       ├── Preloader.tsx        # Loading animation
│       └── SectionHeader.tsx    # Section headers
├── context/                     # React context providers
│   └── LanguageContext.tsx      # Language switching
├── lib/                         # Utility libraries
│   ├── translations.ts          # Multi-language content
│   └── utils.ts                 # Helper functions
├── public/                      # Static assets
│   ├── assets/
│   │   └── certificates/        # Certificate PDFs
│   └── screenshots/             # Project screenshots
└── Configuration Files
    ├── next.config.ts           # Next.js configuration
    ├── tailwind.config.ts       # Tailwind CSS config
    ├── tsconfig.json            # TypeScript config
    ├── postcss.config.mjs       # PostCSS config
    └── eslint.config.mjs        # ESLint config
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anuragkumar86/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Email Configuration (for contact form)
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-email@domain.com
   SMTP_PASS=your-app-password
   CONTACT_RECEIVER=your-email@domain.com

   # Optional: Analytics or other services
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### **Color Theme**
Modify colors in `app/globals.css`:
```css
--color-primary: #6366F1;    /* Indigo */
--color-secondary: #22D3EE;  /* Cyan */
--color-accent: #A78BFA;     /* Purple */
--color-success: #10B981;    /* Emerald */
```

### **Content Updates**
- **Personal Info**: Update `app/layout.tsx` metadata
- **Projects**: Modify `components/sections/Projects.tsx`
- **Skills**: Edit `components/sections/Skills.tsx`
- **Experience**: Update `components/sections/Journey.tsx`
- **Translations**: Modify `lib/translations.ts`

### **3D Effects**
Customize 3D components in `components/3d/`:
- **HeroSphere.tsx**: Adjust particle count and animation
- **GlobalBackground.tsx**: Modify background effects
- **HeroFloatingIcons.tsx**: Change floating elements

## 📱 Mobile Responsiveness

The portfolio is fully responsive with:
- **Mobile-first design** approach
- **Touch-friendly interactions**
- **Optimized 3D performance** on mobile devices
- **Adaptive layouts** for all screen sizes

## 🌍 Browser Support

- **Chrome** (recommended)
- **Firefox**
- **Safari**
- **Edge**
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow **TypeScript** best practices
- Use **ESLint** configuration
- Maintain **responsive design** principles
- Test on multiple browsers and devices
- Keep 3D animations **performance-optimized**

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Anurag Kumar** - Full Stack Developer

- **Email**: anuragkr8651@gmail.com
- **LinkedIn**: [linkedin.com/in/anuragkumar86](https://linkedin.com/in/anuragkumar86)
- **GitHub**: [github.com/anuragkumar86](https://github.com/anuragkumar86)
- **LeetCode**: [leetcode.com/u/anuragkr8651](https://leetcode.com/u/anuragkr8651)
- **HackerRank**: [hackerrank.com/profile/anuragkr8651](https://www.hackerrank.com/profile/anuragkr8651)
- **Twitter/X**: [@anuragkr8651](https://twitter.com/anuragkr8651)
- **Instagram**: [@_anurag_yadav_86](https://instagram.com/_anurag_yadav_86)

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Three.js** community for 3D graphics capabilities
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **React** ecosystem for powerful development tools

---

<div align="center">

**Built with ❤️ using Next.js, TypeScript, and Three.js**

⭐ **Star this repo** if you found it helpful!

[🔝 Back to Top](#-anurag-kumar---3d-portfolio)

</div>
# Cluster Neuron Website

A modern, beautiful, and production-ready website built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with production best practices
- **SEO Ready**: Meta tags, sitemap, and robots.txt included
- **TypeScript**: Full type safety for better development experience
- **Component-Based**: Modular architecture with reusable components
- **Dark Mode**: Automatic dark/light theme support
- **Accessibility**: WCAG compliant with semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cluster-neuron-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy environment variables:
```bash
cp .env.local.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🎯 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── sitemap.ts         # SEO sitemap
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── navigation.tsx    # Navigation bar
│   ├── hero.tsx         # Hero section
│   ├── features.tsx     # Features section
│   ├── technology.tsx   # Technology stack
│   ├── cta.tsx          # Call-to-action
│   └── footer.tsx       # Footer
├── lib/                  # Utility functions
│   └── utils.ts         # Helper functions
├── public/              # Static assets
│   └── robots.txt      # SEO robots file
└── README.md           # This file
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on push

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

### Environment Variables

Configure these environment variables for production:

```bash
# App Configuration
NODE_ENV=production
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=your-secret-key

# Analytics
GOOGLE_ANALYTICS_ID=your-ga-id

# Email (if using contact forms)
RESEND_API_KEY=your-resend-api-key
FROM_EMAIL=noreply@yourdomain.com
```

## 🔧 Customization

### Branding

Update the branding in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Company Name",
  description: "Your company description",
  // ... other metadata
};
```

### Colors

Modify the color scheme in `app/globals.css` by updating the CSS variables:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other colors */
}
```

### Content

Update the content in the component files:

- `components/hero.tsx` - Hero section content
- `components/features.tsx` - Features list
- `components/technology.tsx` - Technology stack
- `components/cta.tsx` - Call-to-action text

## 🎨 Design System

### Colors

- **Primary**: Blue gradient
- **Secondary**: Gray tones
- **Accent**: Purple and pink gradients
- **Dark Mode**: Automatic support

### Typography

- **Font**: Inter (modern, clean)
- **Headings**: Bold, gradient text
- **Body**: Clean, readable

### Animations

- Smooth scroll animations
- Hover effects
- Micro-interactions
- Loading states

## 📱 Performance

The site is optimized for performance with:

- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic bundle splitting
- **Tree Shaking**: Unused code elimination
- **Caching**: Proper cache headers
- **Minification**: CSS/JS minification

## 🔒 Security

Implemented security measures:

- **Headers**: Security headers in Next.js config
- **CSRF Protection**: Built-in Next.js protection
- **Content Security Policy**: Configurable CSP headers
- **Input Validation**: TypeScript type checking

## 🌐 SEO

Search engine optimization features:

- **Meta Tags**: Comprehensive metadata
- **Structured Data**: JSON-LD markup
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine instructions
- **Semantic HTML**: Proper HTML5 structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Add feature"`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, please contact:

- **Email**: hello@clusterneuron.com
- **Website**: https://clusterneuron.com
- **Documentation**: Check the component files for inline documentation

---

Built with ❤️ by the Cluster Neuron team
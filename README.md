# Portfolio Website - Next.js

A modern, professional portfolio website built with Next.js 15, TypeScript, and TailwindCSS v4.

## 🎨 Color Palette

- **Primary Color**: `#1c3452`
- **Secondary Color**: `#dfd2d8`
- **Accent Color**: `#e9d385`
- **Extra Color 1**: `#f1d025`
- **Extra Color 2**: `#7da2a2`

## 📄 Pages

1. **Home Page** - Hero section, services grid, and technologies showcase
2. **Request Service** - Comprehensive service request form
3. **Contact** - Legal terms and contact information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Configure email settings (optional but recommended):
   - Copy `.env.example` to `.env.local`
   - Add your Gmail credentials:
     - Enable 2-factor authentication on your Google account
     - Generate an App Password at https://myaccount.google.com/apppasswords
     - Add the credentials to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📧 Email Configuration

The contact form uses Nodemailer with Gmail SMTP. To enable email functionality:

1. Create a `.env.local` file in the root directory
2. Add your email credentials:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

**Important**: Use an App Password, not your regular Gmail password.

## 🏗️ Project Structure

```
portfolio-test-antigravity/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts          # Email API endpoint
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── request-service/
│   │   └── page.tsx              # Service request form
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── Footer.tsx                # Footer component
│   ├── Navbar.tsx                # Navigation bar
│   ├── ServiceCard.tsx           # Service card component
│   └── TechIcon.tsx              # Technology icon component
├── tailwind.config.ts            # Tailwind configuration
├── next.config.ts                # Next.js configuration
└── package.json                  # Dependencies
```

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Nodemailer** - Email sending functionality

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## 📝 Customization

### Colors

Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  primary: "#1c3452",
  secondary: "#dfd2d8",
  accent: "#e9d385",
  extra1: "#f1d025",
  extra2: "#7da2a2",
}
```

### Services

Edit the services array in `app/page.tsx` to add or modify services.

### Technologies

Edit the technologies array in `app/page.tsx` to update the tech stack.

## 📧 Contact

Email: kksleman50@gmail.com

## 📄 License

This project is created for portfolio purposes.

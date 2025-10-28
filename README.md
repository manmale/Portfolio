# Premium Portfolio - Modern & Elegant

A stunning, professional portfolio website built with cutting-edge technologies and premium design. Features smooth animations, a video background, and an elegant color scheme that stands out.

## ✨ Features

- 🎬 **Professional Video Background** - Eye-catching video background in the hero section
- 🎨 **Premium Design** - Elegant color scheme with purple and gold gradients
- ✨ **Smooth Animations** - Framer Motion powered animations throughout
- 📱 **Fully Responsive** - Perfect on all devices and screen sizes
- ⚡ **Lightning Fast** - Built with Next.js 14 for optimal performance
- 🎯 **Modern Stack** - React, TypeScript, Tailwind CSS
- 🌟 **Glass Morphism** - Beautiful glassmorphic UI elements
- 🎭 **Custom Scrollbar** - Branded scrollbar with gradient

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Background Video** (Optional but Recommended)
   - Download a professional background video (MP4 format)
   - Recommended sources:
     - [Pexels Videos](https://www.pexels.com/videos/)
     - [Pixabay](https://pixabay.com/videos/)
     - [Coverr](https://coverr.co/)
   - Save it as `public/video/background.mp4`
   - Recommended specs:
     - Format: MP4 (H.264)
     - Resolution: 1920x1080 or higher
     - Duration: 10-30 seconds
     - File size: Under 10MB

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Your Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - You should see your premium portfolio!

## 🎨 Customization

### 1. Personal Information

Edit the following files to add your information:

**Hero Section** (`components/Hero.tsx`):
- Update the main heading
- Customize the description
- Adjust button text

**About Section** (`components/About.tsx`):
- Replace the profile picture placeholder with your image
- Update the about text
- Modify statistics

**Skills Section** (`components/Skills.tsx`):
- Add/remove skill categories
- Update skill lists

**Expertise Section** (`components/Expertise.tsx`):
- Customize service descriptions
- Adjust expertise areas

### 2. Colors

The portfolio uses a premium purple and gold color scheme. To customize:

**Edit `tailwind.config.js`**:
```javascript
colors: {
  primary: { /* Your primary color shades */ },
  gold: { /* Your accent color shades */ },
}
```

### 3. Profile Picture

Replace the placeholder in `components/About.tsx`:
```tsx
{/* Replace this placeholder div with an img tag */}
<img 
  src="/images/profile.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover"
/>
```

### 4. Social Links

Update social media links in `components/Footer.tsx`:
```tsx
const socialLinks = [
  { icon: FiGithub, href: 'your-github-url', label: 'GitHub' },
  { icon: FiLinkedin, href: 'your-linkedin-url', label: 'LinkedIn' },
  // ...
]
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter & Playfair Display)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The portfolio can be deployed to:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Render**
- Any platform that supports Next.js

## 📝 License

This project is open source and available under the MIT License.

## 🎯 What Makes This Portfolio Stand Out

✅ **Premium Design** - Not your typical portfolio template
✅ **Professional Animations** - Smooth, elegant transitions
✅ **Modern Tech Stack** - Built with the latest technologies
✅ **Fully Customizable** - Easy to adapt to your needs
✅ **Performance Optimized** - Fast loading and smooth scrolling
✅ **Attention to Detail** - Every pixel carefully crafted

## 💡 Tips for Best Results

1. **Use high-quality images** for your profile picture
2. **Choose a professional video** that matches your brand
3. **Customize the text** to reflect your unique voice
4. **Keep animations smooth** - don't overdo it
5. **Test on mobile devices** to ensure responsiveness
6. **Optimize images and videos** for web performance

## 🤝 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Built with ❤️ and cutting-edge technology**

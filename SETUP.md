# Quick Setup Guide

Follow these steps to get your premium portfolio running:

## 1. Install Dependencies ✅

Already done! Dependencies are installed.

## 2. Start the Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 3. Customize Your Portfolio

### Add Your Profile Picture

1. Create a `public/images` folder
2. Add your profile picture (e.g., `profile.jpg`)
3. Update `components/About.tsx` (around line 45):

```tsx
// Replace the placeholder div with:
<img 
  src="/images/profile.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover rounded-2xl"
/>
```

### Add Background Video

1. Download a professional video from:
   - [Pexels Videos](https://www.pexels.com/videos/)
   - Search for: "technology abstract", "digital network", "coding"
2. Save as `public/video/background.mp4`
3. Recommended specs:
   - Format: MP4
   - Size: Under 10MB
   - Resolution: 1920x1080

### Update Personal Information

**Hero Section** (`components/Hero.tsx`):
- Line 30-32: Update main heading
- Line 36-40: Update description

**About Section** (`components/About.tsx`):
- Line 67-82: Update about text
- Line 19-21: Update statistics

**Skills Section** (`components/Skills.tsx`):
- Line 18-47: Add/remove skills

**Footer** (`components/Footer.tsx`):
- Line 8-11: Update social media links

## 4. Color Customization (Optional)

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Purple shades - change to your brand color
  },
  gold: {
    // Gold shades - change to your accent color
  },
}
```

## 5. Deploy

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Option 2: Build Locally
```bash
npm run build
npm start
```

## 🎨 Design Features

- **Premium Colors**: Purple & Gold gradient theme
- **Smooth Animations**: Framer Motion throughout
- **Glass Morphism**: Modern glassmorphic effects
- **Responsive**: Works on all devices
- **Video Background**: Professional hero section
- **Custom Scrollbar**: Branded gradient scrollbar

## 📱 Testing

Test your portfolio on:
- Desktop browsers (Chrome, Firefox, Safari)
- Mobile devices
- Different screen sizes

## 🚀 Performance Tips

1. Optimize images (use WebP format)
2. Keep video under 10MB
3. Use lazy loading for images
4. Test with Lighthouse

## ⚡ Quick Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎯 Need Help?

- Check the main README.md for detailed documentation
- All components are well-commented
- Each section is modular and easy to customize

---

**Your premium portfolio is ready to shine! 🌟**

# Deployment Guide

This guide covers various deployment options for the Trucking Dispatch Pro website.

## 🚀 Quick Deployment Options

### 1. Netlify (Recommended)
1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder
   - Or connect your Git repository for automatic deployments

3. **Custom Domain**:
   - Add your custom domain in Netlify settings
   - Update DNS records as instructed

### 2. Vercel
1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Connect Git Repository** (Recommended):
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Automatic deployments on push

### 3. GitHub Pages
1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   "homepage": "https://username.github.io/trucking-dispatch-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### 4. AWS S3 + CloudFront
1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload to S3**:
   ```bash
   aws s3 sync build/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront**:
   - Create CloudFront distribution
   - Set S3 bucket as origin
   - Configure custom domain

## 🔧 Pre-Deployment Checklist

### 1. Update Environment Variables
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### 2. Update Company Information
- Edit `src/components/Footer.tsx` for contact details
- Update `src/components/Navbar.tsx` for company name
- Modify `src/components/Contact.tsx` for form handling

### 3. Optimize Images
- Compress all images
- Use WebP format when possible
- Add alt tags for accessibility

### 4. Test Everything
```bash
npm test
npm run build
# Test the build locally
serve -s build
```

## 📊 Performance Optimization

### 1. Build Optimization
The production build includes:
- Code splitting
- Tree shaking
- Minification
- Image optimization

### 2. Bundle Analysis
```bash
npm install --save-dev webpack-bundle-analyzer
analyze = npx webpack-bundle-analyzer build/static/js/*.js
```

### 3. Lighthouse Score
- Target: 95+ Performance score
- Test with Chrome DevTools Lighthouse
- Optimize based on recommendations

## 🔒 Security Considerations

### 1. HTTPS
- Always use HTTPS in production
- Configure SSL certificates
- Update all HTTP links to HTTPS

### 2. Content Security Policy
Add CSP headers to your hosting platform:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
```

### 3. Environment Variables
- Never commit `.env.local` files
- Use secure hosting for sensitive data
- Rotate API keys regularly

## 🌐 Domain Configuration

### 1. DNS Settings
```
A Record: @ -> IP_ADDRESS
A Record: www -> IP_ADDRESS
CNAME: www -> yourdomain.com (if using subdomain)
```

### 2. SSL Certificate
- Let's Encrypt (free)
- Comodo PositiveSSL
- DigiCert (enterprise)

## 📱 Mobile Optimization

### 1. Responsive Testing
- Test on actual devices
- Use Chrome DevTools device emulation
- Verify touch interactions

### 2. Performance
- Optimize images for mobile
- Minimize JavaScript bundle
- Enable compression

## 🔍 SEO Optimization

### 1. Meta Tags
Update `public/index.html`:
```html
<title>Trucking Dispatch Pro - Maximize Your Revenue</title>
<meta name="description" content="Professional trucking dispatch services helping drivers maximize their revenue with expert load booking and 24/7 support.">
<meta name="keywords" content="trucking dispatch, load booking, trucking services, logistics">
```

### 2. Sitemap
Generate sitemap for search engines:
```bash
npm install --save-dev sitemap
```

### 3. Robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

## 📈 Analytics Setup

### 1. Google Analytics
Add to `public/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### 2. Hotjar (Optional)
```html
<!-- Hotjar Tracking Code -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## 🚨 Monitoring

### 1. Uptime Monitoring
- Use UptimeRobot or Pingdom
- Monitor website availability
- Set up alerts for downtime

### 2. Error Tracking
- Sentry for error monitoring
- LogRocket for session replay
- Custom error logging

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy to Netlify
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    - name: Install dependencies
      run: npm ci
    - name: Build
      run: npm run build
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --dir=build --prod
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 📞 Support

For deployment issues:
- Check the build logs
- Verify environment variables
- Test in staging environment first
- Contact hosting provider support

---

**Remember**: Always test deployments in a staging environment before going to production!

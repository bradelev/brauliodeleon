# Deployment Guide

This document outlines the deployment process for brauliodeleon.com on Vercel.

## Prerequisites

- GitHub repository with the code
- Vercel account
- Domain name (brauliodeleon.com) with DNS access

## Deployment Steps

### 1. Connect Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import the Git repository: `bradelev/brauliodeleon`
4. Vercel will automatically detect Next.js configuration

### 2. Configure Project Settings

Vercel will auto-configure based on `vercel.json`, but verify:

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next` (default)
- **Install Command:** `npm install`
- **Development Command:** `npm run dev`

### 3. Environment Variables

No environment variables required for initial deployment.

### 4. Deploy

Click "Deploy" - Vercel will:
- Install dependencies
- Run build process
- Deploy to production

### 5. Configure Custom Domain

1. Go to Project Settings > Domains
2. Add custom domain: `brauliodeleon.com`
3. Configure DNS records as instructed by Vercel:
   - Add A record pointing to Vercel's IP
   - Or add CNAME record for `www` subdomain

**DNS Configuration Example:**
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP - verify current IP in Vercel dashboard)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 6. Enable Automatic Deployments

By default, Vercel enables:
- **Production deployments** on push to `main` or `master` branch
- **Preview deployments** on pull requests

## Deployment Workflow

1. Push code to `feature/*` branch
2. Create pull request to `main`
3. Vercel creates preview deployment
4. Review changes on preview URL
5. Merge to `main`
6. Automatic production deployment

## Monitoring

- View deployment logs in Vercel Dashboard
- Monitor performance with Vercel Analytics (optional)
- Check deployment status at: `https://vercel.com/[username]/brauliodeleon`

## Rollback

If needed, rollback to previous deployment:
1. Go to Deployments tab
2. Find previous successful deployment
3. Click "Promote to Production"

## Additional Configuration

### Performance Optimization
- Enable Image Optimization (enabled by default)
- Configure caching headers if needed
- Enable Vercel Analytics for performance monitoring

### Security
- Configure security headers in `next.config.mjs` if needed
- Set up HTTPS (automatic with Vercel)
- Configure CORS if needed for API routes

## Troubleshooting

**Build Fails:**
- Check build logs in Vercel dashboard
- Verify all dependencies are in `package.json`
- Test build locally: `npm run build`

**Domain Not Working:**
- Verify DNS records are correctly configured
- DNS changes can take up to 48 hours to propagate
- Use `dig` or `nslookup` to verify DNS configuration

**Preview Deployments Not Working:**
- Check GitHub integration in Vercel
- Verify Vercel app has access to repository
- Check branch protection rules

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Custom Domain Setup](https://vercel.com/docs/custom-domains)

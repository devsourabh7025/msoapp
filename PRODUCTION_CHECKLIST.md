# Production Deployment Checklist

## Issues Fixed

### 1. Login Not Working in Production

**Possible Causes:**
- Cookie `secure` flag requires HTTPS
- Environment variables not set in production
- JWT_SECRET mismatch between test and production
- Database connection issues

**Fixes Applied:**
- ✅ Improved cookie secure flag detection (checks for HTTPS properly)
- ✅ Better error handling in login routes

**What to Check:**

1. **Environment Variables in Production (Vercel):**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Ensure these are set for **Production** environment:
     - `MONGODB_URI` - Your MongoDB connection string
     - `JWT_SECRET` - Must be the SAME as test server (or users won't be able to login)
     - `ADMIN_SECRET` - Optional, for admin creation
   - **Important:** After adding/changing variables, you MUST redeploy

2. **JWT_SECRET Must Match:**
   - If test and production use different JWT_SECRET, tokens from test won't work in production
   - **Solution:** Use the same JWT_SECRET in both environments, OR users need to login again in production

3. **Database Connection:**
   - Ensure MongoDB Atlas allows connections from Vercel's IP addresses
   - In MongoDB Atlas → Network Access → Add IP Address → Use `0.0.0.0/0` (allow all) for production
   - Or add Vercel's IP ranges

4. **Cookie Settings:**
   - Cookies now automatically detect HTTPS in production
   - Should work on Vercel (which uses HTTPS by default)

### 2. UI Not Looking Current in Production

**Possible Causes:**
- Production build is cached/old
- CSS not loading properly
- Build didn't include latest changes

**Solutions:**

1. **Redeploy with Latest Code:**
   ```bash
   # Push latest code to your repository
   git add .
   git commit -m "Update UI and fix production issues"
   git push origin main
   ```
   - Vercel will automatically rebuild and deploy

2. **Force Rebuild in Vercel:**
   - Go to Vercel Dashboard → Your Project → Deployments
   - Click on latest deployment → "Redeploy"
   - Or trigger a new deployment by pushing to your branch

3. **Clear Browser Cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or clear browser cache completely

4. **Check Build Logs:**
   - In Vercel Dashboard → Deployments → Click on deployment → View build logs
   - Ensure build completed successfully
   - Check for any errors or warnings

## Environment Variables Required

### Production (Vercel)

Set these in Vercel Dashboard → Settings → Environment Variables:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/databaseName?retryWrites=true&w=majority
JWT_SECRET=your-production-jwt-secret-key
ADMIN_SECRET=your-production-admin-secret-key (optional)
NODE_ENV=production (automatically set by Vercel)
```

**Important Notes:**
- `JWT_SECRET` should be a strong random string
- Use the **same** `JWT_SECRET` in test and production if you want users to stay logged in across environments
- Or use **different** secrets if you want separate authentication per environment

## Testing Production Login

1. **Check Environment Variables:**
   - Verify all variables are set in Vercel dashboard
   - Ensure they're set for "Production" environment

2. **Test Login:**
   - Go to your production URL: `https://your-domain.vercel.app/login`
   - Try logging in with test credentials
   - Check browser console for errors
   - Check Network tab to see if cookies are being set

3. **Check Cookie:**
   - After login, check browser DevTools → Application → Cookies
   - Should see `token` cookie with `HttpOnly` and `Secure` flags
   - If cookie is missing, check if HTTPS is being used

4. **Check API Response:**
   - In Network tab, check `/api/login` response
   - Should return 200 status with user data
   - Check `Set-Cookie` header in response

## Common Production Issues

### Issue: "Invalid email or password" in production but works in test

**Cause:** Different databases or different user accounts

**Solution:**
- Ensure both environments use the same MongoDB database
- Or create the same user account in production database
- Or use different credentials for production

### Issue: Cookie not being set

**Cause:** 
- HTTPS not detected properly
- Cookie settings too strict

**Solution:**
- Code now automatically detects HTTPS
- If still not working, check browser console for errors
- Try in incognito mode to rule out cookie conflicts

### Issue: UI looks old/different

**Cause:**
- Production build is cached
- Latest code not deployed

**Solution:**
- Force redeploy in Vercel
- Clear browser cache
- Check that latest commit is deployed

## Quick Fixes

1. **Redeploy Production:**
   - Push latest code to repository
   - Or manually trigger redeploy in Vercel

2. **Verify Environment Variables:**
   - Check Vercel dashboard
   - Ensure all required variables are set
   - Redeploy after adding variables

3. **Test in Incognito:**
   - Open production site in incognito/private window
   - This rules out browser cache issues

4. **Check Build Logs:**
   - Review Vercel deployment logs
   - Look for errors or warnings
   - Ensure build completed successfully

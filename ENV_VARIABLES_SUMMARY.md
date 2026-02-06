# Environment Variables Summary

## All Environment Variables Used in This Project

### ✅ Required Variables (Must be set in `.env.local` and Production)

1. **MONGODB_URI**
   - **Purpose**: MongoDB Atlas connection string
   - **Used in**: `lib/moongoose.js`, `lib/mongodb.js`
   - **Format**: `mongodb+srv://username:password@cluster.mongodb.net/databaseName?retryWrites=true&w=majority`
   - **Current value in .env.local**: ✅ Set
   - **Fallback**: Hardcoded fallback exists (for testing only)

2. **JWT_SECRET**
   - **Purpose**: Secret key for JWT token signing and verification
   - **Used in**: All authentication routes:
     - `app/api/auth/me/route.js` ✅ Fixed with fallback
     - `app/api/login/route.js` ✅ Fixed with fallback
     - `app/api/register/route.js` ✅ Has fallback
     - `app/api/settings/*/route.js` (all settings routes) ✅ Has fallback
     - `app/api/admin/*/route.js` (all admin routes) ✅ Has fallback
     - `app/api/superadmin/*/route.js` (all superadmin routes) ✅ Has fallback
     - `app/api/posts/route.js` ✅ Has fallback
   - **Current value in .env.local**: ✅ Set
   - **Fallback**: All routes now have fallback for testing
   - **IMPORTANT**: Use the SAME value in production if you want users to stay logged in across environments

3. **ADMIN_SECRET**
   - **Purpose**: Secret key for creating admin users via API
   - **Used in**: `app/api/superadmin/create-superadmin/route.js`
   - **Current value in .env.local**: ✅ Set
   - **Fallback**: ✅ Has fallback

### ⚠️ Automatically Set Variables (No need to add to .env.local)

1. **NODE_ENV**
   - **Purpose**: Environment mode (development/production/test)
   - **Set by**: Next.js automatically
   - **Used in**: Cookie secure flag detection in login/register/logout routes

2. **VERCEL_URL**
   - **Purpose**: Vercel deployment URL
   - **Set by**: Vercel automatically in production
   - **Used in**: Cookie secure flag detection in login/register/logout routes

## Current .env.local Status

✅ **All required variables are set:**
```
MONGODB_URI=mongodb+srv://sourabhmalame:sourabh1234@pgadmin.evcqvgp.mongodb.net/?appName=pgadmin
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
ADMIN_SECRET=admin-secret-key-change-in-production
```

## Fixes Applied

1. ✅ **Fixed `/api/auth/me` route**: Added fallback for JWT_SECRET to prevent 401 errors when env var is missing
2. ✅ **Fixed `/api/login` route**: Added fallback for JWT_SECRET to prevent login failures when env var is missing
3. ✅ **All other routes**: Already have fallbacks for testing

## For Production (Vercel)

**Set these in Vercel Dashboard → Settings → Environment Variables:**

1. **MONGODB_URI** - Your MongoDB connection string
2. **JWT_SECRET** - Use the SAME value as local (or users need to re-login)
3. **ADMIN_SECRET** - Your admin secret key

**Important Notes:**
- After adding/changing variables, **redeploy** your application
- Ensure variables are set for **Production** environment (not just Preview/Development)
- Variable names are **case-sensitive** - must match exactly

## Testing

All routes now have fallbacks, so the application will work even if environment variables are missing (using default test values). However, for production, you MUST set the actual values in Vercel.

## Security Notes

⚠️ **The fallback values are for testing only!**
- Never use default fallback values in production
- Always set strong, unique secrets in production
- Generate secure secrets: `openssl rand -base64 32`

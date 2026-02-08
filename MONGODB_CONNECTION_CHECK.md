# MongoDB Connection Check

## Health Check Endpoint

A new endpoint has been created to check MongoDB connection status:

**Endpoint:** `/api/health/db`
- **Development:** `http://localhost:3000/api/health/db`
- **Production:** `https://msoapp.vercel.app/api/health/db`

## How to Check Connection

### Method 1: Browser
1. Open your browser
2. Navigate to: `http://localhost:3000/api/health/db`
3. You'll see a JSON response with connection status

### Method 2: curl (Terminal)
```bash
curl http://localhost:3000/api/health/db
```

### Method 3: PowerShell
```powershell
Invoke-WebRequest -Uri "http://localhost:3000/api/health/db" | Select-Object -ExpandProperty Content
```

### Method 4: Production Check
```bash
curl https://msoapp.vercel.app/api/health/db
```

## Response Format

### Success Response (Connected)
```json
{
  "status": "success",
  "connected": true,
  "connectionState": "connected",
  "connectionStateCode": 1,
  "database": {
    "name": "your-database-name",
    "host": "cluster.mongodb.net",
    "port": 27017
  },
  "collections": 5,
  "message": "MongoDB is connected and working",
  "timestamp": "2026-01-XX..."
}
```

### Error Response (Not Connected)
```json
{
  "status": "error",
  "connected": false,
  "error": "Error message here",
  "connectionState": "error",
  "message": "Failed to connect to MongoDB",
  "timestamp": "2026-01-XX..."
}
```

## Connection States

Mongoose connection states:
- **0** = `disconnected` - Not connected
- **1** = `connected` - Successfully connected ✅
- **2** = `connecting` - Connection in progress
- **3** = `disconnecting` - Disconnecting

## Troubleshooting

### If Connection Fails:

1. **Check Environment Variables**
   - Ensure `MONGODB_URI` is set in `.env.local`
   - For production, check Vercel environment variables

2. **Check MongoDB Atlas**
   - Verify cluster is running
   - Check IP whitelist (should allow `0.0.0.0/0` for production)
   - Verify connection string is correct

3. **Check Network**
   - Ensure internet connection is working
   - Check firewall settings
   - Verify MongoDB Atlas network access

4. **Check Server Logs**
   - Look for connection errors in terminal
   - Check for timeout errors
   - Verify authentication credentials

### Common Errors:

- **ECONNREFUSED**: MongoDB server not reachable
- **MongoServerError**: Authentication or permission issue
- **MongoNetworkError**: Network connectivity problem
- **Timeout**: Connection taking too long (check network/IP whitelist)

## Quick Test Script

You can also test the connection programmatically:

```javascript
// Test in browser console or Node.js
fetch('http://localhost:3000/api/health/db')
  .then(res => res.json())
  .then(data => {
    console.log('MongoDB Status:', data.connected ? '✅ Connected' : '❌ Not Connected');
    console.log('Details:', data);
  });
```

## Notes

- The endpoint attempts to connect if not already connected
- Connection is cached and reused across requests
- The endpoint performs a simple database operation to verify connectivity
- Safe to call frequently (doesn't create multiple connections)

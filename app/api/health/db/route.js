import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import mongoose from "mongoose";

export async function GET() {
  try {
    // Check connection status
    const connectionState = mongoose.connection.readyState;
    const states = {
      0: "disconnected",
      1: "connected",
      2: "connecting",
      3: "disconnecting",
    };

    const stateName = states[connectionState] || "unknown";

    // Try to ensure connection
    await ensureConnected();

    // Verify connection by checking if we can access the database
    const dbName = mongoose.connection.db?.databaseName;
    const host = mongoose.connection.host;
    const port = mongoose.connection.port;

    // Try a simple operation to verify connection
    const collections = await mongoose.connection.db?.admin().listCollections().toArray();

    return NextResponse.json({
      status: "success",
      connected: connectionState === 1,
      connectionState: stateName,
      connectionStateCode: connectionState,
      database: {
        name: dbName || "unknown",
        host: host || "unknown",
        port: port || "unknown",
      },
      collections: collections?.length || 0,
      message: connectionState === 1 
        ? "MongoDB is connected and working" 
        : `MongoDB connection state: ${stateName}`,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("MongoDB health check error:", error);
    return NextResponse.json(
      {
        status: "error",
        connected: false,
        error: error.message,
        connectionState: "error",
        message: "Failed to connect to MongoDB",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

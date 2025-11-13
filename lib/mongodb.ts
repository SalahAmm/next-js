import mongoose from 'mongoose';

// Extend the global object to include mongoose cache
declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  } | undefined;
}

// Get MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Throw error if MONGODB_URI is not defined
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

// Initialize cache object to store connection and promise
// Use global object to persist cache across hot reloads in development
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Establishes and returns a cached MongoDB connection
 * Prevents multiple connections in development due to hot reloading
 * @returns Promise resolving to Mongoose connection
 */
async function connectDB(): Promise<mongoose.Connection> {
  // Return existing connection if available
  if (cached!.conn) {
    return cached!.conn;
  }

  // Create new connection promise if none exists
  if (!cached!.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false, // Disable command buffering for better error handling
    };

    cached!.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      return mongoose.connection;
    });
  }

  try {
    // Await the connection promise and cache the result
    cached!.conn = await cached!.promise;
  } catch (e) {
    // Reset promise on error to allow retry on next call
    cached!.promise = null;
    throw e;
  }

  return cached!.conn;
}

export default connectDB;

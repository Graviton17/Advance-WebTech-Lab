import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://Graviton:Graviton@lab.6qjnycg.mongodb.net/?appName=Lab';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected successfully to MongoDB via Mongoose');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
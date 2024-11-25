import Fastify from 'fastify';
import connectDB from './services/db.service';
import userRoutes from './routes/user.routes';

const app = Fastify();

// Connect to MongoDB
connectDB();

// Register Routes
app.register(userRoutes);

// Start Server
const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log('Server running on http://localhost:3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

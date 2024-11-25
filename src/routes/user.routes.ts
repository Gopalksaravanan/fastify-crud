import { FastifyInstance } from 'fastify';
import User from '../models/user.model';

const userRoutes = async (app: FastifyInstance) => {
  // Create User
  app.post('/users', async (request, reply) => {
    try {
      const newUser = await User.create(request.body);
      reply.status(201).send(newUser);
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  // Read Users
  app.get('/users', async (_, reply) => {
    try {
      const users = await User.find();
      reply.send(users);
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  // Update User
  app.put('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    try {
      const updatedUser = await User.findByIdAndUpdate(id, { new: true });
      if (!updatedUser) return reply.status(404).send({ message: 'User not found' });
      reply.send(updatedUser);
    } catch (error) {
      reply.status(500).send(error);
    }
  });

  // Delete User
  app.delete('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) return reply.status(404).send({ message: 'User not found' });
      reply.status(204).send();
    } catch (error) {
      reply.status(500).send(error);
    }
  });
};

export default userRoutes;

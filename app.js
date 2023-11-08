import express from 'express';
import { config } from 'dotenv';
import apiRoutes from './routes/api.js';
config();

const app = express();

app.use('/api', apiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});

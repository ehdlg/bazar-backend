import { Router } from 'express';
import { getAll, getById } from '../controllers/productsController.js';

const router = Router();

router.get('/', (req, res, next) => {
  res.send('Welcome to the API');
});

router.get('/items', getAll);

router.get('/items/:id', getById);

export default router;

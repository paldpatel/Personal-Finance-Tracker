import { Router } from 'express';
import * as transactionController from '../controllers/transactionController';
import { authenticateToken } from '../middleware/auth';

const router = Router();
router.use(authenticateToken);

router.get('/dashboard', transactionController.getDashboard);
router.post('/sync', transactionController.bulkSync);
router.get('/', transactionController.getAll);
router.get('/:id', transactionController.getOne);
router.post('/', transactionController.create);
router.put('/:id', transactionController.update);
router.delete('/:id', transactionController.remove);

export default router;
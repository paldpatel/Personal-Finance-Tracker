import { Router } from 'express';
import * as budgetController from '../controllers/budgetController';
import { authenticateToken } from '../middleware/auth';

const router = Router();
router.use(authenticateToken);

router.get('/', budgetController.getAll);
router.post('/', budgetController.upsert);
router.delete('/:id', budgetController.remove);

export default router;
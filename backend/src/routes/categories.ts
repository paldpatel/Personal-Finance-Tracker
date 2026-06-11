import { Router } from 'express';
import * as categoryController from '../controllers/categoryController';
import { authenticateToken } from '../middleware/auth';

const router = Router();
router.use(authenticateToken);

router.get('/', categoryController.getAll);
router.post('/', categoryController.create);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.remove);

export default router;
import { Router } from 'express';
import * as AuthController from '../controllers/AuthController';
import * as ProviderController from '../controllers/ProviderController'
import { authMiddleware } from '../middlewares/authmiddleware';

const router = Router();

// ROTAS PÚBLICAS
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);

// ROTAS PROTEGIDAS PELA AUTENTICAÇÃO
router.get('/providers', authMiddleware, ProviderController.listProviders);
router.get('/providers/:id', authMiddleware, ProviderController.getProviderById);

export default router;
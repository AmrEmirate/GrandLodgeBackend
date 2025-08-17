import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import passport from 'passport';
import { generateToken } from '../utils/jwt';

const router = Router();

router.post('/register/user', AuthController.register);
router.post('/register/tenant', AuthController.registerTenant);

router.post('/verify', AuthController.verifyAndSetPassword);
router.post('/resend-verification', AuthController.resendVerification);

router.post('/login', AuthController.login);

router.post('/password-reset/request', AuthController.requestPasswordReset);
router.post('/password-reset/confirm', AuthController.resetPassword);

router.get('/profile', authMiddleware(), AuthController.getProfile);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
  '/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: `${process.env.FRONTEND_URL}/login`,
  }),
  (req, res) => {
    const user = req.user as any;
    const token = generateToken({ id: user.id, role: user.role });
    res.redirect(`${process.env.FRONTEND_URL}/social-login?token=${token}`);
  }
);

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    session: false,
    failureRedirect: `${process.env.FRONTEND_URL}/login`,
  }),
  (req, res) => {
    const user = req.user as any;
    const token = generateToken({ id: user.id, role: user.role });
    res.redirect(`${process.env.FRONTEND_URL}/social-login?token=${token}`);
  }
);

router.get('/twitter', passport.authenticate('twitter'));
router.get(
  '/twitter/callback',
  passport.authenticate('twitter', {
    session: false,
    failureRedirect: `${process.env.FRONTEND_URL}/login`,
  }),
  (req, res) => {
    const user = req.user as any;
    const token = generateToken({ id: user.id, role: user.role });
    res.redirect(`${process.env.FRONTEND_URL}/social-login?token=${token}`);
  }
);

export default router;
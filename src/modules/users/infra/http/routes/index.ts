
import express from 'express'
import { createUserController } from '../../../useCases/createUser';
import { deleteUserController } from '../../../useCases/deleteUser';
import { getUserByUserNameController } from '../../../useCases/getUserByUserName';
import { loginController } from '../../../useCases/login';
import { middleware } from '../../../../../shared/infra/http';
import { getCurrentUserController } from '../../../useCases/getCurrentUser';
import { refreshAccessTokenController } from '../../../useCases/refreshAccessToken';
import { logoutController } from '../../../useCases/logout';

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users routes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: The user's username
 *         isEmailVerified:
 *           type: boolean
 *           description: Whether the user's email is verified
 *         isAdminUser:
 *           type: boolean
 *           description: Whether the user's is an admin user
 *         isDeleted:
 *           type: boolean
 *           description: Whether the user's account is deleted
 *
 *     Member:
 *       type: object
 *       properties:
 *         reputation:
 *           type: integer
 *           description: The member's reputation
 *         user:
 *           $ref: '#/components/schemas/User'
 *           description: The member's user object
 */

const userRouter = express.Router();

userRouter.post('/',
  (req, res) => createUserController.execute(req, res)
);

/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Get the current login user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 */
userRouter.get('/me',
  middleware.ensureAuthenticated(),
  (req, res) => getCurrentUserController.execute(req, res)
)

userRouter.post('/login',
  (req, res) => loginController.execute(req, res)
)

userRouter.post('/logout',
  middleware.ensureAuthenticated(),
  (req, res) => logoutController.execute(req, res)
)

userRouter.post('/token/refresh',
  (req, res) => refreshAccessTokenController.execute(req, res)
)

userRouter.delete('/:userId',
  middleware.ensureAuthenticated(),
  (req, res) => deleteUserController.execute(req, res)
)

userRouter.get('/:username',
  middleware.ensureAuthenticated(),
  (req, res) => getUserByUserNameController.execute(req, res)
)



export { userRouter };
import express from 'express'
import {getMemberByUserNameController} from '../../../useCases/members/getMemberByUserName';
import {getCurrentMemberController} from '../../../useCases/members/getCurrentMember';
import {getUserStatisticsByUserNameController} from '../../../useCases/members/getUserStatisticsByUserName';
import {getUserStatisticsWithMostPostsController} from '../../../useCases/members/getUserStatisticsWithMostPosts';
import {getUserStatisticsWithBiggestScoreController} from '../../../useCases/members/getUserStatisticsWithBiggestScore';
import {UserDTO} from "../../../../users/dtos/userDTO";

/**
 * @swagger
 * tags:
 *   name: Members
 *   description: Members routes
 */



const memberRouter = express.Router();


/**
 * @swagger
 * /members/me:
 *   get:
 *     summary: Get the current login member
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Member'
 */
memberRouter.get('/me',
    (req, res) => getCurrentMemberController.execute(req, res)
)

memberRouter.get('/posts/most',
    (req, res) => getUserStatisticsWithMostPostsController.execute(req, res)
)

memberRouter.get('/score/biggest',
    (req, res) => getUserStatisticsWithBiggestScoreController.execute(req, res)
)

memberRouter.get('/:username',
    (req, res) => getMemberByUserNameController.execute(req, res)
)

memberRouter.get('/stats/:username',
    (req, res) => getUserStatisticsByUserNameController.execute(req, res)
)

export {
    memberRouter
}
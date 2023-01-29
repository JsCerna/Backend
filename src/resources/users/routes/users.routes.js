import { Router } from 'express'
import { verifyToken } from '../../auth/middlewares/auth.middlewares.js'
import { getProfile } from '../controllers/users.controllers.js'

const usersRouter = Router()
const baseURI = '/auth'
usersRouter.get( `${ baseURI }/profile`, verifyToken, getProfile )

export default usersRouter
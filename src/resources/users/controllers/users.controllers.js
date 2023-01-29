import { UserModel } from '../models/user.model.js'

export const createUser = async (body) => {
  const newUser = await UserModel.create(body)
  return newUser
}

export const findUserByEmail = async (email) => {
  const userFound = await UserModel.findOne({ email: email })
  return userFound
}

export const getProfile = async (req, res) => {
  const user = req.user
  return res.json(user)
}
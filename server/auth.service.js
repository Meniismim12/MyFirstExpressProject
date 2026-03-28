const { use } = require("bcrypt/promises");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const UserDto = require("../dtos/user.dtos");
const tokenService = require("./token.service");
class AutheService {
  async register(email, password) {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      throw new Error(`User with this email ${email} already exists`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({ email, password: hashedPassword });
    await newUser.save();

    const userDto = new UserDto(newUser);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);


    return {user: userDto, ...tokens};
  }

  async isActivated(userId) {
    const user = await userModel.findById(userId);
    if (!user) {
      throw new Error(`User with id ${userId} not found`);
    }

    user.isActivated = true;
    await user.save();
    return {message: `User with id ${userId} is activated`};
  }
}

module.exports = new AutheService();
//npm install bcrypt for hashing passwords
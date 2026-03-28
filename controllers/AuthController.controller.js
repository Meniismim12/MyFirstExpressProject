const AutheService = require("../server/auth.service");

class AuthController {
  async register(req, res, next) {
    try {
        const {email, password} = req.body
        const Data = await AutheService.register(email, password);
      res.cookie('refreshToken', Data.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})

        return res.json(Data);
    } catch (error) {
      console.log(`Error in registration: ${error}`);
    }
  }

  async isActivated(req, res, next) {

    try {
      const userId = req.params.id;
      const isActivated = await AutheService.isActivated(userId);
      return res.json({isActivated});
    } catch (error) {
      console.log(`Error in isActivated: ${error}`);
    }
  }
}

module.exports = new AuthController();

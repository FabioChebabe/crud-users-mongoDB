const { User } = require('../../models/User');

async function listUsers(request, response) {
  try {
    const users = await User.find();

    response.status(200).json(users);
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
}

module.exports = { listUsers };

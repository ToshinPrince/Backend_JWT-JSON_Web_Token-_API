const jwt = require("jsonwebtoken");
const { BadRequest } = require("../errors/bad-request");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  //ways to check if username and password is provided or not to give error message
  //mongodb - or and database will give error by default
  //joi - web pack
  //check in the controller - This is what we are doing below, because initially we are not connecting to the data base, will do in future update

  if (!username || !password) {
    throw new BadRequest("Please Provide username and password");
  }

  //just for demo, normally provided by DB
  const id = new Date().getDate();

  // try to keep payload small, better experience for user
  // just for demo, in production use long, complex and unguessable string value!!!!!!!!!
  const token = jwt.sign({ id, username }, process.env.JWT_TOKEN, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "User Created", token });
};

const dashboard = async (req, res) => {
  console.log(req.user);

  const luckeyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `hello, ${req.user.username}`,
    secret: `Here is your authorised data, here is your luckey Number ${luckeyNumber}`,
  });
};

const submit = async (req, res) => {
  const body = req.body;
};

module.exports = { login, dashboard };

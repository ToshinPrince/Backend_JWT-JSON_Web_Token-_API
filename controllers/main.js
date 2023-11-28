const login = async (req, res) => {
  res.send("Fake Login/Register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckeyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `hello, joy polo`,
    secret: `Here is your authorised data, here is your luckey Number ${luckeyNumber}`,
  });
};

module.exports = { login, dashboard };

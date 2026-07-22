const userAuth =
  ("/user",
  (req, res) => {
    const token = "abc";
    const userAuth = token === "abc";
    if (!userAuth) {
      res.status(401).send("not auth");
    } else {
      res.send("auth valid");
    }
  });
module.exports = {
  userAuth,
};

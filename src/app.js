console.log("Welcome Back!!....let's create a server");
// install express to listen to our request
const express = require("express");
const app = express();
//order matters
// app.use("/test/2", (req, res) => {
//   res.send("I am returning response from server 2");
// });

// app.use("/test", (req, res) => {
//   res.send("I am returning response from server");
// });

// app.use("/path", (req, res) => {
//   res.send("I am in route path");
// });
// app.use("/", (req, res) => {
//   res.send("I am at wild card");
// });

//use will act for all the http methods, matches path and sub paths
app.use("/users", (req, res) => {
  res.send("hahahahahah");
});
//creating get call
app.get("/users", (req, res) => {
  res.send({
    FirstName: "Ramya",
    LastName: "Vutukuri",
  });
});

app.post("/users", (req, res) => {
  res.send("Data successfully saved into database");
});

app.patch("/users", (req, res) => {
  res.send("Patched Up");
});

app.delete("/users", (req, res) => {
  res.send("data got deleted from the database");
});

app.listen(7000, () => {
  console.log(" I am from server");
});

// /ab?c -> b is optional here so /ac, /abc works

//  /ab*c -> between b and c anything written works -> /abc, /abRamyac

// /ab+c  -> /abc, /abbbbbbbbbbbbbbbc works u can write b 'n' no. of times

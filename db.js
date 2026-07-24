const mongoose = require("mongoose");
const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://Ramya_Vutukuri:03SeP1998@namastenodejs.fjxjnvt.mongodb.net/devTinder",
  );
};
module.exports = {
  connectDb,
};

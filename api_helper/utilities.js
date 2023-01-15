import mongoose from "mongoose";

export const connectToDatabase = async () => {
  await mongoose
    .connect(
      "mongodb+srv://admin:admin@cluster0.ofxe6of.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err));
};

import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://oliviaoguelina:1234@cluster0.fuivdeo.mongodb.net/livia-hub').then(()=>console.log('Db connected'));
}
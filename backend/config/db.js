import mongoose, { connect } from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://divyansh10e:UfouMUQ7Cuuz6kT8@cluster0.sponr.mongodb.net/CRAVINGS').then(()=>console.log("DB Connected"));

}
import mongoose from 'mongoose';
import { MONGO_STATUS } from '../messages/messages.js';

const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(MONGO_STATUS(db));
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

export default connectDB;

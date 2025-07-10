import mongoose from 'mongoose';
import { MongoMemoryReplSet } from "mongodb-memory-server"

async function initDbConnection() {
    const mongoServer = await MongoMemoryReplSet.create({
        binary: {
            version: '7.0.14',
            downloadDir: '/tmp/mongodb-binaries', // Cache binaries locally
            platform: process.platform,
            arch: process.arch,
            checkMD5: false // Disable MD5 check for faster startup
        }
    });
    try {
        await mongoose.connect(mongoServer.getUri(), {
            maxPoolSize: 1,
            retryWrites: false
        });

        console.log("Database initialized succesfully!")
    } catch (error) {
        console.error(error);
        throw error
    }
};

async function closeDbConnection() {
    await mongoose.connection.close();
    console.log('Shutting down Mongo DB connections');
};

async function cleanDb(){
    await mongoose.connection.dropDatabase();
}


export { initDbConnection, closeDbConnection, cleanDb };

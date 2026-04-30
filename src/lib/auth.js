
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db('test');

export const auth = betterAuth({
    //...other options
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {


        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
});
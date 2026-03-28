import { MongoClient } from "mongodb";

let client;
/** @type {import("mongodb").Db} */
let db;

export async function connect(connectionString) {
    console.log("Connecting to mongo server...");
    try {
        client = new MongoClient(connectionString);
        await client.connect();
        db = client.db();   // fixed
        await db.command({ ping: 1 });
        console.log("Connected successfully to mongo server");
    } catch (err) {
        console.log("Error connecting to mongo server");
        console.log(err);
    }
}

export function getDB() {
    return db;
}

export async function disconnect() {
    if (client) {
        await client.close();
        console.log("Disconnected successfully from mongo server");
    }
}
import { MongoClient } from "mongodb";

let client;

/** @type {import("mongodb").Db} */
let db;

export async function connect(uri) {
    console.log("Connecting to mongo server...");

    try {
        client = new MongoClient(uri);
        await client.connect();

        db = client.db();
        await db.command({ ping: 1 });

        console.log("%cConnected successfully to mongo server", "color: green;");
    } catch (err) {
        console.log("%cError connecting to mongo server", "color: red;");
        console.log(err);
    }
}

export function getDB() {
    return db;
}

export async function disconnect() {
    if (client) {
        await client.close();
        console.log("%cDisconnected successfully from mongo server", "color: blue;");
    }
}
import { Router } from "express";
import { getDB } from "./db.mjs";
import { ObjectId } from "mongodb";

const cartRouter = Router();

const getCollection = () => {
    return getDB().collection("cartItem");
}

// Get all cart items
cartRouter.get("/", async (req, res) => {
    const collection = getCollection();
    try {
        const cartItems = await collection.find().toArray();
        res.json(cartItems);
    } catch (err) {
        console.error("Error fetching cart items:", err);
        res.status(500).send("Error fetching cart items");
    }
});

// Add an item to the cart
cartRouter.post("/", async (req, res) => {
    const collection = getCollection();
    const cartItem = req.body;
    try {
        const result = await collection.insertOne(cartItem);
        res.status(201).json(result);
    } catch (err) {
        console.error("Error adding cart item:", err);
        res.status(500).send("Error adding cart item");
    }
});

// Remove an item from the cart
cartRouter.delete("/:id", async (req, res) => {
    const collection = getCollection();
    const id = req.params.id;
    try {
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        res.json(result);
    } catch (err) {
        console.error("Error deleting cart item:", err);
        res.status(500).send("Error deleting cart item");
    }
});

export default cartRouter;
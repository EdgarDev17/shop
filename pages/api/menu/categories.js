import connectionDB from "../../../lib/connection";
import Menu from "../../../models/Menu";

export default async function (req, res) {
    await connectionDB()
    const categories = await Menu.find({parent: "category"})
    res.status(200).json(categories)
}
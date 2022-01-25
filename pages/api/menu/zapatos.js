import connectionDB from "../../../lib/connection";
import Menu from "../../../models/Menu";

export default async function handler(req, res) {
    await connectionDB()

    let category = await Menu.find({parent: "zapatos"})
    res.status(200).json(category)
}

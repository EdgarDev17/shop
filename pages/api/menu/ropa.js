import connectionDB from "../../../lib/connection";
import Menu from "../../../models/Menu";

export default async function handler(req, res) {
  await connectionDB();

  if (req.method === "GET") {
   const category =  await Menu.find({ parent: "ropa" });
    res.status(200).json(category);
  }
}

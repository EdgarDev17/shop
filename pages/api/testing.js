import {connectionDB} from "../../lib/connection";

export default function handler(req, res) {
    res.status(200).json({name: 'John Doe'})
    connectionDB()
}

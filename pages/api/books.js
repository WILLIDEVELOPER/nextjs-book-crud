import {
  addBook,
  getAllBooks,
} from "../../api_helper/controllers/bookController";
import { connectToDatabase } from "../../api_helper/utilities";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "GET") {
    return getAllBooks(req, res);
  } else if (req.method === "POST") {
    return addBook(req, res);
  }
}

import { deleteBook, getBookById, updateBook } from "../../../api_helper/controllers/bookController";
import { connectToDatabase } from "../../../api_helper/utilities";

export default async function handlerBookUD(req, res) {
  await connectToDatabase();
  if (req.method === "PATCH") {
    return await updateBook(req, res);
  } else if (req.method === "DELETE") {
    return await deleteBook(req, res);
  }else if(req.method === "GET"){
    return await getBookById(req, res);
  }
}

import Error from "next/error";
import Book from "../models/Book";

export const getAllBooks = async (req, res) => {
  let books;

  try {
    books = await Book.find();
  } catch (error) {
    return new Error(error);
  }

  if (!books) {
    return res.status(500).json({ message: "internat server error" });
  }

  if (books.length === 0) {
    return res.status(404).json({ message: "no books found" });
  }
  return res.status(200).json({ books });
};

export const addBook = async (req, res) => {
  const { title, author, price, imageUrl, featured } = req.body;
  if (
    !title &&
    title.trim() === "" &&
    !author &&
    author.trim() === "" &&
    !price &&
    !imageUrl &&
    imageUrl.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }

  let book;

  try {
    book = new Book({ title, author, price, imageUrl, featured });
    book = await book.save();
  } catch (error) {
    return new Error(error);
  }

  if (!book) {
    return res.status(500).json({ message: "internal server error" });
  }

  return res.status(201).json({ book });
};

export const updateBook = async (req, res) => {
  const { id } = req.query;
  console.log(id);

  const { title, author, price, imageUrl, featured } = req.body;
  if (
    !title &&
    title.trim() === "" &&
    !author &&
    author.trim() === "" &&
    !price &&
    !imageUrl &&
    imageUrl.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }

  let bookUp;

  try {
    bookUp = await Book.findByIdAndUpdate(id, {
      title,
      author,
      price,
      imageUrl,
      featured,
    });
  } catch (error) {
    return console.log(error);
  }

  if (!bookUp) {
    return res.status(500).json({ message: "internal server error" });
  }

  return res.status(200).json({ message: "sucessfull updated" });
};

export const deleteBook = async (req, res) => {
  const {id} = req.query

  let bookDT;

  try {
    bookDT = await Book.findByIdAndRemove(id)
  } catch (error) {
    return new Error(error)
  }

  if(!bookDT){
    return res.status(500).json({message: "unable to delete"})
  }

  return res.status(200).json({message: "sucessfull Deleted"})

}

export const getBookById = async (req, res) => { 
  const {id} = req.query

  let bookById;

  try {
    bookById = await Book.findById(id)
  } catch (error) {
    return new Error(error)
  }

  if (!bookById) {
    return res.status(404).json({message: "book not found"})
  }

  return res.status(200).json({bookById})
}

import Book from "../api_helper/models/Book";
import { connectToDatabase } from "../api_helper/utilities";
import BookList from "../components/bookList"

export default function Home({books}) {
  return <BookList featuredPage data={books}/>
}

export const getServerSideProps = async () =>{
  await connectToDatabase()
  let books;

  try {
    books = await Book.find();
  } catch (error) {
    return new Error(error);
  }

  const text = JSON.stringify(books)
  const data = JSON.parse(text)

  const featuredBooks = data.filter((book) => book.featured === true)

  return {
    props: {
      books: featuredBooks,
    }
  }
}

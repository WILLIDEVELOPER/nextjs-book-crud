import Book from "../../api_helper/models/Book";
import { connectToDatabase } from "../../api_helper/utilities";
import BookList from "../../components/bookList";

export default function BooksHome({books}){
    return <BookList data={books}/>
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

  const allBooks = data
  
    return {
      props: {
        books: allBooks,
      }
    }
  }

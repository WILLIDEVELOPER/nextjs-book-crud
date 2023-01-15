import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getBookFromId, updateBook } from '../api_helper/Frontend/utilitiesF'
import Form from './form'

const BookDetail = () => {
  const router = useRouter()
  const [book, setBook] = useState();
  const id = router.query.id
  
  useEffect(() => {
    getBookFromId(id).then((data) => setBook(data)).catch((err) => console.log(err))
  },[router.query.id])
  console.log(book)

  const getFormData = (data) =>{
      updateBook(id, data)
      .then((value) => console.log(value)).then(() =>{
        router.push("/books")
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      {book ? (<Form data={book} onSubmit={getFormData}/>) : <p>Loading.. </p>}
    </div>
  )
}

export default BookDetail


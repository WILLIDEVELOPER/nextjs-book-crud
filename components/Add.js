import { useRouter } from 'next/router'
import React from 'react'
import { sendBook } from '../api_helper/Frontend/utilitiesF'
import Form from './form'

const Add = () => {
  const router = useRouter()
  const getFormData = (data) =>{
    sendBook(data).then((value) => console.log(value)).then(() =>{
      router.push("/books")
    })
    .catch((err) =>console.log(err))
  }

  return (
    <section>
      <Form onSubmit={getFormData}/>
    </section>
  )
}

export default Add

import { useState } from 'react'
import TextField from '@mui/material/TextField'
import ProductList from './ProductList'

function Search({ products, retrieveKeywords }: any) {
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e: Event) => {
    e.preventDefault()

    if (inputText) {
      retrieveKeywords(inputText)
    }
  }

  let inputHandler = (e: any) => {
    const lowerCase = e.target.value.toLowerCase()

    setInputText(lowerCase)
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <h1>Start by typing a keyword</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="widht: 30%">
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Search"
            />

            <input
              className="border border-solid border-indigo-600"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <ProductList products={products} input={inputText} />
      </div>
    </>
  )
}

export default Search

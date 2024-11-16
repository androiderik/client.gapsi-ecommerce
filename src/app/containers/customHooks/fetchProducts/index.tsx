//Author: Erik Rodriguez
'use client' // This is a client component
import axios from 'axios'
import { useState, useEffect } from 'react'

const useRequest = (url: any) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios(url, {
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': 'fce0e15738msh6a87c0c9db9505cp14b74fjsn54bc768f3bc7',
      },
    })
      .then((res) => res)
      .then((data) => setData(data))
  }, [url])

  return [data]
}

export default useRequest

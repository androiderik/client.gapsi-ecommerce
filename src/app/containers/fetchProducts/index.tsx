//Author: Erik Rodriguez
'use client' // This is a client component
import { useEffect } from 'react'

const Request = (url: string, method: string) => {
  useEffect(() => {
    async function fetchAPI() {
      try {
        let response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-key':
              'fce0e15738msh6a87c0c9db9505cp14b74fjsn54bc768f3bc7',
          },
          credentials: 'include',
        })

        if (!response.ok) {
          throw new Error(response.status)
        }

        console.log(response, 'response')
        const json = await response.json()

        return json
      } catch (error) {
        console.log(error, 'some error')
      }
    }
    fetchAPI()
  }, [url])
}

export default Request

import Image from 'next/image'

function ProductList({ products, input }: any) {
  //filter and create new array with the requested user input

  // const filteredData = products.filter((el) => {
  //   if (inpput === '') {
  //     return el
  //   }

  //   //return and set to lowercase the user input
  //   else {
  //     return el.text.toLowerCase().includes(input)
  //   }
  // })

  return (
    // <ul>

    //     {filteredData.map((item) => (

    //         <li key={item.id}>{item.text}</li>

    //     ))}

    // </ul>
    <>{products?.data.keyword}</>
  )
}

export default ProductList

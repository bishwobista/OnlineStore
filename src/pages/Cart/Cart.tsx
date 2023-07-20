import { useDispatch, useSelector } from "react-redux"
import { remove } from "../../store/CartSlice/CartSlice"


const Cart = () => {
  const products = useSelector((state: any) => state.cart)

  const dispatch = useDispatch()

  const handleClick = (id: number) => () => {
    dispatch(remove(id))
  }
  
  return (
    <>
      <h1
      className="text-2xl font-bold"
      >Cart</h1>
      <div
      className="flex flex-col space-y-4"
      >
        {
          products.map((product: any) => {
            return (
              <div key={product.id}
              className="flex justify-between items-center"
              >
                <h3
                className="text-xl font-bold"
                >{product.title}</h3>

                <p
                className="text-xl font-bold"
                >{product.price}</p>

                <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                onClick={handleClick(product.id)}
                >Remove</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Cart
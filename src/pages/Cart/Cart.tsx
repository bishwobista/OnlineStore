import { useDispatch, useSelector } from "react-redux"
import { remove } from "../../store/CartSlice/CartSlice"
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io"
import { parse } from "dotenv"

const Cart = () => {
  const products = useSelector((state: any) => state.cart)

  const dispatch = useDispatch()

  const handleClick = (id: number) => () => {
    dispatch(remove(id))
  }

  const amount = 1
  return (
    <>
      
      <div className="pt-[80px] mx-h-full h-[calc(100vh-80px)] overflow-y-auto">
      
        {
          products.map((product: any) => {
            return (
              <section className="flex  py-2 lg:px-6 border-b border-gray-200 w-full  font-light text-gary-500 ">
                <div className="w-full max-w-full  min-h-[150px] flex items-center gap-x-4">
                  <div>
                    <img src={product.image} className="max-w-[80px]" />
                  </div>
                  <div className="w-[50%] flex flex-col">
                    <div className="flex justify-evenly md-2">
                      <div className="text-sm uppercase font-medium max-w-[240px] hover:underline">
                        {product.title}
                      </div>
                      <div className="text-xl cursor-pointer ">
                      <button
                            onClick={handleClick(product.id)}
                            >
                        <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
                            </button>
                      </div>
                      <div className="flex gap-x-2 h-[36px] text-sm">
                        <div className="flex flex-1 max-w-[100px] items-center h-full border font-medium">
                          <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                            
                            <IoMdRemove />
                          </div>
                          <div className="h-full flex justify-center items-center px-2">
                            {amount}
                          </div>
                          <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                            <IoMdAdd />
                          </div>
                        </div>
                        <div className="flex-1 flex items-center justify-around">
                          {product.price}
                        </div>
                        <div className="flex-1 flex justify-end items-center font-medium">
                        ${parseFloat(product.price).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )
          })
        }
      </div>
    </>
  )
}

export default Cart
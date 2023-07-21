import { useDispatch, useSelector } from "react-redux"
import { remove } from "../../store/CartSlice/CartSlice"
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io"
import { useState } from "react"

const Cart = () => {
  const products = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleClick = (id: number) => () => {
    dispatch(remove(id));
  };

  const handleAmountChange = (amount: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const totalPrice = (parseFloat(products[0]?.price) * quantity).toFixed(2);

  return (
    <>
      <div className="pt-[80px] mx-h-full h-[calc(100vh-80px)] overflow-y-auto mx-12  ">
        <div className="flex flex-col items-center justify-center px-6 py-32 float-right mr-12 ">
          <div className="text-3xl font-bold py-4 ">
            {products.length} items
          </div>
          <div className="text-gray-500 py-6">Total Amount : ${totalPrice}</div>
          <button className="px-4 py-2 bg-slate-600 rounded-sm text-white ">Checkout</button>
        </div>
        <div className="float-left w-full max-w-[600px] mx-auto"
        >
          {products.length === 0 ? (
            <div className="text-center py-4 font-light text-gray-500">
              Your cart is empty.
            </div>
          ) : (
            products.map((product: any) => {
              return (
                <section
                  key={product.id}
                  className="flex  py-2 lg:px-6 border-b border-gray-200 w-full  font-light text-gray-500"
                >
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
                              <IoMdRemove onClick={() => handleAmountChange(-1)} />
                            </div>
                            <div className="h-full flex justify-center items-center px-2">
                              {quantity}
                            </div>
                            <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                              <IoMdAdd onClick={() => handleAmountChange(1)} />
                            </div>
                          </div>
                          <div className="flex-1 flex items-center justify-around">
                            {product.price}
                          </div>
                          <div className="flex-1 flex justify-end items-center font-medium">
                            ${totalPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

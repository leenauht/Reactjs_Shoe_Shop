import { useState } from "react";
import data from "./data.json";
import Product from "./product";
import Modal from "./modal";
import Cart from "./cart";
export default function ShoesStore() {
  const [shoe, setShoe] = useState(data);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [dataDetails, setDataDetails] = useState(null);

  const [cart, setCart] = useState([]);

  const handleOpenModalDetails = (status) => setIsOpenDetails(status);

  const handleOpenModalCart = (status) => setIsOpenCart(status);

  const handleViewDetail = (shoe) => setDataDetails(shoe);

  const findIndexProduct = (id) =>
    cart.findIndex((product) => product.id === id);

  const handleAddToCart = (data) => {
    const productAddToCart = {
      id: data.id,
      image: data.image,
      name: data.name,
      purchaseQuantity: 1,
      price: data.price,
    };
    // Tạo mảng mới từ cart
    const newCart = [...cart];

    const index = findIndexProduct(productAddToCart.id);
    if (index !== -1) {
      newCart[index].purchaseQuantity += 1;
    } else {
      newCart.push(productAddToCart);
    }
    setCart(newCart);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl text-center font-bold mb-16 mt-10">
          Shoes Shop
        </h2>
        <button
          onClick={handleOpenModalCart}
          className="px-4 py-2 mb-4 rounded-xl text-white bg-blue-600"
        >
          Cart
        </button>
        <div className="grid grid-cols-3 gap-4 ">
          {shoe.map((item) => {
            return (
              <Product
                key={item.id}
                product={item}
                openModal={handleOpenModalDetails}
                onClickViewDetails={handleViewDetail}
                onClickAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
      </div>
      <Modal
        product={dataDetails}
        openModal={isOpenDetails}
        closeModal={(status) => {
          handleOpenModalDetails(status);
          setDataDetails(null);
        }}
      />

      <Cart
        openModal={isOpenCart}
        closeModal={handleOpenModalCart}
        cart={cart}
      />
    </>
  );
}

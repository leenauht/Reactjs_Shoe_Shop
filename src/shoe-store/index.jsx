import { useState } from "react";
import data from "./data.json";
import Product from "./product";
import Modal from "./modal";
import Cart from "./cart";
export default function ShoesStore() {
  const [shoe, setShoe] = useState(data);
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [dataDetails, setDataDetails] = useState(null);

  const [cart, setCart] = useState([]);

  const handleOpenModalDetails = (status) => setIsOpenDetails(status);

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

    alert(`Thêm vào giỏ hàng sản phẩm ${data.name} thành công`);
  };

  const handleUpdateQty = (id, status) => {
    // tìm vị trí sản phẩm trong giỏ hàng
    const index = findIndexProduct(id);

    if (index !== -1) {
      // Tạo mảng mới từ mảng cart
      const newCart = [...cart];
      // Kiểm tra status để cập nhật số lượng
      if (status) {
        newCart[index].purchaseQuantity += 1;
      } else {
        if (newCart[index].purchaseQuantity > 1) {
          newCart[index].purchaseQuantity -= 1;
        } else {
          newCart.splice(index, 1);
        }
      }
      // Cập nhật lại state cart
      setCart(newCart);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl text-center font-bold mb-16 mt-10">
          Shoes Shop
        </h2>

        <Cart cart={cart} onClickUpdateQty={handleUpdateQty} />

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
    </>
  );
}

import { useState } from "react";

export default function Product({
  product,
  openModal,
  onClickViewDetails,
  onClickAddToCart,
}) {
  return (
    <div className="w-full border border-input rounded-xl p-6 space-y-4 bg-bg-product">
      <img
        className="w-full h-[280px] object-cover"
        src={product.image}
        alt=""
      />
      <h3 className="text-xl font-medium">{product.name}</h3>
      <p className="text-3xl text-blue-600">{product.price}$</p>
      <button
        onClick={() => {
          openModal(true);
          onClickViewDetails(product);
        }}
        className="p-2 rounded-xl text-white bg-blue-600"
      >
        Thông tin chi tiết
      </button>
      <button
        onClick={() => {
          onClickAddToCart(product);
        }}
        className="p-2 rounded-xl text-white bg-red-500 ml-5"
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}

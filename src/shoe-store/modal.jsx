import { useState } from "react";

export default function Modal({ product, openModal, closeModal }) {
  return (
    <>
      {openModal && product && (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-bg-overlay">
          <div className="max-w-[960px]">
            <div className="items-center justify-between p-4 md:p-5 rounded-lg bg-bg-modal my-10 relative">
              <button
                onClick={() => closeModal(false)}
                type="button"
                className="absolute top-1.5 right-1.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              <div className="w-full flex gap-5 py-10">
                <img
                  className="w-2/5"
                  src="http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
                  alt=""
                />
                <div className="flex flex-col py-5 text-black text-lg font-medium space-y-6">
                  <h3 className="text-2xl font-bold text-left">
                    {product.name}
                  </h3>
                  <p className="text-xl">
                    Alias:
                    <span className="font-normal ml-2">{product.alias}</span>
                  </p>
                  <p className="text-xl">
                    Price:
                    <span className="text-3xl text-blue-500 ml-2">
                      {product.price}$
                    </span>
                  </p>
                  <p className="text-xl font-medium line-clamp-2">
                    Description:
                    <span className="font-normal ml-2">
                      {product.description}
                    </span>
                  </p>
                  <p className="text-xl line-clamp-2">
                    Short description:
                    <span className="font-normal ml-2">
                      {product.shortDescription}
                    </span>
                  </p>
                  <p>
                    Quantity:
                    <span className="font-normal ml-2">{product.quantity}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

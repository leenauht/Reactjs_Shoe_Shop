export default function Cart({ cart, openModal, closeModal }) {
  const handleRenderProduct = () => {
    const content = cart.map((product) => {
      return (
        <tr key={product.id} className="bg-white border-b">
          <th scope="row" className="px-6 py-4">
            {product.id}
          </th>
          <td className="px-6 py-4">
            <img src={product.image} alt="" width={100} />
          </td>
          <td className="px-6 py-4">{product.name}</td>
          <td className="px-6 py-4">
            <div className="inline-block mr-1">
              <button className="p-1 bg-red-500 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M2 7.75A.75.75 0 0 1 2.75 7h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 7.75"
                  />
                </svg>
              </button>
            </div>
            {product.purchaseQuantity}
            <div className="inline-block ml-1">
              <button className="p-1 bg-blue-500 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8"
                  />
                  <path
                    fill="currentColor"
                    d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"
                  />
                </svg>
              </button>
            </div>
          </td>
          <td className="px-6 py-4">{product.price}</td>
          <td className="px-6 py-4">
            {product.purchaseQuantity * product.price}
          </td>
        </tr>
      );
    });
    return content;
  };

  return (
    <>
      {openModal && (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-bg-overlay flex justify-center items-center">
          <div className="max-w-[960px] max-h-[700px] rounded-lg bg-white overflow-y-auto">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 relative">
              <h3 className=" text-2xl font-medium">Cart</h3>
              <button
                onClick={() => closeModal(false)}
                type="button"
                className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
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
            </div>

            {/* Modal body */}
            <div class="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="text-center">
                    <th scope="col" className="px-6 py-3">
                      Product Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>{handleRenderProduct()}</tbody>
              </table>
            </div>

            {/* Modal footer */}
            <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200">
              <button
                onClick={() => closeModal(false)}
                data-modal-hide="default-modal"
                type="button"
                className="rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

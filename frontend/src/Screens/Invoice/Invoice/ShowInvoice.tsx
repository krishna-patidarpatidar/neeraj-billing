import React from "react";

type ShowInvoiceProps = {
  Data: any; // You should ideally define the correct type here for better TypeScript type safety
  handlePrint: () => void;
  contentToPrint: React.RefObject<HTMLDivElement>;
};
const ShowInvoice: React.FC<ShowInvoiceProps> = ({
  Data,
  handlePrint,
  contentToPrint,
}) => {
  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  const data = Data?.data;
  return (
    <div className="text-center mt-40 text-gray-800">
      <button onClick={() => handlePrint()}>PRINT</button>

      <div ref={contentToPrint} className="mt-3">
        <div className="border md:w-[900px] rounded-lg mx-auto w-[450px] p-4 shadow-lg mb-6">
          {/* Invoice Header */}
          <div className="flex justify-between border-b-[3px] md:pt-5">
            <div className="flex items-center">
              <div className="">
                <img
                  className="h-12 w-12 md:h-16 md:w-16 rounded-full"
                  loading="lazy"
                  src="https://www.shutterstock.com/image-vector/unique-light-bulb-logo-icon-260nw-1490973950.jpg"
                  alt="Electranet Logo"
                />
              </div>
              <div className="text-start">
                <h1 className="flex gap-2 text-md md:text-4xl font-semibold place-items-end">
                  <h1 className="text-lg md:text-2xl font-extrabold text-blue-700 italic">
                    Electranet Power Pvt. Ltd.
                  </h1>
                  {/* <h2 className="text-sm md:text-lg font-medium text-gray-600 italic">
            Enlightening You
          </h2> */}
                </h1>
                <h2 className="text-sm md:text-lg font-medium text-gray-600 italic">
                  Enlightening You
                </h2>
              </div>
            </div>
            <div>
              <h1 className="flex gap-2 text-xl md:text-4xl font-semibold place-items-end">
                Invoice
              </h1>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="flex justify-between mt-4">
            <div className="mb-4 md:mb-0">
              <h1>INVOICE TO :</h1>
              <h1 className="text-sm md:text-xl">{data?.customerId?.name}</h1>
              <h1 className="text-[10px] md:text-sm">
                Mo.No: {data?.customerId?.mobile}
              </h1>
            </div>
            <div className="text-center">
              <p>Date: {formatDate(data?.invoiceDate)}</p>
              <p>Invoice No: {data?.invoiceNumber}</p>
            </div>
            <div className="text-right">
              <h1>TOTAL DUE :</h1>
              <h1>INR: ₹ {data?.dueAmount}</h1>
            </div>
          </div>

          {/* Product Table */}
          <div className="relative overflow-x-auto border-b-2 py-5">
            <table className="w-full text-sm">
              <thead className="text-xs text-white uppercase bg-blue-900 dark:text-white">
                <tr className="text-left">
                  <th scope="col" className="p-4">
                    S.No
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
              <tbody>
                {data?.products?.map((product: any, i: number) => (
                  <tr key={product?._id}>
                    <td className="p-4 text-left">{i + 1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 text-left"
                    >
                      {product?.productId?.name}
                    </th>
                    <td className="px-6 py-4 text-left">{product?.quantity}</td>
                    <td className="px-6 py-4 text-left">
                      {product?.productId.sellingPrice}
                    </td>
                    <td className="px-6 py-4 text-left">
                      {product?.productId.sellingPrice * product.quantity}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4} className="p-4 text-right font-semibold">
                    Sub Total
                  </td>
                  <td className="px-6 py-4">{data?.totalAmount}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payment Details */}
          <table className="w-full text-sm text-center">
            <thead className="text-xs text-gray-900 uppercase border dark:text-gray-950">
              <tr>
                <th>Total Amount</th>
                <th colSpan={2}>Received Amount</th>
                <th>Due Amount</th>
                <th>Pay in Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data?.totalAmount}</td>
                <td>{data?.onlineAmount}</td>
                <td>{data?.cashAmount}</td>
                <td>{data?.dueAmount}</td>
                <td>{formatDate(data?.dueDate)}</td>
              </tr>
            </tbody>
          </table>

          {/* Footer */}
          <div className="flex flex-col md:flex-row justify-between py-4 px-5">
            <div className="mb-4 md:mb-0">
              <h1 className="text-[17px] text-green-900">
                Terms and conditions
              </h1>
              <p className="text-xs">
                Please send payment within 30 days of receiving this invoice.
                There will be a 10% interest charge per month on late invoices.
              </p>
            </div>
            <div className="text-right">
              <h1 className="text-[18px]">{Data?.user?.name}</h1>
              <h1 className="text-[18px]">{Data?.user?.mobile}</h1>
              <p className="border-b-2">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowInvoice;

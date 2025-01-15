import { Link, Outlet, useLocation } from "react-router-dom";
import { formatDate } from "../../../Components/Molecule/DateHelper/DateHelper";
import { FaAmazonPay, FaFileInvoiceDollar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const InvoiceList = ({ data, handleDelete }: any) => {
  const location = useLocation();
  return (
    <div className=" px-3 mt-40 mx-auto">
      {/* Conditionally render either the Outlet or the Invoice list */}
      {location.pathname !== "/admin/invoice" ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <div className=" text-4xl">
          <div className="flex text-4xl justify-between">
            <h2 className="font-bold text-slate-700">Invoices</h2>

            <button className="px-4 py-2 flex gap-2 text-white text-xl  rounded-lg">
              <Link className="bg-green-500  p-2 font-bold rounded-lg" to={"add-invoice"}>
                Create Invoice
              </Link>
            </button>
          </div>
          <div className="relative overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg shadow-sm bg-themeLight">
              <thead className="bg-blue-900">
                <tr>
                  <th className="p-3 text-left text-white text-sm font-bold">
                    S No.
                  </th>
                  <th className="p-3 text-left text-white text-sm font-bold">
                    Customer
                  </th>
                  <th className="p-3 text-left text-white text-sm font-bold hidden lg:table-cell">
                    Date
                  </th>
                  <th className="p-3 text-left text-white text-sm font-bold hidden lg:table-cell">
                    Invoice No.
                  </th>
                  <th className="p-3 text-left text-white text-sm font-bold hidden lg:table-cell">
                    Amount
                  </th>
                  <th className="p-3 text-left text-white text-sm font-bold hidden lg:table-cell">
                    Due Amount
                  </th>
                  <th className="p-3 text-left text-white text-sm font-bold hidden lg:table-cell">
                    Status
                  </th>
                  <th className="p-3 text-left text-white text-sm font-bold block lg:hidden">
                    Invoice Details
                  </th>
                  <th className="p-3 text-left text-white text-sm font-bold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.length > 0 ? (
                  data?.data?.map((invoice: any, index: number) => (
                    <tr
                      key={invoice._id}
                      className="border-t text-2xl border-gray-300 hover:bg-gray-100"
                    >
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3 ">{invoice.customerId.name}</td>
                      <td className="p-3 hidden lg:table-cell">
                        {formatDate(invoice.invoiceDate)}
                      </td>
                      <td className="p-3 hidden lg:table-cell">
                        {invoice.invoiceNumber}
                      </td>
                      <td className="p-3 hidden lg:table-cell text-right">
                        {invoice.totalAmount}
                      </td>
                      <td className="p-3 hidden lg:table-cell text-right">
                        {invoice.dueAmount}
                      </td>
                      <td className="p-3 hidden lg:table-cell">
                        {invoice.status}
                      </td>
                      <td className="p-3 lg:hidden">
                        <div className="text-sm text-black">
                          <strong>Date:</strong>{" "}
                          {formatDate(invoice.invoiceDate)}
                        </div>
                        <div className="text-sm text-black">
                          <strong>Invoice No.:</strong> {invoice.invoiceNumber}
                        </div>
                        <div className="text-sm text-black">
                          <strong>Amount:</strong> {invoice.totalAmount}
                        </div>
                        <div className="text-sm text-black">
                          <strong>Due:</strong> {invoice.dueAmount}
                        </div>
                        <div className="text-sm text-black">
                          <strong>Status:</strong> {invoice.status}
                        </div>
                      </td>
                      <td className="p-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
                        <Link
                          to={`pamantIn/${invoice._id}`}
                          className="px-2 py-1 text-white bg-green-600 rounded"
                        >
                       <FaAmazonPay />
                        </Link>
                        <Link
                          to={`show-invoice/${invoice._id}`}
                          className="px-2 py-1 text-white bg-blue-500 rounded"
                        >
                          <FaFileInvoiceDollar />
                        </Link>
                        {/* <Link
                          to={`edit-invoice/${invoice.invoiceNumber}`}
                          className="px-2 py-1 text-white bg-gray-700 rounded"
                        >
                          <FaEdit/>
                        </Link> */}
                        <button
                          onClick={() => handleDelete(invoice._id)}
                          className="px-2 py-1 text-white bg-red-500 rounded"
                        >
                         <MdDeleteForever />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="p-3 text-center">
                      No invoices found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceList;

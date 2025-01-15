import React from "react";
import { formatDate } from "../../../Components/Molecule/DateHelper/DateHelper";
import ATMNumberField from "../../../Components/atoms/Input/AtmNumber/ATMNumberField";

interface Props {
  formikProps: any;
  customerData: any;
  handlePrint :any;
  contentToPrint:any;
}

const PamantInForm: React.FC<Props> = ({ formikProps, customerData ,handlePrint,
  contentToPrint, }) => {
  const { values, setFieldValue } = formikProps;

  const remainingAmount = customerData?.dueAmount || 0;
  const dueAmount = Math.max(remainingAmount - values.amount, 0);

  

  return (
    <div className="mt-40">
      <div className="text-center">
        <button onClick={handlePrint}>PRINT</button>
      </div>

      <div
        ref={contentToPrint}
        className="max-w-[500px] mx-auto p-4 bg-white shadow-lg rounded-lg"
      >
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

        <div className="flex justify-between mt-6">
          <div>
            <h1 className="font-semibold">INVOICE TO:</h1>
            <h1 className="text-xl font-semibold">
              {customerData?.customerId.name}
            </h1>
            <h1 className="text-sm">
              Mo.No: {customerData?.customerId.mobile}
            </h1>
          </div>
          <div className="text-right">
            <p>Date: {formatDate(customerData?.invoiceDate)}</p>
            <p>Invoice No: {customerData?.invoiceNumber}</p>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <h1 className="font-semibold">Remaining Amount: {remainingAmount}</h1>
          <div className="flex items-center">
            <label htmlFor="amount" className="mr-2 font-semibold">
              Received Amount:
            </label>
            <ATMNumberField
              name="amount"
              type="number"
              value={values.amount}
              onChange={(e) =>
                setFieldValue("amount", parseFloat(e.target.value) || 0)
              }
              className="px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
            />
          </div>
          <h1 className="font-semibold">Due Amount: {dueAmount}</h1>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PamantInForm;

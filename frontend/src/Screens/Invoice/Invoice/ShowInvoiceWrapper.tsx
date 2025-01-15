import { useEffect, useRef, useState } from "react";
import ShowInvoice from "./ShowInvoice";
import { useParams } from "react-router-dom";
import { useGetCustomerInvoiceQuery } from "../../../Service/InvoiceApi/InvoiceApiSlice";
import { useReactToPrint } from "react-to-print";

const ShowInviceWrapper = () => {
  const { billId } = useParams();
  const { data, isError, isLoading }: any = useGetCustomerInvoiceQuery({
    billId,
  });

  const [invoiceData, setInvoiceData] = useState([]);
  useEffect(() => {
    setInvoiceData(data);
  }, [data]);
  const contentRef = useRef<HTMLDivElement>(null);
const reactToPrintFn = useReactToPrint({ contentRef });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <ShowInvoice
      Data={invoiceData}
      handlePrint={reactToPrintFn}
      contentToPrint={contentRef}
    />
  );
};

export default ShowInviceWrapper;

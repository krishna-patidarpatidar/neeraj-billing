import React, { useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  useGetCustomerInvoiceQuery,
  usePaymentInMutation,
} from "../../../Service/InvoiceApi/InvoiceApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import PamantInForm from "./PamantInForm";
import Toast from "../../../Config/Toast";
import { useReactToPrint } from "react-to-print";

type PaymentFormValues = {
  amount: number;
};

const PamantInWrapper: React.FC = () => {
  const [customerData, setCustomerData] = useState<any>(null);
  const [paymentIn] = usePaymentInMutation();
  const { id } = useParams();
  const { data }: any = useGetCustomerInvoiceQuery({ billId: id });
  const navigate = useNavigate();
  useEffect(() => {
    if (data) setCustomerData(data?.data);
  }, [data]);

  const initialValues: PaymentFormValues = { amount: 0 };

  const handleSubmit = async (values: PaymentFormValues) => {
    try {
      const response: any = await paymentIn({ paymentData: values, INVId: id });
      if (response?.data.status) {
        Toast.successMsg(response?.data.msg);
        navigate("/admin/invoice");
      } else {
        Toast.errorMsg(response?.data.msg);
      }
    } catch (error: any) {
      Toast.errorMsg(error);
    }
  };
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        amount: Yup.number().required("Required").min(1),
      })}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          <PamantInForm
            formikProps={formikProps}
            customerData={customerData}
            handlePrint={reactToPrintFn}
            contentToPrint={contentRef}
          />
        </Form>
      )}
    </Formik>
  );
};

export default PamantInWrapper;

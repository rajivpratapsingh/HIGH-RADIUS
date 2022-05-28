import axios from "axios";
// import React from "react";
export const getData = async () => {
  let response = await axios.get(
    "http://localhost:8080/highradius/DataLoading"
  );
  // return response.data;
  let data = response.data.invoices;
  data.map((invoice, index) => ({ ...invoice, id: index }));
  console.log("===========================!", data);

  return data;
};

export const addInvoice = async ({
  business_code,
  clear_date,
  buisness_year,
}) => {
  let data =
    "business_code=" +
    business_code +
    "&clear_date=" +
    clear_date +
    "&buisness_year=" +
    buisness_year;
  console.log(data);
  let response = await axios.get(
    "http://localhost:8080/highradius/addInvoice?" + data
  );
  console.log("=1111111111111111111111!!!!!!!!!----->", response);
  return response.data;
};

export const updateInvoice = async ({
  sl_no,
  invoice_currency,
  cust_payment_terms,
}) => {
  let data =
    "sl_no=" +
    sl_no +
    "&invoice_currency=" +
    invoice_currency +
    "&cust_payment_terms=" +
    cust_payment_terms;
  console.log(data);
  let response = await axios.get(
    "http://localhost:8080/highradius/updateInvoice?" + data
  );
  return response.data;
};
// export default updateInvoice;

export const deleteInvoice = async (sl_no) => {
  let data = "sl_no" + sl_no;
  let response = await axios.get(
    "http://localhost:8080/highradius/deleteInvoice?" + data
  );
  console.log("-----------------------------------", response);
  return response.data;
};

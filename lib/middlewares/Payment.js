"use server";
import { ObjectId } from "bson";
import SSLCommerzPayment from "sslcommerz-lts";
const store_id = "theea6625f896a31be";
const store_passwd = "theea6625f896a31be@ssl";
const is_live = false; //true for live, false for sandbox
export const payment = async () => {
  // make unique transaction id
  const trans_id = new ObjectId().toString();

  //sslcommerz init
  const data = {
    total_amount: 500,
    currency: "BDT",
    tran_id: trans_id, // use unique tran_id for each api call
    success_url: `http://localhost:4000/api/v1/payment/success`,
    fail_url: `http://localhost:4000/api/v1/payment/fail`,
    cancel_url: `http://localhost:4000/api/v1/payment/cancel`,
    ipn_url: "http://localhost:4000/api/v1/payment/ipn",
    shipping_method: "Courier",
    product_name: "course",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "customer@example.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  try {
    const apiResponse = await sslcz.init(data);
    console.log(apiResponse);
  } catch (error) {
    console.log("error payment", error);
  }
};

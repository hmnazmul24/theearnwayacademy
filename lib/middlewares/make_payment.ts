import { PaymentInfoType } from "@/types";
import axios from "axios";

export const makePayment = async ({
  name,
  email,
  phone,
  address,
  state,
  given_token,
  student_id,
}: PaymentInfoType) => {
  try {
    // Define the payload
    const data = {
      prefix: "sp",
      token: given_token,
      return_url: process.env.SP_RETURN_URL,
      cancel_url: process.env.SP_CANCEL_URL,
      store_id: "1",
      amount: "1250",
      order_id: "sp315689",
      currency: "BDT",
      customer_name: name,
      customer_address: address,
      customer_phone: phone,
      customer_city: "Dhaka",
      customer_post_code: "1212",
      client_ip: "102.101.1.1",
      discount_amount: "0",
      disc_percent: "0",
      customer_email: email,
      customer_state: state,
      customer_postcode: "2113",
      customer_country: "BD",
      shipping_address: "test1",
      shipping_city: "testcity",
      shipping_country: "test country",
      received_person_name: "Jon doe",
      shipping_phone_number: "01700000000",
      value1: "test value1",
      value2: "",
      value3: "",
      value4: "",
    };

    // Define the endpoint
    const url = `${process.env.SP_ENDPOINT}/secret-pay`;

    // Define the authorization header
    const token = given_token;
    // Make the request using Axios
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.checkout_url;
  } catch (error) {
    console.error("Error:", error);
  }
};

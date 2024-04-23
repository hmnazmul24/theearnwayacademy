"use server";

import spfactory from "shurjopay";

const shurjopay = spfactory();

// Destructure environment variables
const { SP_ENDPOINT, SP_USERNAME, SP_PASSWORD, SP_PREFIX, SP_RETURN_URL } =
  process.env;
if (SP_ENDPOINT && SP_USERNAME && SP_PASSWORD && SP_PREFIX && SP_RETURN_URL) {
  shurjopay.config(
    SP_ENDPOINT,
    SP_USERNAME,
    SP_PASSWORD,
    SP_PREFIX,
    SP_RETURN_URL
  );
} else {
  console.error(
    "Missing required environment variables for Shurjopay configuration."
  );
}

export const surjopayPayment = async () => {
  try {
    let data = await shurjopay.makePayment({
      amount: 1000,
      order_id: "nx10t1",
      customer_name: "Shanto",
      customer_address: "Mohakhali",
      client_ip: "102.324.0.5",
      customer_phone: "01517162394",
      customer_city: "Dhaka",
      customer_post_code: "1229",
    });
    console.log("surjopay response", data);
  } catch (error) {
    console.log("surjopay error", error);
  }
};

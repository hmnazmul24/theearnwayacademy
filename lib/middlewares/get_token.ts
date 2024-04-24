import axios from "axios";

export const get_token = async () => {
  try {
    // Define the payload
    const data = {
      username: process.env.SP_USERNAME,
      password: process.env.SP_PASSWORD,
    };

    // Define the endpoint
    const url = `${process.env.SP_ENDPOINT}/get_token`;

    // Make the request using Axios
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.token;
  } catch (error) {
    // Log any errors encountered
    console.error("Error:", error);
  }
};

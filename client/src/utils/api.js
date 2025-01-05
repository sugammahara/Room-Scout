import axios from "axios";

const params = {};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_URL + url,
      params
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const postDataToApi = async (url, formData) => {
  try {
    const { data } = await axios.post(
      process.env.REACT_APP_DEV_URL + url,
      formData
    );
    console.log(data); // This will execute before returning the data
    return data;
  } catch (err) {
    console.error("Error posting data to API:", err);
    throw err; // Rethrow the error for better error handling
  }
};

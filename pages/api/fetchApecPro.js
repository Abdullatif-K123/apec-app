import axios from "axios";

export const fetchAppProduct = async () => {
  try {
    const response = await axios.get("https://dashboard.apec.com.lb/api/apec");
    return response.data;
  } catch (error) {
    console.error("Error Fetching data", error);
    return null;
  }
};

import axios from "axios";
export const fetchDataLocation = async () => {
  try {
    const response = await axios.get(
      "https://dashboard.apec.com.lb/api/branch"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

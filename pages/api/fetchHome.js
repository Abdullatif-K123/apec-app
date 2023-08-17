import axios from "axios";
export const fetchDataHome = async () => {
  try {
    const response = await axios.get(
      "https://dashboard.apec.com.lb/api/setting"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

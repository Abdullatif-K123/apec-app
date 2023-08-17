import axios from "axios";
export const fetchMarket = async () => {
  try {
    const response = await axios.get(
      "https://dashboard.apec.com.lb/api/smile/market"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

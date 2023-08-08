import axios from "axios";
export const fetchMarket = async () => {
  try {
    const response = await axios.get(
      "http://apec.mootawer.com/api/smile/market"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

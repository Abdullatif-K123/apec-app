import axios from "axios";

export const downloadPDF = async () => {
  try {
    const response = await axios.get(
      "http://apec.mootawer.com/api/setting/download/pdfBrochure",
      {
        responseType: "blob", // Set the response type to 'blob'
      }
    );
    console.log(response);
    // Create a temporary URL for the downloaded file
    const url = window.URL.createObjectURL(new Blob([response.data]));

    // Create a link element and simulate a click to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "file.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading PDF:", error);
  }
};

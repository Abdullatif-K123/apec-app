import axios from "axios";

export const downloadPDF = async () => {
  return axios({
    url: "http://apec.mootawer.com/api/setting/download/pdfBrochure",
    method: "GET",
    responseType: "blob",
  })
    .then((response) => {
      const href = window.URL.createObjectURL(response.data);

      const anchorElement = document.createElement("a");

      anchorElement.href = href;
      anchorElement.download = "apec-profile.pdf";

      document.body.appendChild(anchorElement);
      anchorElement.click();

      document.body.removeChild(anchorElement);
      window.URL.revokeObjectURL(href);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

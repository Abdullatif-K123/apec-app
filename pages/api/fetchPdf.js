import axios from "axios";

export const downloadPDF = async () => {
  return axios({
    url: "https://dashboard.apec.com.lb/api/setting/download/pdfBrochure",
    method: "GET",
    responseType: "blob",
    onDownloadProgress: (progressEvent) => {
      let percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      ); // you can use this to show user percentage of file downloaded
    },
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

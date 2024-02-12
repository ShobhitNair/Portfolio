import React from 'react';

const DownloadPDFButton = () => {
  const handleDownload = () => {
    const url = '/Shobhit MernCv.pdf'; 
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Resume.pdf'); 
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error('Error downloading PDF:', error);
      });
  };

  return (
    <button onClick={handleDownload}>
      Resume
    </button>
  );
};

export default DownloadPDFButton;

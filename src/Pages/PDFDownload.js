import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Indi_Article from './Indi_Article';

const PDFDownload = () => {
  return (
    <div>
      {console.log('called')}
      <PDFDownloadLink document={<Indi_Article />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PDFDownload;

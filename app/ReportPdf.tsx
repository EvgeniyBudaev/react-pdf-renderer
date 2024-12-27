"use client";

import { type FC } from "react";
import {
  Document,
  Page,
  PDFViewer,
  PDFDownloadLink,
  Text,
  StyleSheet,
} from '@react-pdf/renderer';
import {registerFonts} from "./registerFonts";

export const ReportPdf: FC = () => {
  registerFonts();

  const styles = StyleSheet.create({
    page: {
      height: '100%',
      backgroundColor: '#fff',
      fontFamily: 'Gilroy',
      lineHeight: 1.5,
      fontWeight: 500,
      color: "#000",
    },
  });

  const doc = (
    <Document language="en">
      <Page
        size="A4"
        style={{
          ...styles.page,
        }}
      >
        <Text>123ff456fi987</Text>
      </Page>
    </Document>
  );

  return (
    <div>
      <PDFViewer className="w-full h-svh">{doc}</PDFViewer>

      <PDFDownloadLink document={doc}>Download</PDFDownloadLink>
    </div>
  );
}
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Stillarni komponentdan tashqarida e'lon qilish yaxshiroq
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// PDF hujjatining o'zi
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Alibekning Rezyumesi</Text>
      </View>
      <View style={styles.section}>
        <Text>Frontend Developer (React)</Text>
      </View>
    </Page>
  </Document>
);

const Resume = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* PDFViewer brauzerda PDF-ni ko'rsatib beradi */}
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default Resume;

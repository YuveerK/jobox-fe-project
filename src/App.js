import "./App.css";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import PDFFile from "./PDFFile";
import Navbar from "./Navbar";
import InputFields from "./InputFields";
function App() {
  return (
    <div className="App">
      <Navbar />
      <InputFields />
    </div>
  );
}

export default App;

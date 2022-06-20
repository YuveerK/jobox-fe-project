import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  src: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    marginVertical: 20,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    color: "grey",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 10,
    fontFamily: "Times-Roman",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  normalText: {
    fontSize: 10,
  },
  bullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "black",
  },
});

const PDFFile = ({
  ClientName,
  ServiceCost,
  ServiceDescription,
  StartDate,
  EndDate,
}) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          Recruitment rates and terms agreement
        </Text>
        <Text style={styles.text}>FIXED TERM AGREEMENT</Text>
        <Text style={styles.normalText}>between</Text>
        <View
          style={{
            width: "100%",
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ marginBottom: 15, fontWeight: "400" }}>
            BMF ATTORNEYS
          </Text>
          <Text>with company registration number 2022/123456/07</Text>
        </View>
        <Text style={styles.normalText}>and</Text>
        <View
          style={{
            width: "100%",
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ marginBottom: 15, fontWeight: "400" }}>
            {ClientName}
          </Text>
        </View>
        <Text style={styles.normalText}>
          Collectively referred herein as the “parties”{" "}
        </Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          Recruitment rates and terms agreement
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ marginRight: 5, fontSize: 12 }}>1.</Text>
          <Text style={[styles.normalText, { fontFamily: "Helvetica-Bold" }]}>
            Payment Terms:
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 12,
            marginTop: 5,
          }}
        >
          <View
            style={{
              marginRight: 5,
              width: 4,
              height: 4,
              borderRadius: 2,
              backgroundColor: "black",
              marginTop: 7,
            }}
          ></View>
          <Text style={[styles.normalText, { lineHeight: 1.5 }]}>
            BMF Attorney’s fee {ServiceCost} (excluding VAT). The retainer fee
            can be paid upfront, or month-to-month and the payment terms can be
            payable as follows:
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 24,
            marginTop: 5,
          }}
        >
          <View
            style={{
              marginRight: 5,
              width: 6,
              height: 6,
              borderRadius: 3,
              borderWidth: 1,
              marginTop: 5,
              borderColor: "black",
            }}
          ></View>
          <Text style={[styles.normalText]}>Upfront:</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 40,
            marginTop: 5,
          }}
        >
          <View
            style={{
              marginRight: 5,
              width: 4,
              height: 4,
              borderRadius: 2,
              backgroundColor: "black",
              marginTop: 7,
            }}
          ></View>
          <Text style={[styles.normalText, { lineHeight: 1.5 }]}>
            Three-twelfths of the fee during the probation period in 3 equal
            instalments by the 7th day of each month
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 40,
            marginTop: 5,
          }}
        >
          <View
            style={{
              marginRight: 5,
              width: 4,
              height: 4,
              borderRadius: 2,
              backgroundColor: "black",
              marginTop: 7,
            }}
          ></View>
          <Text style={[styles.normalText, { lineHeight: 1.5 }]}>
            Nine-twelfths of the fee upon conclusion of the probation period of
            employment payable on the 7th day of the 4th month.
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 24,
            marginTop: 5,
          }}
        >
          <View
            style={{
              marginRight: 5,
              width: 6,
              height: 6,
              borderRadius: 3,
              borderWidth: 1,
              marginTop: 5,
              borderColor: "black",
            }}
          ></View>
          <Text style={[styles.normalText]}>Month-to-month:</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 40,
            marginTop: 5,
          }}
        >
          <View
            style={{
              marginRight: 5,
              width: 4,
              height: 4,
              borderRadius: 2,
              backgroundColor: "black",
              marginTop: 7,
            }}
          ></View>
          <Text style={[styles.normalText, { lineHeight: 1.5 }]}>
            The month-to-month fee shall be paid by the 7th day of each month
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 12,
            marginTop: 5,
          }}
        >
          <View
            style={{
              marginRight: 5,
              width: 4,
              height: 4,
              borderRadius: 2,
              backgroundColor: "black",
              marginTop: 7,
            }}
          ></View>
          <Text style={[styles.normalText, { lineHeight: 1.5 }]}>
            No variation or amendment to this Agreement shall be of any effect
            unless such amendment is put in writing and signed by all parties
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 12,
            marginTop: 5,
          }}
        >
          <View
            style={{
              marginRight: 5,
              width: 4,
              height: 4,
              borderRadius: 2,
              backgroundColor: "black",
              marginTop: 7,
            }}
          ></View>
          <Text style={[styles.normalText, { lineHeight: 1.5 }]}>
            Any documentation prepared by{" "}
            <Text style={{ fontFamily: "Helvetica-Bold" }}>BMF Attorneys</Text>{" "}
            remains its property
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ marginRight: 5, fontSize: 12 }}>2.</Text>
          <Text style={[styles.normalText, { fontFamily: "Helvetica-Bold" }]}>
            Appointment
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 12,
            marginTop: 5,
          }}
        >
          <Text style={[styles.normalText, { fontFamily: "Helvetica-Bold" }]}>
            2.1.
          </Text>
          <Text style={[styles.normalText, { lineHeight: 1.5 }]}>
            The Client has procured the services of{" "}
            <Text style={[styles.normalText, { fontFamily: "Helvetica-Bold" }]}>
              BMF Attorneys
            </Text>
            and hereby accepts the appointment as an independent contractor of
            the Client for a fixed{" "}
            <Text
              style={{
                textDecoration: "underline",
                textDecorationStyle: "dotted",
              }}
            >
              period of time.
            </Text>
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 12,
            marginTop: 5,
          }}
        >
          <Text style={styles.normalText}> 2.2.</Text>
          <Text style={[styles.normalText, { lineHeight: 1.5 }]}>
            The reason for this fixed-term contract is{" "}
            <Text style={{ fontFamily: "Helvetica-Bold" }}>
              for the appointment and completion of the {ServiceDescription}
            </Text>
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              marginRight: 5,
              fontSize: 12,
              fontFamily: "Helvetica-Bold",
            }}
          >
            3.
          </Text>
          <Text style={[styles.normalText, { fontFamily: "Helvetica-Bold" }]}>
            Duration
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 12,
            marginTop: 5,
          }}
        >
          <Text style={[styles.normalText, { fontFamily: "Helvetica-Bold" }]}>
            {" "}
            3.1.{" "}
          </Text>
          <Text style={[styles.normalText, { lineHeight: 1.5 }]}>
            Notwithstanding the date of signature hereof, this fixed term
            contract shall be deemed to have commenced on the {StartDate} and
            will terminate, without further notice, on the {EndDate}.
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 12,
            marginTop: 5,
          }}
        >
          <Text style={styles.normalText}> 3.2.</Text>
          <Text style={[styles.normalText, { lineHeight: 1.5 }]}>
            The automatic termination of the contract on the Termination Date
            shall not be construed as a dismissal but as the completion of a
            fixed term contract.
          </Text>
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>

      <Page style={styles.body}>
        <Text
          style={[
            styles.normalText,
            { fontFamily: "Helvetica-Bold", fontSize: 14 },
          ]}
        >
          4
        </Text>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            flexDirection: "row",
            marginTop: 150,
          }}
        >
          <View style={{ width: "50%" }}>
            <Text style={styles.normalText}>Signed At</Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text style={styles.normalText}>On</Text>
          </View>
        </View>

        <View
          style={{
            width: "50%",
            borderWidth: 0.5,
            borderTopColor: "black",
            marginTop: 150,
          }}
        ></View>
        <Text style={[styles.normalText, { marginTop: 10 }]}>
          Who warrants authority on behalf of Jobox
        </Text>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            flexDirection: "row",
            marginTop: 100,
          }}
        >
          <View style={{ width: "50%" }}>
            <Text style={styles.normalText}>Signed At</Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text style={styles.normalText}>On</Text>
          </View>
        </View>

        <View
          style={{
            width: "50%",
            borderWidth: 0.5,
            borderTopColor: "black",
            marginTop: 100,
          }}
        ></View>
        <Text style={[styles.normalText, { marginTop: 10 }]}>
          Who warrants authority on behalf of
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;

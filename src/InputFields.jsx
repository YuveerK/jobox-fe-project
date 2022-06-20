import React, { useState } from "react";
import styled from "styled-components";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";
const InputFields = () => {
  const [clientName, setClientName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [serviceCost, setServiceCost] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  return (
    <InputFieldContainer>
      <div className="form__box">
        <input
          onChange={(e) => setClientName(e.target.value)}
          type="text"
          placeholder="Client Name"
        />
        <input
          onChange={(e) => setServiceCost(e.target.value)}
          type="text"
          placeholder="Service Cost"
        />
        <textarea
          name="ServiceDescription"
          placeholder="Service Description"
          id=""
          cols="30"
          rows="10"
          onChange={(e) => setServiceDescription(e.target.value)}
        ></textarea>
        <input
          onChange={(e) => setStartDate(e.target.value)}
          type="date"
          placeholder="Start Date"
        />
        <input
          onChange={(e) => setEndDate(e.target.value)}
          type="date"
          placeholder="End Date"
        />
      </div>

      {clientName !== "" &&
        serviceCost !== "" &&
        serviceDescription !== "" &&
        startDate !== "" &&
        endDate !== "" && (
          <PDFDownloadLink
            document={
              <PDFFile
                ClientName={clientName}
                ServiceCost={serviceCost}
                ServiceDescription={serviceDescription}
                StartDate={startDate}
                EndDate={endDate}
              />
            }
            fileName="somename.pdf"
          >
            {({ loading }) =>
              loading ? (
                <button>Loading document...</button>
              ) : (
                <button> Download now!</button>
              )
            }
          </PDFDownloadLink>
        )}
    </InputFieldContainer>
  );
};
const InputFieldContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .form__box {
    width: 50%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input {
      width: 100%;
      margin: 1rem;
      padding: 1rem;
      outline: none;
      border: none;
      border-bottom: 1px solid lightgrey;
    }
    textarea {
      width: 100%;
      margin: 1rem;
      padding: 1rem;
      outline: none;
      resize: none;
    }
  }
`;
export default InputFields;

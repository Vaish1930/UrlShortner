import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

import Colors from "./Colors";
import axios from "../Axios";

function ListHeader({ addAUrl }) {
  const [url, setUrl] = useState("");

  const shortenUrl = async (event) => {
    event.preventDefault();
    if (!url.trim()) return alert("Url can't be Empty");

    const { data } = await axios.post("/urls/create", { url });
    addAUrl((prevState) => [data, ...prevState]);

    setUrl("");
  };

  return (
    <ListHeaderContainer>
      <UrlInput
        placeholder="Enter a Url to Shorten"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <ShortenButton variant="contained" onClick={shortenUrl}>
        Shorten
      </ShortenButton>
    </ListHeaderContainer>
  );
}

export default ListHeader;

const ListHeaderContainer = styled.form`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.secondary};
  border-radius: 12px;
  margin-bottom: 10px;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.4);
`;
const UrlInput = styled.input`
  border: none;
  outline-width: 0;
  border-bottom: 2px solid #000;
  background: transparent;
  width: 50%;
  height: 40px;
  font-size: 1.3rem;
  margin-right: 10px;
  color: ${Colors.text};
  ::placeholder {
    color: #eee;
  }
`;

const ShortenButton = styled(Button)`
  width: 40px !important;
  height: 40px !important;
`;

import React from "react";
import styled from "styled-components";

import axios from "../Axios";
import { Button } from "@mui/material";
import Colors from "./Colors";

function ListItem({ data, setUrls }) {
  const deleteUrl = async (event) => {
    event.preventDefault();
    const { data: urlData } = await axios.delete(`/urls/${data._id}/delete`);

    setUrls((prevState) =>
      prevState.filter((item) => item._id !== urlData._id)
    );
  };

  return (
    <ListItemContainer>
      <UrlsContainer>
        <Url>Url: {data.url}</Url>
        <Url>Short-Url: http://localhost:3000/{data.shortUrl}</Url>
      </UrlsContainer>
      <DeleteButton variant="contained" onClick={deleteUrl}>
        Delete
      </DeleteButton>
    </ListItemContainer>
  );
}

export default ListItem;

const ListItemContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #888;
`;

const UrlsContainer = styled.div`
  flex-direction: column;
`;

const Url = styled.h3`
  color: ${Colors.text};
`;

const DeleteButton = styled(Button)`
  background: #990000 !important;
  padding: 10px 20px !important;
`;

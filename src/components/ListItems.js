import React from "react";
import styled from "styled-components";

import ListItem from "./ListItem";
import Colors from "./Colors";

function ListItems({ urls, setUrls }) {
  return (
    <ListItemsContainer>
      {urls.map((data) => (
        <ListItem key={data._id} data={data} setUrls={setUrls} />
      ))}
    </ListItemsContainer>
  );
}

export default ListItems;

const ListItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 63vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: 0;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.secondary};
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.26);
`;

import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Colors from "./components/Colors";

import ListHeader from "./components/ListHeader";
import ListItems from "./components/ListItems";
import axios from "./Axios";

function Homepage() {
  const [urls, setUrls] = useState([]);

  const fetchUrls = useCallback(async () => {
    const { data } = await axios.get("/urls");
    setUrls(data);
  }, [setUrls]);

  useEffect(() => {
    fetchUrls();
  }, [fetchUrls]);

  return (
    <HomepageContainer>
      <Header />
      <UrlList>
        <ListHeader addAUrl={setUrls} />
        <ListItems urls={urls} setUrls={setUrls} />
      </UrlList>
    </HomepageContainer>
  );
}

export default Homepage;

const HomepageContainer = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: ${Colors.background};
  align-items: center;
`;

const UrlList = styled.section`
  display: flex;
  width: 40%;
  flex-direction: column;
  margin-top: 20px;
`;

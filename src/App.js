import React from "react";

import { Container, Content, Sidebar, Header } from "./layout";
import { HotelPage } from "./pages/hotel";

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <HotelPage />
      </Content>
    </Container>
  );
}

export default App;

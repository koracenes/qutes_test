import React from "react";
import {
  Container,
  TopContent,
  BottomContent,
  Header,
  SideBar,
  ContentBody,
} from "../Index.style";
import LoginForm from "../assets/LoginForm/LoginForm";
export default function index() {
  return (
    <>
      <Container>
        <TopContent>
          <Header>HEADER</Header>
        </TopContent>
        <BottomContent>
          <SideBar>
            <LoginForm />
          </SideBar>
          <ContentBody>MAIN CONTENT</ContentBody>
        </BottomContent>
      </Container>
    </>
  );
}

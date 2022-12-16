import styled from "styled-components";
import Header from "./Header";
import Menu from "./Menu";
import LoadingPage from "../components/animations/LoadingPage";

export default function Container({ children, isDataLoaded }) {
  return (
    <>
      <Header />
      <Main>{isDataLoaded ? children : <LoadingPage />}</Main>
      <Menu />
    </>
  );
}

const Main = styled.main`
  height: 100vh;
  background-color: #f2f2f2;
  overflow: scroll;
  padding: 100px 16px 110px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--theme-gray);

  p {
    line-height: 23px;
  }
`;

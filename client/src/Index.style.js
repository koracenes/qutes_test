import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  padding: 0;
  margin: 0;
`;
//  ===== HEADER  =======
export const TopContent = styled.div`
  width: 100%;
  height: 10vh;
  margin-bottom: 10px;
`;

export const Header = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, darkgray, lightgray);
`;
//===============================
export const BottomContent = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`;
//  ===== SIDE BAR  =======
export const SideBar = styled.div`
  border-radius: 10px;
  width: 15%;
  padding: 40px 10px;

  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0)
  );
`;
//  ===== MAIN CONTENT  =======
export const ContentBody = styled.div`
  width: 90%;
  margin: 0 20px;
`;

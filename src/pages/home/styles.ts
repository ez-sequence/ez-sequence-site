import styled from "styled-components";
import logo from "/logo.svg";
import more from "/more.svg";
import screenshot from "../../assets/screenshot.png";

export const MainBg = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;

  /* background: url(${screenshot}) no-repeat left top / cover; */
  background: url(${screenshot}) no-repeat left 15% / cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(#000003cc, #00000388);
    pointer-events: none;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
  color: #fff;
`;

export const Header = styled.div`
  height: 70px;
  margin: 0 4vw;

  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LogoImg = styled.img.attrs({ src: logo })`
  height: 35px;
  filter: invert(100%);
  `;

export const MoreImg = styled.img.attrs({ src: more })`
  margin-top: 20px;
  height: 33px;
  filter: invert(100%);

  cursor: pointer;
`;

export const LogoText = styled.div`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.6px;
`;

export const TitleBox = styled.div`
  margin-top: calc(50vh - 70px - 130px);
  margin-left: 4vw;
`;

export const Title = styled.div`
  font-size: 68px;
  font-weight: 700;
  letter-spacing: -1.2px;
`;

export const SubTitle = styled.div`
  margin: -8px 0 0 2px;
  font-size: 26px;
  font-weight: 200;
  letter-spacing: -0.8px;
`;

export const BtnBar = styled.div`
  margin: 30px 0 0 1px;
  display: flex;
  gap: 8px
`;

export const Btn = styled.div`
  padding: 9px 50px;

  border-radius: 30px;
  border: 1.5px solid #fff;

  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.4px;

  cursor: pointer;
`;

export const FilledBtn = styled(Btn)`
  background-color: #fff;
  color: #222;
`;
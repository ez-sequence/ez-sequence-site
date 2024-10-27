import styled from "styled-components";
import logo from "/logo.svg";

export const Header = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LogoImg = styled.img.attrs({ src: logo })`
  height: 36px;
`;

export const LogoText = styled.div`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.6px;
`;

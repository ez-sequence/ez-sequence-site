import { Btn, BtnBar, FilledBtn, Header, LogoBox, LogoImg, LogoText, MainBg, MoreImg, SubTitle, Title, TitleBox } from "./styles";

const Home = () => {
  return (
    <div>
      <MainBg>
        <Header>
          <LogoBox>
            <LogoImg />
            <LogoText>EZ-Sequence</LogoText>
          </LogoBox>
          <MoreImg />
        </Header>
        <TitleBox>
          <Title>EZ Sequence</Title>
          <SubTitle>
            <span style={{ fontWeight: 600 }}>이지시퀀스</span>, 클릭 몇 번으로 완성하는 시퀀스 회로
          </SubTitle>
          <BtnBar>
            <Btn>기능 알아보기</Btn>
            <FilledBtn>제품 구매하기</FilledBtn>
          </BtnBar>
        </TitleBox>
      </MainBg>
    </div>
  );
};

export default Home;

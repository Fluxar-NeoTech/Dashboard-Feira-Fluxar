import {
  Container,
  DashboardContainer,
  Footer,
  FooterText,
  Header,
  Iframe,
  NavbarSpacer,
  Subtitle,
  Title,
} from "./styles";

export default function PowerBIDashboard() {
  const reportUrl =
    "https://app.powerbi.com/view?r=eyJrIjoiZGI2NDQyOGYtNGFlOC00ZDVjLThjNTgtMWNhODVkMDVlNjI1IiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9";

  return (
    <Container>
      <NavbarSpacer />

      <Header>
        <Title>Dashboard Feira</Title>
        <Subtitle>Visualização em tempo real dos dados da avaliação realizada na Feira</Subtitle>
      </Header>

      <DashboardContainer>
        <Iframe title="Dashboard Power BI" src={reportUrl} allowFullScreen />
      </DashboardContainer>

      <Footer>
        <FooterText>Atualizado em tempo real • Power BI Embedded</FooterText>
      </Footer>
    </Container>
  );
}

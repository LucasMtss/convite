import { Container, Content, DateImage, Divider, Frame, Ilustration, Subtitle, Title, Link, GiftsListButton, SmallText } from '../Invite/styles';
import dividerImage from '../../assets/images/devider.png'
import dateImage from '../../assets/images/date.png'
import ilustration from '../../assets/images/ilustration.png'

function Home() {

  return (
    <Container>
    <Content>
      <Frame>
        <Title>Beatriz & Lucas</Title>
        <Divider src={dividerImage}/>
        <Subtitle>Com a bênção de Deus e de seus pais, nós convidamos você(s) para a celebração de nosso casamento</Subtitle>
        <DateImage src={dateImage} />
        <Subtitle>Local: <a  target="_blank" href='https://www.google.com/maps/dir//igreja+da+piedade+barbacena/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xa2206ada5b42fb:0x5af4b8bc58e69e36?sa=X&ved=2ahUKEwi18tCepcmBAxUEr5UCHU2ACpgQ9Rd6BAhUEAA&ved=2ahUKEwi18tCepcmBAxUEr5UCHU2ACpgQ9Rd6BAhnEAQ'>Igreja da Piedade - R. Lima Duarte, 39 - Centro, Barbacena - MG </a></Subtitle>
        <Subtitle>Contamos com sua presença.</Subtitle>
        <Divider src={dividerImage}/>
        <Subtitle>Por gentileza, confirme sua presença no link <Link href="https://site.lejour.com.br/lucasebeatriz">Confirmar presença</Link>.</Subtitle>
        <Subtitle>Caso queira ajudar com a nossa lista de presentes, é só acessá-la clicando no botão abaixo.  </Subtitle>
        <SmallText>(OBS: Os presentes são virtuais, então se você nos presentear com uma sanduicheira por exemplo, iremos receber o dinheiro, e não o produto)</SmallText>
        <GiftsListButton onClick={() => window.open('https://site.lejour.com.br/lista-de-presentes/lucasebeatriz', '_blank')}>Lista de presentes</GiftsListButton>
        <Ilustration src={ilustration} />
      </Frame>
    </Content>
  </Container>
  );
}

export default Home;

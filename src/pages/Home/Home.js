import { JackInTheBox } from 'react-awesome-reveal';
import { MainContainer } from 'components/MainContainer/MainContainer';

import { Title, ImgPhone } from './Home.styled';
import srcImg from '../../img/phone.png';

const Home = () => {
  return (
    <MainContainer>
      <Title>Welcome to your phone book!</Title>
      <JackInTheBox duration="1500">
        <ImgPhone src={srcImg} alt="phone" />
      </JackInTheBox>
    </MainContainer>
  );
};

export default Home;

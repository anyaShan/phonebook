import { MainContainer } from 'components/MainContainer/MainContainer';

import { Title, ImgPhone } from './Home.styled';
import srcImg from '../../img/phone.png';

const Home = () => {
  return (
    <MainContainer>
      <Title>Welcome to your phone book!</Title>
      <ImgPhone src={srcImg} alt="phone" />
    </MainContainer>
  );
};

export default Home;

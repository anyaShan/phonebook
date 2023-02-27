import { JackInTheBox } from 'react-awesome-reveal';
import { MainContainer } from 'components/MainContainer/MainContainer';

import { Title, SvgPhone } from './Home.styled';
// import srcImg from '../../img/phone.png';
// import srcSVG from '../../img/phonep.svg';

const Home = () => {
  return (
    <MainContainer>
      <Title>Welcome to your phone book! </Title>

      <JackInTheBox duration="1500">
        {/* <ImgPhone src={srcImg} alt="phone" /> */}
        <SvgPhone
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <title>phone</title>
          <path d="M24 0c-8.55 0-17.12 1.53-20.23 4.58-2.58 2.53-3.44 7-3.73 9.83 0 0-0.040 0.28-0.040 0.4 0 1.11 0.9 2 2 2 0.13 0 4.94-0.39 7.84-0.63 0.070-0.010 0.14-0.020 0.21-0.040 1.080-0.030 1.95-0.91 1.95-2l0.010-3.94c0-1.22 0.99-2.2 2.21-2.2h19.559c1.221 0 2.211 0.98 2.211 2.2l0.010 3.94c0 1.090 0.87 1.97 1.95 2 0.069 0.020 0.14 0.030 0.21 0.040 2.9 0.24 7.71 0.63 7.84 0.63 1.1 0 2-0.89 2-2 0-0.12-0.040-0.4-0.040-0.4-0.29-2.83-1.149-7.3-3.729-9.83-3.111-3.050-11.681-4.58-20.231-4.58zM24 26c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM21 17v-2.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v2.5l-13.49 14.41c-0.93 0.91-1.51 2.18-1.51 3.58v4.010c0 2.21 1.79 4 4 4h1v2.5c-0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-0-2.5h26v2.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5v-2.5h1c2.21 0 4-1.79 4-4v-4.010c0-1.4-0.58-2.67-1.51-3.58l-13.49-14.41v-2.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v2.5h-6zM24 22c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8z"></path>
        </SvgPhone>
      </JackInTheBox>
    </MainContainer>
  );
};

export default Home;

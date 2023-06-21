import React from 'react';

import Title from '../../components/Form/Title';
import image from '../../assets/Vector.png';
import decor from '../../assets/Decor.png';
import { Wrapper } from './Home.styled';


const Home = () => {
  return (
    <Wrapper>
      <Title fontSize={'48px'} text={'Congratulations'} />
      <img className="image-decor" src={decor} alt="people"></img>
      <h5>
        Now you are on the main page. Soon we will provide you with detailed feedback on the result
        of your work
      </h5>
      <button>Log Out</button>
      <img src={image} alt="people"></img>
    </Wrapper>
  );
};

export default Home;

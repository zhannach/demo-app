import { useEffect } from 'react';

import Title from '../../components/Form/Title';
import image from '../../assets/Vector.png';
import decor from '../../assets/Decor.png';
import { Wrapper } from './Home.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { logout } from '../../redux/api';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isUserActive = useSelector((state: RootState) => state.user.isUserActive);

  const handleClick = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!isUserActive) {
      navigate('/');
    }
  }, [navigate, isUserActive]);

  return (
    <Wrapper>
      <Title fontSize={'48px'} text={'Congratulations'} />
      <img className="image-decor" src={decor} alt="people"></img>
      <h5>
        Now you are on the main page. Soon we will provide you with detailed feedback on the result
        of your work
      </h5>
      <button onClick={handleClick}>Log Out</button>
      <img src={image} alt="people"></img>
    </Wrapper>
  );
};

export default Home;

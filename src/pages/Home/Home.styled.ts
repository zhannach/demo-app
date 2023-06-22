import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  color: var(--text-color);
  margin: 130px 0 46px;
  position: relative;

  h5 {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 48px;
    line-height: 155%;
    text-align: center;
    width: 30%;
  }

  .image-decor {
    position: absolute;
    top: -20%;
    left: 60%;
  }

  button {
    background-color: var(--second-color);
    width: 99px;
    height: 44px;
    margin-bottom: 60px;
    color: var(--text-color);
    font-size: 16px;
    font-weigh: 600;
    &:hover {
      background-color: var(--hover-button);
    }
  }
`;
import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  width: 100%;
  margin-top: 3rem;
  margin-left: 3rem;
  align-items: flex-start;
  flex-direction: column;
  font-style: normal;

  h3 {
    font-weight: 700;
    font-size: 36px;
    line-height: 150%;
    color: var(--text-color);
  }

  h5 {
    font-weight: 600;
    font-size: 16px;
    line-height: 155%;
    color: var(--second-color);
  }
`;

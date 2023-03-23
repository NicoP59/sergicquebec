import styled from 'styled-components';

const BanniereStyled = styled.div`
  .fondbleu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-image: url('./img/maison.jpg');
    height: 20vh;
    background-size: cover;
    background-color: #367399;
  }

  .banniere {
    padding-top: 50px;
    font-size: 1.5em;
    text-align: center;
    color: #fff;
    font-weight: bold;
  }

  .quebec {
    color: #fff;
  }

  .welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .lignebleu {
    display: flex;
    justify-content: space-between;
    background-color: blue;
    width: 100%;
  }

  p {
    color: #fff;
  }
`;

export default BanniereStyled;

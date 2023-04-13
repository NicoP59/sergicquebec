import styled from 'styled-components';

const Hooks3Styled = styled.div`
  .container {
    max-width: 1107px;
    margin: 0 auto;
    padding-left: 8rem;
    padding-right: 8rem;
    margin-top: 2em;
  }


  .hooks {
    width: 100%;
    margin-left: 8%;
  }
  .pasOuvert {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background: #367399;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 15px;
    width: 40%;
    height: 5vh;
    overflow: hidden;
  }

  img {
    width: 40px;
    height: 40px;
  }

  .p {
    padding-right: 170px;
  }

  .showMore {
    border: 1px solid #367399;
    background: transparent;
    font-weight: bold;
    color: #ffffff;
    font-size: 2.5em;
  }

  .ouvert {
    box-shadow: 0 2px 4px 0 red;
    width: 43%;
    padding-top: 0.5rem;
    padding-bottom: 2rem;
  }


`;

export default Hooks3Styled;

import styled from 'styled-components';

const HooksStyled = styled.div`
  .container {
    max-width: 1107px;
    margin: 0 auto;
    padding-left: 8rem;
    padding-right: 8rem;
    margin-top: 2em;
  }

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0px 0px 24px;
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

  ul {
    margin-bottom: 1.5rem;
    padding-left: 1rem;
  }
  li {
    list-style-type: disc;
    font-size: 0.875rem;
    line-height: 1.25rem;
    /* margin-left: 2em; */
    margin: 1px 10px 2px;
  }
`;

export default HooksStyled;

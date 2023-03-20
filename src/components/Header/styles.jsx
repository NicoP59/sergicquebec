import styled from 'styled-components';

const HeaderStyled = styled.div`
  .langue {
    position: absolute;
    right: 10%;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1320px;
    margin: 0 auto;
    height: 5rem;
    padding: 1rem;
  }

  .logo {
    width: 180px;
  }

  .bloc-liens {
    display: flex;
    flex-wrap: wrap;
  }

  .bloc-liens a {
    text-decoration: none;
    justify-content: end;
  }

  .lien {
    margin: auto;
    margin-right: 40px;
  }

  .linky {
    padding: 10px;
    color: black;
  }

  a:last-child li:last-child {
    background-color: #367399;
    color: #fff;
  }

  li {
    font-family: sans-serif;
  }
`;

export default HeaderStyled;

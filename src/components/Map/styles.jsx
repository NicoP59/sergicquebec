import styled from 'styled-components';

const MapStyled = styled.div`
  .container {
    background-color: #367399;
  }

  h2 {
    font-size: 1.5rem;
    text-align: center;
  }

  .container2 {
    display: flex;
    justify-content: center;
  }

  .map {
    width: 40%;
  }

  .map2 {
    border-radius: 30px;
  }

  .container-agence {
    width: 300px;
    height: 400px;
    overflow-y: scroll;
    scrollbar-width: thin;
  }
`;
export default MapStyled;

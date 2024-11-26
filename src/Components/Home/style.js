import styled from "styled-components";


export const MainStyle = styled.main`
display: flex;
`

export const Button = styled.button`
  background-color: #037143;
  color: white;
  border: none;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 30px;
`;

export const H1 = styled.h1`
  font-size: 4rem;
`
export const H2 = styled.h2`
  font-size: 4rem;
  span{
    font-size: 6rem;
    font-weight: 600;
    color: #037143;
  }
`

export const P = styled.p`
 font-size: 1.5rem;
`

export const div = styled.div`
  display: flex;
  width: 30%;
  button{
    background-color: transparent;
    cursor: pointer;

    &:hover{
      transform: scale(1.3) rotate(10deg);
    }

    img{
      transform: rotate(-10deg)
    }
  }
`

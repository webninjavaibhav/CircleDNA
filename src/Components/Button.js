import React from 'react';
import styled from 'styled-components';


const MainButton = styled.button`
  font-family: 'GilroyBold';
  width: ${props=>props.large?"288px":"100%"};
  background-color: var(--green_200);
  color: var(--whiteColor);
  border-radius: 8px;
  padding: 15px 40px 16px;
  letter-spacing: 0.05em;
  font-weight: 800;
  font-size: 20px;
  line-height: 25px;
  text-transform: uppercase;
  border: 0;
  @media(max-width: 768px) {
    margin-bottom: 15px;
    width: 100%;
    
  }
`;

const Button = (props) => <MainButton className={props.className} large={props.large}>{props.name}</MainButton>;

export default Button;

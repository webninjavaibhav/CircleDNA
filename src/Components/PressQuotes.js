import Quotes1 from '../assets/images/quotes1.svg'
import Quotes2 from '../assets/images/quotes2.svg'
import Quotes3 from '../assets/images/quotes3.svg'
import Quotes1Company from '../assets/images/quotes1Company.svg'
import Quotes2Company from '../assets/images/quotes2Company.svg'
import Quotes3Company from '../assets/images/quotes3Company.svg'
import React from 'react';
import styled from 'styled-components';

import { Layout, Row, Col } from 'antd'

const { Content } = Layout;

const SectionTitle = styled.h4`
  font-family: 'GilroyMedium';
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  color: var(--blackShadeColor);
  text-align: center;
  margin-bottom: 67px;
  margin-top: 72px;
  @media(max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 50px;
  }
`;

const CompanyQuotes = styled.div`
  padding: 0 50px;
  padding-bottom: 115px;
  border-bottom: 1.5px solid var(--lightGrey_100);
  @media(max-width: 768px) {
    padding-bottom: 60px;
    border-bottom: 0;
  }
  img{
    display: flex;
    margin: auto;
  }
`;

const Quotes = styled.div`
  position: relative;
  
  margin-bottom: 47px;
  p{
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: var(--blackColor);
    margin-bottom: 0;
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background-image: ${props=> `url(${props.image})`}
  }
`;

const PressQuotes = () => {
  return (
    <>
      <Content>
        <Row>
          <Col span={24}>
            <SectionTitle>What the press is saying</SectionTitle>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24} md={4}>
            <CompanyQuotes>
              <Quotes image={Quotes1}>
                <p>“CircleDNA is pioneering the genomics industry”</p>
              </Quotes>
              <img src={Quotes1Company} alt="marketwatch" />
            </CompanyQuotes>


          </Col>
          <Col span={24} md={4}>
            <CompanyQuotes>
            <Quotes image={Quotes2}>
              <p>“The new DNA test that predicts your health”</p>
            </Quotes>
            <img src={Quotes2Company} alt="the times" />
            </CompanyQuotes>
          </Col>
          <Col span={24} md={4}>
            <CompanyQuotes>
            <Quotes image={Quotes3}>
              <p>“CircleDNA partners with 15,000 stores globally”</p>
            </Quotes>
            <img src={Quotes3Company} alt="tech Crunch" />
            </CompanyQuotes>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default PressQuotes;

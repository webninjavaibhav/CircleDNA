import React from 'react';
import DNApart1 from '../assets/images/DNApart1.svg'
import DNApart2 from '../assets/images/DNApart2.svg'
import DNApart3 from '../assets/images/DNApart3.svg'
import DNApart4 from '../assets/images/DNApart4.svg'
import { Layout, Row, Col } from "antd";
import styled from "styled-components";
const { Content } = Layout

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

const DNAApart = styled.div`
  text-align: center;
  padding: 0 60px;
  @media(max-width: 768px) {
    padding: 0 20px;
    img{
      max-width: 64px;
    }
  }
`;

const DNAApartTitle = styled.h6`
  font-weight: 600;
  font-size: 24.0026px;
  line-height: 29px;
  color: #0C2B65;
  margin: 30px 0 24px;
  @media(max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
    margin: 11px 0 12px;
  }
`;

const DNAApartDescr = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #606060;
  @media(max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;


const CircleApart = () => {
  return (
    <>
      <Content>
        <Row>
          <Col span={24}>
            <SectionTitle>What Sets CircleDNA Apart</SectionTitle>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={12} md={5}>
            <DNAApart>
              <img src={DNApart1} alt="Comprehensive test" />
              <DNAApartTitle>The World’s Most Comprehensive Test</DNAApartTitle>
              <DNAApartDescr>Discover up to 500 reports across 20 categories</DNAApartDescr>
            </DNAApart>
          </Col>
          <Col span={12} md={5}>
            <DNAApart>
              <img src={DNApart2} alt="Consultation" />
              <DNAApartTitle>Complimentary 1-1 Consultation</DNAApartTitle>
              <DNAApartDescr>Speak with our genetics-trained health professionals</DNAApartDescr>
            </DNAApart>
          </Col>
          <Col span={12} md={5}>
            <DNAApart>
              <img src={DNApart3} alt="Accuracy Validated" />
              <DNAApartTitle>99.9% Accuracy Externally Validated </DNAApartTitle>
              <DNAApartDescr>Tests validated  by the Croucher Laboratory of Human Genomics</DNAApartDescr>
            </DNAApart>
          </Col>
          <Col span={12} md={5}>
            <DNAApart>
              <img src={DNApart4} alt="Private Secure" />
              <DNAApartTitle>Private  and <br/>Secure</DNAApartTitle>
              <DNAApartDescr>Your data is never sold or shared. Leading ISO27001 security standard</DNAApartDescr>
            </DNAApart>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default CircleApart;

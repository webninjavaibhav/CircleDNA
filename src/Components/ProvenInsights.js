import React from 'react';
import styled from 'styled-components'

import {Layout, Row, Col, Progress } from  'antd'

const { Content } = Layout;

const SectionTitle = styled.h4`
  font-family: 'GilroyMedium';
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  color: var(--blackShadeColor);
  text-align: center;
  margin-bottom: 20px;
  margin-top: 64px;
  @media(max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 12px;
  }
`;

const SectionSubTitle = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  color: var(--greyColor);
  @media(max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const ProgressData = styled.div`
        text-align: center;
  margin-top: 56px;
  @media(max-width: 768px) {
    padding: 0 35px;
    display: flex;
    align-items: center;
    margin-top: 21px;
    .ant-progress-inner{
      width: 68px !important;
      height: 68px !important;
    }
  }
  .ant-progress-text{
    font-family: 'GilroyBold';
    font-weight: 800;
    font-size: 45.0049px;
    line-height: 55px;
    color: #0C2B65;
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  h6{
    margin-top: 20px;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: var(--blackColor);
    padding-bottom: 88px;
    @media(max-width: 768px) {
      padding-bottom: 0;
      font-size: 18px;
      line-height: 26px;
      text-align: left;
      margin: 0;
      margin-left: 20px;
      br{
        display: none;
      }
    }
  }
`;

const ProvenInsights = () => {
  return (
    <>
      <Content>
        <Row>
          <Col span={24}>
            <SectionTitle>Delivering on proven insights</SectionTitle>
            <SectionSubTitle>Based on 1400+ customer responses from Jan - Feb 2020</SectionSubTitle>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24} md={4}>
            <ProgressData>
            <Progress width={135} trailColor="#88A8E7" strokeColor="#FE9438" strokeLinecap="square" type="circle" percent={92} />
            <h6>Found their DNA <br/>results invaluable</h6>
            </ProgressData>
          </Col>
          <Col span={24} md={4}>
            <ProgressData>
            <Progress width={135} trailColor="#88A8E7" strokeColor="#1C70A2" strokeLinecap="square" type="circle" percent={86} />
            <h6>Recommended to their<br/> family and friends</h6>
            </ProgressData>
          </Col>
          <Col span={24} md={4}>
            <ProgressData>
            <Progress width={135} trailColor="#88A8E7" strokeColor="#07C1C9" strokeLinecap="square" type="circle" percent={73} />
            <h6>Made healthier diet / <br/>lifestyle changes</h6>
            </ProgressData>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default ProvenInsights;

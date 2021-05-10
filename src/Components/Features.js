import feature1 from '../assets/images/feature-1.svg';
import feature2 from '../assets/images/feature-2.svg';
import feature3 from '../assets/images/feature-3.svg';
import feature4 from '../assets/images/feature-4.svg';
import React from 'react';
import styled from 'styled-components';

import { Layout, Row, Col } from 'antd';

const { Content } = Layout;

const FeatureContainer = styled.div`        
  padding: 35px 150px;
  @media(max-width: 768px) {
    padding: 35px 35px;
  }
`;

const FeatureBlock = styled.div`
  display: flex;
  align-items: center;
  @media(max-width: 768px) {
    flex-direction: column;
    &:first-child {
      margin-bottom: 32px;
    }
  }
`;

const FeatureImg = styled.div`
  border:1px solid var(--whiteColor);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 40px;
  @media(max-width: 768px) {
    margin-bottom: 12px;    
  }
`

const FeatureTitle = styled.h3`
  font-family: 'GilroyMedium';
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 0;
  margin-left: 12px;
  color: var(--whiteColor);
  @media(max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;


const Features = () => {
  return (
    <>
      <Content className="feature">
        <FeatureContainer>
          <Row justify="center">
            <Col span={12} xl={4}>
              <FeatureBlock>
              <FeatureImg>
                <img src={feature1} alt="feature" />
              </FeatureImg>
              <FeatureTitle>The World’s Most<br/>
                Comprehensive Test</FeatureTitle>
              </FeatureBlock>
            </Col>
            <Col span={12} xl={4}>
              <FeatureBlock>
              <FeatureImg>
              <img src={feature2} alt="feature" />
              </FeatureImg>
              <FeatureTitle>Complimentary
                1-on-1<br/> Consultation </FeatureTitle>
              </FeatureBlock>
            </Col>
            <Col span={12} xl={4}>
              <FeatureBlock>
              <FeatureImg>
              <img src={feature3} alt="feature" />
              </FeatureImg>
              <FeatureTitle>Validated 99.9%<br/>
                Analytical Accuracy</FeatureTitle>
              </FeatureBlock>
            </Col>
            <Col span={12} xl={4}>
              <FeatureBlock>
              <FeatureImg>
              <img src={feature4} alt="feature" />
              </FeatureImg>
              <FeatureTitle>Private & Data <br/>Security Ensured</FeatureTitle>
              </FeatureBlock>
            </Col>
          </Row>
        </FeatureContainer>
      </Content>
    </>
  );
};

export default Features;

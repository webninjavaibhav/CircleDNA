import vitalx1 from '../assets/images/productVital1.svg'
import vitalx2 from '../assets/images/productVital2.svg'
import vitalx3 from '../assets/images/productVital3.svg'
import vitalx4 from '../assets/images/productVital4.svg'
import atomSmall from '../assets/images/atomeSmall.svg';
import React from 'react';
import styled from 'styled-components';

import { Layout, Row, Col, Divider, Typography } from 'antd';
import Button from "./Button";

const { Content } = Layout;

const { Text } = Typography;

const SectionTitle = styled.h4`
  font-family: 'GilroyMedium';
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  color: var(--blackShadeColor);
  text-align: center;
  margin-bottom: 20px;
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

const ProductCard = styled.div`
  background-color: var(--whiteColor);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.04);
  border-radius: 24px;
  padding: 32px 24px;
  position: relative;
  &.freeTrial {
    border: 1px solid var(--discountColor);
    @media(max-width: 768px) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;      
    }
    &:after {
      content: '30 DAY RISK-FREE TRIAL';
      position: absolute;
      top: -22px;
      width: 178px;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--discountColor);
      color: var(--whiteColor);
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      padding: 4px 12px 4px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      @media(max-width: 768px) {
        left: auto;
        width: 101%;
        right: -1px;
        transform: none;
      }
    }
  }
  .buttonSmall{
    @media(max-width: 768px) {
      font-size: 12px;
      padding: 15px 20px 15px;
    }
  }
  @media(max-width: 768px) {
    &:first-child{
      margin-bottom: 40px;
    }
    img {
      max-width: 100% ;  
    }
    padding: 20px 12px;
  }
  
`;

const ProductKitTitle = styled.h5`
  font-family: 'GilroyBold';
  font-weight: 800;
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 16px;
  color: var(--blackColor);
  @media(max-width: 768px)  {
    font-size: 18px;
    line-height: 22px;
  }
`;

const ProductKitData = styled.div`
  display: flex;
  align-items: center;
  @media(max-width: 768px) {
    flex-direction: column;
    align-items: inherit;
  }
  h2{
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 0;
    color: var(--primaryColor);
    @media(max-width: 768px) {
      font-size: 16px;
      line-height: 19px;
      display: initial;
    }
  }
  span{
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1px;
    color: var(--lightGrey_300);
    @media(max-width: 768px) {
      font-size: 10px;
      line-height: 12px;
      margin-left: 4px;
    }
  }
  .devider{
    border-left: 1.5px solid var(--lightGrey_100);
    margin: 0 32px;
    height: auto;
    align-self: stretch;
  }
`;

const ProductKitDescr = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin: 20px 0 38px;
  color: var(--lightGrey_300);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media(max-width: 768px) {
    -webkit-line-clamp: 5;  
  }
`;

const OfferPrice = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  flex-wrap: wrap;
  span {
    &:first-child {
      font-family: 'GilroyMedium';
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      margin-right: 8px;
      color: var(--green_300);
      @media(max-width: 768px) {
        order: 2;
        font-size: 15px;
        line-height: 19px;
      }
    }
    &:nth-child(2) {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: var(--lightGrey_300);
      @media(max-width: 768px) {
        order: 3;
        font-size: 12px;
        line-height: 14px;
      }
    }
    &:last-child {
      font-family: 'GilroyMedium';
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      margin-left: 15px;
      color: var(--offerPriceColor);
      @media(max-width: 768px) {
        order: 1;
        flex: 0 0 100%;
        font-size: 12px;
        line-height: 15px;
        margin-left: 0;
      }
    }
  }
`;

const AtomeOffer = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: var(--lightGrey_300);
  margin-bottom: 16px;
  @media(max-width: 768px) {
    font-size: 10px;
    line-height: 18px;
  }
`;

const LearnMore = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #0C2B65;
  text-align: center;
  margin-top: 25px;
  display: block;
  text-decoration: underline;
`

const PorductKit = () => {
  return (
    <>
      <Content className="productKit">
        <Row>
          <Col span={24}>
              <SectionTitle>Let your DNA Journey begin</SectionTitle>
              <SectionSubTitle>Buy 1 Kit save 10%, Buy 2-3 Kits save 15%, Buy 4+ Kits save 20%</SectionSubTitle>
          </Col>
        </Row>
        <Row gutter={{ xs: 15, md:15 }} justify="space-between" style={{marginTop:'66px'}} >
          <Col xxl={5} xl={6} span={12}>
            <ProductCard>
              <img src={vitalx1} alt="Vital x 1" />
              <ProductKitTitle>Vital x 1</ProductKitTitle>
              <ProductKitData>
                <div>
                  <h2>125</h2>
                  <span>REPORTS</span>
                </div>
                <Divider className="devider" type="vertical" />
                <div>
                  <h2>14</h2>
                  <span>CATEGORIES</span>
                </div>
              </ProductKitData>
              <ProductKitDescr>Customize a diet and fitness plan according to Vital’s 125 reports, just for you alone.</ProductKitDescr>
              <OfferPrice>
                <span>HKD 1,192</span>
                <Text delete>HKD1,490</Text>
                <span>SAVE 10%</span>
              </OfferPrice>
              <AtomeOffer>or 3 monthly instalments of <br/> HKD 397.33 with <img src={atomSmall} alt="atom offer" /></AtomeOffer>
              <Button className="buttonSmall" large={false} name="Add to Cart"/>
              <LearnMore>Learn more </LearnMore>
            </ProductCard>
          </Col>
          <Col xxl={5} xl={6} span={12}>
            <ProductCard>
              <img src={vitalx2} alt="Vital x 1" />
              <ProductKitTitle>Vital x 1</ProductKitTitle>
              <ProductKitData>
                <div>
                  <h2>125</h2>
                  <span>REPORTS</span>
                </div>
                <Divider className="devider" type="vertical" />
                <div>
                  <h2>14</h2>
                  <span>CATEGORIES</span>
                </div>
              </ProductKitData>
              <ProductKitDescr>Double happiness: buy 1 Vital share 1 with your gym buddy for personalised diet and fitness plan.</ProductKitDescr>
              <OfferPrice>
                <span>HKD 2,235</span>
                <Text delete>HKD 2,980</Text>
                <span>SAVE 15%</span>
              </OfferPrice>
              <AtomeOffer>or 3 monthly instalments of <br/> HKD 745 with <img src={atomSmall} alt="atom offer" /></AtomeOffer>
              <Button className="buttonSmall" large={false} name="Add to Cart"/>
              <LearnMore>Learn more </LearnMore>
            </ProductCard>
          </Col>
          <Col xxl={5} xl={6} span={12}>
            <ProductCard className="freeTrial">
              <img src={vitalx3} alt="Vital x 1" />
              <ProductKitTitle>Vital x 1</ProductKitTitle>
              <ProductKitData>
                <div>
                  <h2>500+</h2>
                  <span>REPORTS</span>
                </div>
                <Divider className="devider" type="vertical" />
                <div>
                  <h2>20</h2>
                  <span>CATEGORIES</span>
                </div>
              </ProductKitData>
              <ProductKitDescr>Treat yourself Premium with 500+ reports across 20 categories, covering your holistic health and beyond.</ProductKitDescr>
              <OfferPrice>
                <span>HKD 3,992</span>
                <Text delete>HKD 4,990</Text>
                <span>SAVE 10%</span>
              </OfferPrice>
              <AtomeOffer>or 3 monthly instalments of <br/> HKD 1,330.67 with <img src={atomSmall} alt="atom offer" /></AtomeOffer>
              <Button className="buttonSmall" large={false} name="Add to Cart"/>
              <LearnMore>Learn more </LearnMore>
            </ProductCard>
          </Col>
          <Col xxl={5} xl={6} span={12}>
            <ProductCard className="freeTrial">
              <img src={vitalx4} alt="Vital x 1" />
              <ProductKitTitle>Vital x 1</ProductKitTitle>
              <ProductKitData>
                <div>
                  <h2>500+</h2>
                  <span>REPORTS</span>
                </div>
                <Divider className="devider" type="vertical" />
                <div>
                  <h2>20</h2>
                  <span>CATEGORIES</span>
                </div>
              </ProductKitData>
              <ProductKitDescr>Double happiness: buy 1 Premium share 1 with your beloved for personalised diet and fitness plan.</ProductKitDescr>
              <OfferPrice>
                <span>HKD 7,485</span>
                <Text delete>HKD 9,980</Text>
                <span>SAVE 15%</span>
              </OfferPrice>
              <AtomeOffer>or 3 monthly instalments of <br/> HKD 2,495 with <img src={atomSmall} alt="atom offer" /></AtomeOffer>
              <Button className="buttonSmall" large={false} name="Add to Cart"/>
              <LearnMore>Learn more </LearnMore>
            </ProductCard>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default PorductKit;

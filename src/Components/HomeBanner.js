import React from 'react';
import Button from './Button';
import bannerImg from '../assets/images/bannerImg.png';
import atom from '../assets/images/atome.svg';
import star from '../assets/images/star.svg';
import { Layout, Row, Col } from 'antd';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaAngleRight } from 'react-icons/fa';

const { Content } = Layout;

const BannerTitle = styled.h1`
  font-family: 'GilroyMedium';
  font-weight: 800;
  font-size: 44px;
  line-height: 54px;
  margin-bottom: 12px;
  color: var(--blackColor);
  span {
    color: var(--brandColor);
  }
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 39px;
  }
`;

const BannerSubTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 40px;
  color: var(--primaryColor);
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 16px;
  }
`;

const RatingStar = styled.div`
  display: flex;
  align-items: center;
  span {
    img:not(:last-child) {
      margin-right: 4px;      
    }
    img{
      @media (max-width: 768px) {
        max-width: 19px;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    margin-left: 12px;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: var(--blackColor);
    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

const Shop = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  button:last-child {
    position: relative;
    margin-left: 24px;
    border-radius: 5px;
    width: 165px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
      content: 'BUY NOW, PAY LATER WITH';
      font-family: 'GilroyMedium';
      position: absolute;
      font-weight: bold;
      font-size: 10px;
      line-height: 12px;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 147px;
      height: 19px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--bgColor);
    }
  }
`;

const QuizTest = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-top: 24px;
  color: var(--blackColor);
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 20px;
    justify-content: center;
    margin-bottom: 35px;
  }
  a {
    color: var(--blackColor);
    text-decoration: underline;
  }
`;

const HomeBanner = () => {
  return (
    <>
      <Content className="banner">
        <div className="banner_container">
          <Row align="middle">
            <Col span={24} md={{ span: 24, offset: 1 }} xl={12} xxl={10}>
              <BannerTitle>
                DNA insights that help you understand your <span>health.</span>
              </BannerTitle>
              <BannerSubTitle>
                Our personalized DNA tests unlock a complete picture of your health risks, nutrition needs, ancestry, fitness and much more.
              </BannerSubTitle>
              <RatingStar>
                <span>
                  <img src={star} alt="CircleDNA health" />
                  <img src={star} alt="CircleDNA health" />
                  <img src={star} alt="CircleDNA health" />
                  <img src={star} alt="CircleDNA health" />
                  <img src={star} alt="CircleDNA health" />
                </span>
                <h3>Over 500+ 5-star Trustpilot reviews!</h3>
              </RatingStar>
              <Shop>
                <Button large name="Shop Now"/>
                <button>
                  <img src={atom} alt="atom" />
                </button>
              </Shop>
              <QuizTest>
                Or, &nbsp;<Link>take the quiz to find your test</Link> &nbsp;<FaAngleRight />
              </QuizTest>
            </Col>
            <Col span={24} md={24} xl={{ span : 8, offset: 4 }} >
              <img style={{ width: '100%' }} src={bannerImg} alt="CircleDNA health" />
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default HomeBanner;

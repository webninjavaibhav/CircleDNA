import React from 'react';
import Layout from '../Components/Layout';
import HomeBanner from '../Components/HomeBanner';
import Feature from '../Components/Features'
import PorductKit from '../Components/PorductKit';
import PressQuotes from "../Components/PressQuotes";
import ProvenInsights from "../Components/ProvenInsights";
import CircleApart from "../Components/CircleApart";
import '../assets/scss/main.scss';


export default () => {
  return (
    <Layout className="layout">
      <HomeBanner />
      <Feature />
      <PorductKit />
      <PressQuotes />
      <ProvenInsights />
      <CircleApart/>
    </Layout>
  );
};

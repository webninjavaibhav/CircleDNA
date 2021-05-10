import ExclusiveOffer from './ExclusiveOffer';
import logo from '../assets/images/logo.svg';
import cart from '../assets/images/cart.svg';
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'gatsby';
const { Header } = Layout;
const { SubMenu } = Menu;

const Navbar = () => {
  return (
    <>
      <ExclusiveOffer />
      <Header className="header">
        <div className="header_logo">
          <img src={logo} alt="CircleDNA" />
        </div>
        <Menu mode="horizontal" className="header_menu">
          <SubMenu key="1" title="Shop">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </SubMenu>
          <SubMenu key="2" title="About Us">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="3">
            <Link>Reports</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link>Stories</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link>
              CircleMagazine<sup>New</sup>
            </Link>
          </Menu.Item>
        </Menu>
        <Menu mode="horizontal" className="header_cart">
          <Menu.Item key="4">
            <Link>FAQ</Link>
          </Menu.Item>
          <SubMenu key="2" title="">
            <img src={cart} alt="cart" />
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="5">
            <Link>
              <img src={cart} alt="cart" />
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default Navbar;

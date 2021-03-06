import React, { Component } from 'react';
import Routes from './Routes';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { Sider, Content } = Layout;



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class App extends Component {
  render() {
    return (
      <div>
        <Layout style={{ height: '100vh' }}>
          <Sider style={{ overflowY: 'scroll' }}>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100vh' }}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span><Icon type="smile" /><span>Rick And Morty. </span></span>}>
                <MenuItemGroup key="g1" title="Navigation">
                  <Menu.Item key="1"><Link to='/'>Welcome Page</Link></Menu.Item>
                  <Menu.Item key="2"><Link to='/characters'>Characters</Link></Menu.Item>
                  <Menu.Item key="3"><Link to='/login'>Login</Link></Menu.Item>
                  <Menu.Item key="4"><Link to='/signup'>Signup</Link></Menu.Item>
                  <Menu.Item key="5"><Link to='/profile'>Profile</Link></Menu.Item>
                </MenuItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content><Routes /></Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App

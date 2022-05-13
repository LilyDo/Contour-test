import React, { useState } from 'react';
import { Menu } from 'antd';
import { SiderContainer } from './RootLayout.styles';

const AppSider = () => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  };

  return (
    <SiderContainer
      trigger={null}
      collapsible
      collapsed={collapse}
      onClick={toggle}
    >
      <Menu mode='inline' theme='dark'>
        <Menu.Item key='home' title={'Home'}>
          <a href='/'>Home</a>
        </Menu.Item>
      </Menu>
    </SiderContainer>
  );
};

export default AppSider;

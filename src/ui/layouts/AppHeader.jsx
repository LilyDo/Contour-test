import React from 'react';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { HeaderContainer } from './RootLayout.styles';

const AppHeader = () => {
  return (
    <HeaderContainer>
      <a href={'/'}>
        <HomeOutlined />
      </a>
      <a href={'/'}>
        <UserOutlined />
      </a>
    </HeaderContainer>
  );
};

export default AppHeader;

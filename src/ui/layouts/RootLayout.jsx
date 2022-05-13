import React from 'react';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import {
  RootLayoutContainer,
  SiderContentContainer,
  PageContent,
} from './RootLayout.styles';

const RootLayout = ({ children }) => {
  return (
    <RootLayoutContainer>
      <AppHeader />
      <SiderContentContainer>
        <AppSider />
        <PageContent>{children}</PageContent>
      </SiderContentContainer>
    </RootLayoutContainer>
  );
};

export default RootLayout;

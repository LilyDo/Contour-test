import styled from 'styled-components';
import { Layout } from 'antd';
const { Content, Header, Sider } = Layout;

export const RootLayoutContainer = styled(Layout)`
  margin: auto;
  max-width: 1200px;
  height: 100vh;
`;

export const SiderContentContainer = styled(Layout)`
  overflow: hidden;
`;

export const ContentContainer = styled(Layout)`
  height: 100vh;
  overflow: scroll;
  position: relative;
  width: 100%;
`;

export const PageContent = styled(Content)`
  margin: 1rem;
  overflow-y: scroll;
`;

export const HeaderContainer = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SiderContainer = styled(Sider)`
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

import React from 'react';
import { Route } from 'react-router-dom';
import { mount } from 'enzyme';
import App from './App';
import { ROUTES } from './lib/routing/GlobalRoutes';

describe('App', () => {
  // wrapper app component with Router component
  const WrappedApp = mount(<App />);

  it('should render correct number of routes', () => {
    const route = WrappedApp.find(App).find(Route);
    expect(route.length).toEqual(ROUTES.length);
  });

  it('should map to correct <Route /> component prop for path', () => {
    const route = WrappedApp.find(App).find(Route).at(0);
    expect(route.prop('path')).toEqual(ROUTES[0].path);
  });

  it('should map to correct <Route /> component prop for exact', () => {
    const route = WrappedApp.find(App).find(Route).at(0);
    expect(route.prop('exact')).toEqual(ROUTES[0].exact);
  });

  it('should map to correct <Route /> component prop for component', () => {
    const route = WrappedApp.find(App).find(Route).at(0);
    expect(route.prop('component')).toEqual(ROUTES[0].component);
  });
});

import React from 'react';
import { Route } from 'react-router-dom';
import { mount } from 'enzyme';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ROUTES } from '@routing/GlobalRoutes/GlobalRoutes';

describe('App', () => {
  beforeEach(() => {
    // wrapper app component with Router component
    const WrappedApp = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

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
      expect(route.prop('render')).toEqual(ROUTES[0].component);
    });
  });
});

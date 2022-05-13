import { ROUTES } from './GlobalRoutes';

describe('Test Global Routes', () => {
  it('should render all mapped components and not throw error', () => {
    expect(() => {
      ROUTES.map((route) => route.component());
    }).not.toThrowError();
  });
});

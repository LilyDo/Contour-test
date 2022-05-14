import React from 'react';
import { mount } from 'enzyme';
import ErrorFallback from './ErrorFallBack';
import { Button } from 'antd';

describe('ErrorFallBack', () => {
  let wrapper;
  let resetErrorBoundaryHandler;

  let defaultProps;

  const MOCK_ERROR = new Error('mock error');

  function renderErrorFallBack(args) {
    resetErrorBoundaryHandler = jest.fn();

    defaultProps = {
      error: MOCK_ERROR,
      resetErrorBoundary: resetErrorBoundaryHandler,
    };
    const props = { ...defaultProps, ...args };
    return mount(<ErrorFallback {...props} />);
  }

  beforeEach(() => {
    wrapper = renderErrorFallBack(null);
  });

  it('should render error message', () => {
    expect(wrapper.find('pre').text()).toBe(MOCK_ERROR.message);
  });

  // ====================
  // EVENT HANDLER
  // ====================
  it('should invoke reset error handler', () => {
    wrapper.find(Button).simulate('click');
    expect(resetErrorBoundaryHandler).toBeCalled();
  });
});

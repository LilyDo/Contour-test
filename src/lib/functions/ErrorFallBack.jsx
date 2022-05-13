import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const ErrorFallBackContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <ErrorFallBackContainer>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </ErrorFallBackContainer>
  );
};

export default ErrorFallback;

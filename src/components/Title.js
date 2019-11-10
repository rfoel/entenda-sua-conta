import React from 'react';
import styled from '@xstyled/styled-components';

const Title = styled.box`
  color: white;
  font-size: 6;
  font-weight: 700;
`;

export default ({ children, ...props }) => (
  <Title forwardedAs={'h1'} {...props}>
    {children}
  </Title>
);

import React from 'react';
import styled from '@xstyled/styled-components';

const Input = styled.box`
  color: white;
  background-color: transparent;
  border: 1px solid;
  border-color: white;
  outline: none;
  margin-top: 2;
  font-size: 5;
  padding: 3 2;
  width: 100%;
  font-size: 5;
  :focus {
    border-color: lemon;
  }
`;

const Label = styled.label`
  color: white;
  font-size: 5;
  :focus-within {
    color: lemon;
  }
`;

export default props => {
  const { label } = props;
  return (
    <Label>
      {label}
      <Input forwardedAs="input" {...props} />
    </Label>
  );
};

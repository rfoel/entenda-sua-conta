import React from "react";
import styled from "@xstyled/styled-components";

const Button = styled.box`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: lemon;
  border: 2px solid;
  border-color: lemon;
  font-size: 5;
  padding: 3 2;
  outline: none;
  width: 100%;
  cursor: pointer;
`;

export default ({ children, loading, ...props }) => (
  <Button forwardedAs="button" {...props}>
    {children}
  </Button>
);

import React from "react";
import styled from "@xstyled/styled-components";

const Text = styled.box`
  color: white;
  font-size: 4;
`;

export default ({ children, ...props }) => (
  <Text forwardedAs={"p"} {...props}>
    {children}
  </Text>
);

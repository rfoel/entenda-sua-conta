import React from "react";
import styled from "@xstyled/styled-components";

const Dots = styled.box`
  flex: 1;
  margin: 1 2;
  border-bottom: 2px dotted #ddd;
`;

export default props => <Dots {...props} />;

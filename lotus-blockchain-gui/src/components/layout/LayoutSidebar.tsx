import { Box, Container, Drawer, Toolbar } from '@material-ui/core';
import { Flex } from '@lotus/core';
import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import DashboardTitle from '../dashboard/DashboardTitle';

const StyledSideBarContainer = styled(Box)`
  min-width: 180px;
  position: relative;

`;

// wallet width drawer
const StyledSidebar = styled(Drawer)`
  > div {
    padding-top: 50px;
    left: 200px;
    width: 180px;
    background-color: tranlotusnt;
  }
`;

const StyledBody = styled(Box)`
  min-width: 0;
`;

const StyledContainer = styled(Container)`
  padding-top: ${({ theme }) => `${theme.spacing(3)}px`};
  padding-bottom: ${({ theme }) => `${theme.spacing(3)}px`};
`;

const StyledInnerContainer = styled(Box)`
  box-shadow: inset 6px 0 8px -8px rgba(0,0,0,0.2);
`;

type Props = {
  children?: ReactElement<any>;
  sidebar: ReactNode,
  title?: ReactNode;
};

export default function LayoutSidebar(props: Props) {
  const { children, title, sidebar } = props;

  return (
    <>
      <DashboardTitle>{title}</DashboardTitle>
      <Flex flexGrow={1}>
        <StyledSideBarContainer>
          <StyledSidebar
            variant="permanent"
            open
          >
            <Toolbar />
            {sidebar}
          </StyledSidebar>
        </StyledSideBarContainer>
        <StyledBody flexGrow={1}>
          <StyledInnerContainer>
            <StyledContainer maxWidth="lg">
              <Flex flexDirection="column" gap={2}>
                {children}
              </Flex>
            </StyledContainer>
          </StyledInnerContainer>
        </StyledBody>
      </Flex>
    </>
  );
}

LayoutSidebar.defaultProps = {
  children: undefined,
};

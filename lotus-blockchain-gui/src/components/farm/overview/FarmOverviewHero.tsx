import { Trans } from '@lingui/macro';
import { Button, Card, CardContent, Grid, SvgIcon, SvgIconProps, Typography } from '@material-ui/core';
import { Flex } from '@lotus/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useOpenDialog from '../../../hooks/useOpenDialog';
import PlotAddDirectoryDialog from '../../plot/PlotAddDirectoryDialog';
import { ReactComponent as FarmIconRaw } from './images/data-center.svg';


const StyledImage = styled('img')`
  max-width: 7rem;
`;

const StyledFarmIcon = styled(FarmIconRaw)`
  path {
    stroke: 'white';
  }
`;

 const FarmIcon = (props: SvgIconProps) =>  <SvgIcon 	component={StyledFarmIcon} style={{ fontSize: 120 }} viewBox="12 0 35 70" {...props} />;

export default function FarmOverviewHero() {
  const history = useHistory();
  const openDialog = useOpenDialog();

  function handleAddPlot() {
    history.push('/dashboard/plot/add');
  }

  function handleAddPlotDirectory() {
    openDialog((
      <PlotAddDirectoryDialog />
    ));
  }

  const StyledContent = styled(CardContent)`
    padding: ${({ theme }) => `${theme.spacing(5)}px ${theme.spacing(4)}px !important`};
    background: tranlotusnt;
    `;

  const StyledCard = styled(Card)`
    background: tranlotusnt;
    box-shadow: none;
    `;

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid  md={6}  item >
        <StyledCard>
          <StyledContent>
            <Flex flexDirection="column" gap={3}>

            <Grid container direction="row"
              justify="center"
              alignItems="center">
              <Grid  md={4}  item >
                  <FarmIcon />
                </Grid >
              </Grid >
              <Typography variant="body1">
                <Trans>
                  Build your own lotus farm from lotus plots and support transactions in both networks
                </Trans>
              </Typography>
              <Button
                onClick={handleAddPlotDirectory} 
                variant="contained"
                color="primary"
              >
                <Trans>Add Plot Directory</Trans>
              </Button>

            </Flex>
          </StyledContent>
        </StyledCard>
      </Grid>
    </Grid>
  );
}

import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Chart from '../layout/Chart';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles({
  card: {
    width: '90vw'
  }
});

const ProgressCard = ({ exerciseData, chartData }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    sets: 0,
    repetitions: 0,
    weight: 0
  });

  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  useEffect(() => {
    if (exerciseData.progress[0]) {
      setValues({
        ...values,
        sets: exerciseData.progress[0].sets,
        repetitions: exerciseData.progress[0].repetitions,
        weight: exerciseData.progress[0].weight
      });
      /*const data = createChartData(exerciseData.progress);
      setChartData(data);*/
    }
  }, [exerciseData.progress]);

  return (
    <Card className={classes.card}>
      <Fade in={true}>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item xs={12} sm={12}>
            <CardContent className={classes.content}>
              <Typography variant='subtitle1'>
                {exerciseData.exercise.name}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Tabs
              value={tabIndex}
              onChange={handleChange}
              indicatorColor='primary'
              textColor='primary'
              centered
            >
              <Tab label='Weight' {...a11yProps(0)} />
              <Tab label='Reps' />
              <Tab label='Sets' />
              <Tab label='Workload' />
            </Tabs>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TabPanel value={tabIndex} index={0}>
              <Chart xLabel='weight' chartData={chartData} />
            </TabPanel>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TabPanel value={tabIndex} index={1}>
              <Chart xLabel='reps' chartData={chartData} />
            </TabPanel>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TabPanel value={tabIndex} index={2}>
              <Chart xLabel='sets' chartData={chartData} />
            </TabPanel>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TabPanel value={tabIndex} index={3}>
              <Chart xLabel='workload' chartData={chartData} />
            </TabPanel>
          </Grid>
        </Grid>
      </Fade>
    </Card>
  );
};

export default ProgressCard;

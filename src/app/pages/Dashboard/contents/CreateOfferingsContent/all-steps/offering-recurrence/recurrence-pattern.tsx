import React, { useState } from 'react';
import {
  Box,
  Collapse,
  Fade,
  FormControl,
  FormLabel,
  Grow,
  RadioGroup,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import StyledRadio from '../../../../../../components/styled-radio';
import CheckboxesHorizontalFormik from '../../../../../../components/checkboxes-horizontal-formik';
import { useStyles } from './styles';
import { FormikProps } from 'formik';
import DailyRecurrencePattern from './daily-recurrence-pattern';
import WeeklyRecurrencePattern from './weekly-recurrence-pattern';
import MonthlyRecurrencePattern from './monthly-recurrence-pattern';

type Props = {
  formikProps: FormikProps<any>;
};

const RecurrencePattern: React.FC<Props> = ({ formikProps }) => {
  const classes = useStyles();
  const smallScreen = useMediaQuery('(max-width:720px)');

  const [frequency, setFrequency] = React.useState('daily');

  const handleChange = event => {
    setFrequency(event.target.value);
  };

  return (
    <div>
      <Typography className={'mb-4'} variant={'h5'}>
        Recurrence pattern
      </Typography>
      <div className={classes.recurrencePatternGrid}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="frequency"
            name="frequency"
            value={frequency}
            onChange={handleChange}
          >
            <FormControlLabel
              value="daily"
              control={<StyledRadio />}
              label="Daily"
            />
            <FormControlLabel
              value="weekly"
              control={<StyledRadio />}
              label="Weekly"
            />
            <FormControlLabel
              value="monthly"
              control={<StyledRadio />}
              label="Monthly"
            />
          </RadioGroup>
        </FormControl>
        <div>
          {
            <Collapse in={frequency === 'daily'}>
              <DailyRecurrencePattern />
            </Collapse>
          }
          {
            <Collapse in={frequency === 'weekly'}>
              <WeeklyRecurrencePattern />
            </Collapse>
          }
          {
            <Collapse in={frequency === 'monthly'}>
              <MonthlyRecurrencePattern />
            </Collapse>
          }
        </div>
      </div>
    </div>
  );
};

export default RecurrencePattern;

const frequencyValues = (frequency: string) => {
  switch (frequency) {
    case 'daily':
      return <DailyRecurrencePattern />;
    case 'weekly':
      return <WeeklyRecurrencePattern />;
    case 'monthly':
      return <MonthlyRecurrencePattern />;
    default:
      return null;
  }
};

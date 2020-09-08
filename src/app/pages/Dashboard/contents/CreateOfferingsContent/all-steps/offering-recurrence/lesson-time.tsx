import React from 'react';
import {
  Box,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  TextField,
} from '@material-ui/core';
import { useStyles } from './styles';
import { FormikProps } from 'formik';
import { OfferingRecurrenceModel } from './schema/offering-recurrence.value';

type Props = {
  formikProps: FormikProps<OfferingRecurrenceModel>;
};

const LessonTime: React.FC<Props> = ({ formikProps }) => {
  const classes = useStyles();
  const smallScreen = useMediaQuery('(max-width:720px)');
  const [duration, setDuration] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDuration(event.target.value as string);
  };

  return (
    <div className={'mb-4'}>
      <Typography className={'mb-4'} variant={'h5'}>
        Lesson time
      </Typography>
      <div className={classes.lessonTimeGrid}>
        <div>Start:</div>
        <div>
          <TextField
            id="lessonTime.start"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            defaultValue={formikProps.values.lessonTime.start}
            type="time"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </div>
        <div>End:</div>
        <div>
          <TextField
            id="lessonTime.end"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            defaultValue={formikProps.values.lessonTime.end}
            type="time"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </div>
        <div>Duration:</div>
        <div>
          <Select
            id="lessonTime.duration"
            name={'lessonTime.duration'}
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            value={formikProps.values.lessonTime.duration}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              <em>hour(s)</em>
            </MenuItem>
            <MenuItem value={1}>1 hour</MenuItem>
            <MenuItem value={2}>2 hours</MenuItem>
            <MenuItem value={3}>3 hours</MenuItem>
            <MenuItem value={4}>4 hours</MenuItem>
            <MenuItem value={5}>5 hours</MenuItem>
            <MenuItem value={6}>6 hours</MenuItem>
            <MenuItem value={7}>7 hours</MenuItem>
            <MenuItem value={8}>8 hours</MenuItem>
            <MenuItem value={9}>9 hours</MenuItem>
            <MenuItem value={10}>10 hours</MenuItem>
            <MenuItem value={11}>11 hours</MenuItem>
            <MenuItem value={12}>12 hours</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default LessonTime;

import React from 'react';
import {
  Box,
  Collapse,
  FormControl,
  RadioGroup,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { useStyles } from './styles';
import DatePickerFormik from '../../../../../../components/date-picker-formik';
import { Field, FormikProps } from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import StyledRadio from '../../../../../../components/styled-radio';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from '@material-ui/pickers';
import { OfferingRecurrenceModel } from './schema/offering-recurrence.value';
import InputFormik from '../../../../../../components/input-formik';

type Props = {
  formikProps: FormikProps<OfferingRecurrenceModel>;
};

const RangeOfRecurrence: React.FC<Props> = ({ formikProps }) => {
  const classes = useStyles();
  const smallScreen = useMediaQuery('(max-width:720px)');
  const [ending, setEnding] = React.useState('endBy');

  const handleChange = event => {
    setEnding(event.target.value);
  };

  return (
    <div>
      <Typography className={'mb-4'} variant={'h5'}>
        Range of recurrence
      </Typography>
      <Box pb={16}>
        <Box mb={4}>
          <DatePicker
            id={'rangeOfRecurrence.start'}
            variant="inline"
            value={formikProps.values.rangeOfRecurrence.start}
            onChange={dateProps => {
              formikProps.setFieldValue('rangeOfRecurrence.start', dateProps);
            }}
          />
        </Box>
        <Box mb={4} mr={2} display={'flex'} flexDirection={'column'}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="frequency"
              name="frequency"
              value={ending}
              onChange={handleChange}
            >
              <FormControlLabel
                value="endBy"
                control={<StyledRadio />}
                label="End by:"
              />
              <FormControlLabel
                value="endAfter"
                control={<StyledRadio />}
                label="End after"
              />
              <FormControlLabel
                value="noEndDate"
                control={<StyledRadio />}
                label="No end date"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box mb={4}>
          <Collapse in={ending === 'endBy'}>
            <DatePicker
              id={'rangeOfRecurrence.endBy'}
              variant="inline"
              value={formikProps.values.rangeOfRecurrence.endBy}
              onChange={dateProps => {
                formikProps.setFieldValue('rangeOfRecurrence.endBy', dateProps);
              }}
            />
          </Collapse>
          <Collapse in={ending === 'endAfter'}>
            <Box>
              <label htmlFor={'rangeOfRecurrence.endAfter'}>occurrences</label>
              <input
                type="number"
                id={'rangeOfRecurrence.endAfter'}
                name={'rangeOfRecurrence.endAfter'}
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                style={{ width: '10rem' }}
              />
            </Box>
          </Collapse>
        </Box>
      </Box>
    </div>
  );
};

export default RangeOfRecurrence;

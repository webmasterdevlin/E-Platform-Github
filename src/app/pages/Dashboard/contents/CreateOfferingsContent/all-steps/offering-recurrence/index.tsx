import React, { useState } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import {
  Box,
  Divider,
  MenuItem,
  Paper,
  Select,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import StyledRadio from '../../../../../../components/styled-radio';
import CheckboxesVerticalFormik from '../../../../../../components/checkboxes-vertical-formik';
import CheckboxesHorizontalFormik from '../../../../../../components/checkboxes-horizontal-formik';
import LessonTime from './lesson-time';
import { useStyles } from './styles';
import RangeOfRecurrence from './range-of-recurrence';
import Buttons from './buttons';
import RecurrencePattern from './recurrence-pattern';
import { offeringRecurrenceYupObject } from './schema/offering-recurrence.validation';
import {
  OfferingRecurrenceModel,
  offeringRecurrenceValue,
} from './schema/offering-recurrence.value';
import YupFormikValidationViewer from '../../../../../../components/yup-formik-validation-viewer';

type Props = {
  formikProps: FormikProps<any>;
};
const OfferingRecurrence: React.FC<any> = () => {
  const classes = useStyles();
  const smallScreen = useMediaQuery('(max-width:720px)');

  return (
    <Formik
      initialValues={offeringRecurrenceValue}
      validationSchema={offeringRecurrenceYupObject}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formikProps: FormikProps<OfferingRecurrenceModel>) => (
        <Form>
          <Paper>
            <Box p={4}>
              <Typography className={'mb-4'} variant={'h4'}>
                Offering Recurrence
              </Typography>
              <Divider className={'mb-4'} />
              <Box className={'d-flex flex-column'}>
                <LessonTime formikProps={formikProps} />
                <RecurrencePattern formikProps={formikProps} />
                <RangeOfRecurrence formikProps={formikProps} />
                <Buttons />
                <YupFormikValidationViewer formikProps={formikProps} />
              </Box>
            </Box>
          </Paper>
        </Form>
      )}
    </Formik>
  );
};

export default OfferingRecurrence;

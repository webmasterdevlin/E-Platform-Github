import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import DashboardTitleBar from '../../dashboard-title-bar';
import ColorlibStepIcon from './all-steps/color-lib-icon';
import GetAllStepFields from './all-steps/getAllStepFields';
import { createOfferingsValue } from './all-steps/schema/create-offerings.value';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {
  StepContent,
  StepLabel,
  Stepper,
  useMediaQuery,
  Step,
  Snackbar,
  Typography,
} from '@material-ui/core';

const Alert = (props: AlertProps): JSX.Element => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

export default function CreateOfferingsContent() {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = getSteps();

  const isMobileSize = useMediaQuery('(max-width:600px)');

  const handleNext = () => {
    console.log('handleNext');
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') return;

    setOpen(false);
  };

  /*Will block next and submit buttons in the steps.*/
  const validate = values => {
    const errors: any = {};
    Object.keys(values).map(v => {
      if (!values[`${v}`]) {
        errors[`${v}`] = 'Required';
      }
    });
    return errors;
  };

  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'Create Offerings'} />
      <Formik
        enableReinitialize={true}
        initialValues={createOfferingsValue}
        // validationSchema={}
        // validate={validate}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          // TODO: if lessonMode is group, delete all fields for 1-on-1
          // TODO: if lessonMode is 1-on-1, delete all fields for group
          // or create 2 initial values for formik.
          // 1 for group and 1 of 1-on-1. Then toggle between the two
          // Why we have this problem? Because of 1 Form with 2 options for creating an object but only one must be sent to the API.
          setIsSubmitted(!isSubmitted);
          setOpen(true);
        }}
      >
        {formikProps => (
          <Form>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                  <StepContent>
                    <div
                      className={`container ${isMobileSize ? '' : 'm-5 p-5'}`}
                    >
                      <GetAllStepFields
                        formikProps={formikProps}
                        step={index}
                        steps={steps}
                        isSubmitted={isSubmitted}
                        activeStep={activeStep}
                        handleBack={handleBack}
                        handleNext={handleNext}
                      />
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>

            <Snackbar
              open={open}
              autoHideDuration={10000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity="info">
                <Typography variant={'h3'}>
                  Course offer will become active after a quick review.
                </Typography>
              </Alert>
            </Snackbar>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function getSteps(): Array<string> {
  return [
    'Step One 😊',
    'Step Two 😄',
    'Step Three 🙂',
    'Step Four 😁',
    'Step Five 🥰',
    'Done 😍',
  ];
}

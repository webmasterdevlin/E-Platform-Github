import React from 'react';
import StepFiveFieldsIndex from './StepFiveFields';
import StepFourFields from './StepFourFields';
import StepThreeFields from './StepThreeFields';
import StepTwoFields from './StepTwoFields';
import StepOneFields from './StepOneFields';
import { FormikProps } from 'formik';
import { OfferingModel } from './schema/create-offerings.value';
import StepBackNextButtons from './step-back-next-buttons';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Paper, Typography } from '@material-ui/core';
import OfferingRecurrence from './offering-recurrence';

type Props = {
  step: number;
  steps: Array<string>;
  activeStep: number;
  isSubmitted: boolean;
  handleBack: () => void;
  handleNext: () => void;
  formikProps: FormikProps<OfferingModel>;
};

const GetAllStepFields: React.FC<Props> = ({
  step,
  steps,
  activeStep,
  isSubmitted,
  handleBack,
  handleNext,
  formikProps,
}) => {
  const classes = useStyles();
  const {
    offering: offeringError,
    title: titleError,
    description: descriptionError,
    courseLocations: courseLocationsError,
    lessonMode: lessonModeError,
  } = formikProps.errors;
  const {
    offering: offeringValue,
    title: titleValue,
    description: descriptionValue,
    courseLocations: courseLocationsValues,
    lessonMode: lessonModeValue,
  } = formikProps.values;

  switch (step) {
    case 0:
      return (
        <>
          <OfferingRecurrence formikProps={formikProps} />
          {/*<StepOneFields formikProps={formikProps} />*/}
          {/*<StepBackNextButtons*/}
          {/*  classes={classes}*/}
          {/*  activeStep={activeStep}*/}
          {/*  steps={steps}*/}
          {/*  handleBack={handleBack}*/}
          {/*  handleNext={handleNext}*/}
          {/*  // disabled={!offeringValue}*/}
          {/*/>*/}
        </>
      );
    case 1:
      return (
        <>
          <StepTwoFields formikProps={formikProps} />
          <StepBackNextButtons
            classes={classes}
            activeStep={activeStep}
            steps={steps}
            handleBack={handleBack}
            handleNext={handleNext}
            // disabled={
            //   !titleValue ||
            //   !descriptionValue ||
            //   titleError === 'Title must be at least 2 characters' ||
            //   descriptionError === 'Description must be at least 12 characters'
            // }
          />
        </>
      );
    case 2:
      return (
        <>
          <StepThreeFields formikProps={formikProps} />
          <StepBackNextButtons
            classes={classes}
            activeStep={activeStep}
            steps={steps}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        </>
      );
    case 3:
      return (
        <>
          <StepFourFields formikProps={formikProps} />
          <StepBackNextButtons
            classes={classes}
            activeStep={activeStep}
            steps={steps}
            handleBack={handleBack}
            handleNext={handleNext}
            // disabled={
            //   courseLocationsError == 'Required' ||
            //   !courseLocationsValues.length
            // }
          />
        </>
      );
    case 4:
      return (
        <>
          <StepFiveFieldsIndex formikProps={formikProps} />
          <StepBackNextButtons
            classes={classes}
            activeStep={activeStep}
            steps={steps}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        </>
      );
    case 5:
      return (
        <>
          <h2 className={'mb-5'}>Nicely done!</h2>
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>
              All steps completed - Now click the button to publish your latest
              ad/offering/topic 🚩
            </Typography>
            <h4>ERRORS:: {JSON.stringify(formikProps.errors, null, 2)}</h4>
            <h4>Is Valid:: {formikProps.isValid.toString()}</h4>
            <Button
              disabled={isSubmitted}
              onClick={handleBack}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              type={'submit'}
              variant="contained"
              color="primary"
              className={classes.button}
              // disabled={!formikProps.isValid || isSubmitted}
            >
              Send now
            </Button>
          </Paper>
        </>
      );

    default:
      return <h2>Unknown Step</h2>;
  }
};

export default GetAllStepFields;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }),
);

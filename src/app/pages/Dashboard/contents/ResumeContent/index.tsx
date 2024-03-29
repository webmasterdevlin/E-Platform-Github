import React, { useState } from 'react';
import DashboardTitleBar from '../../dashboard-title-bar';
import GetAllStepForms from './all-steps/getAllStepForms';
import {
  Backdrop,
  Button,
  CircularProgress,
  Step,
  StepButton,
  Stepper,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { useStyles } from './mui.style';

const getStepsTitles = (): Array<string> => [
  'Personal details',
  'Experience',
  'Education',
  'Licenses & Certifications',
  'Skills',
  'Personal summary',
];

function ResumeContent() {
  const arrayOfOptionalSteps = [];
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(new Set<number>());
  const [skipped, setSkipped] = useState(new Set<number>());
  const [open, setOpen] = useState(false);
  const isMobileSize = useMediaQuery('(max-width:600px)');
  const steps: Array<string> = getStepsTitles();

  const totalSteps = (): number => getStepsTitles().length;

  const isOneOfTheOptionals = (step: number): boolean => {
    return arrayOfOptionalSteps.includes(step);
  };

  const handleSkip = (): void => {
    if (!isOneOfTheOptionals(activeStep)) {
      /* You probably want to guard against something like this
         it should never occur unless someone's actively trying to break something. */
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const skippedSteps = (): number => skipped.size;

  const completedSteps = (): number => completed.size;

  const allStepsCompleted = (): boolean =>
    completedSteps() === totalSteps() - skippedSteps();

  const isLastStep = (): boolean => activeStep === totalSteps() - 1;

  const handleNext = (): void => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? /* It's the last step, but not all steps have been completed
            find the first step that has been completed*/
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = (): void => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const isStepSkipped = (step: number): boolean => skipped.has(step);

  const isStepComplete = (step: number): boolean => completed.has(step);

  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'Résumé'} />

      <div className="row d-flex justify-content-center">
        <div className="col-lg-12">
          {/* Resume */}
          <div className={classes.root}>
            <Stepper alternativeLabel nonLinear activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const buttonProps: { optional?: React.ReactNode } = {};

                if (isOneOfTheOptionals(index))
                  buttonProps.optional = (
                    <Typography variant={'caption'}>(Optional)</Typography>
                  );

                if (isStepSkipped(index)) stepProps.completed = false;

                return (
                  <Step key={label} {...stepProps}>
                    <StepButton
                      onClick={handleStep(index)}
                      completed={isStepComplete(index)}
                      {...buttonProps}
                    >
                      {label}
                    </StepButton>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {allStepsCompleted() ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed - you&apos;re almost finished
                  </Typography>
                  <Button
                    onClick={handleToggle}
                    type={'submit'}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Publish Résumé
                  </Button>
                </div>
              ) : (
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-9">
                    <div
                      className={`container ${isMobileSize ? '' : 'm-5 p-5'}`}
                    >
                      <div className="col-md-9 mb-5">
                        <div className="dashboard-list-box margin-top-0">
                          {<GetAllStepForms step={activeStep} />}
                        </div>
                      </div>
                    </div>
                    <>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        Next
                      </Button>
                      {isOneOfTheOptionals(activeStep) &&
                        !completed.has(activeStep) && (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSkip}
                            className={classes.button}
                          >
                            Skip
                          </Button>
                        )}
                      {activeStep !== steps.length &&
                        (completed.has(activeStep) ? (
                          <Typography
                            variant="caption"
                            className={classes.completed}
                          >
                            Step {activeStep + 1} already completed
                          </Typography>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleComplete}
                          >
                            {completedSteps() === totalSteps() - 1
                              ? 'Finish'
                              : 'Complete Step'}
                          </Button>
                        ))}
                    </>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default ResumeContent;

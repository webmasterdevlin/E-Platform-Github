import React from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  classes: any;
  activeStep: number;
  steps: Array<string>;
  handleBack: () => void;
  handleNext: () => void;
  disabled?: boolean;
};
const StepBackNextButtons: React.FC<Props> = ({
  classes,
  activeStep,
  steps,
  handleBack,
  handleNext,
  disabled,
}) => (
  <div>
    <div className={classes.actionsContainer}>
      <Button
        disabled={activeStep === 0}
        onClick={handleBack}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Back
      </Button>
      <Button
        disabled={disabled}
        variant="contained"
        color="primary"
        onClick={handleNext}
        className={classes.button}
      >
        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
      </Button>
    </div>
  </div>
);

export default StepBackNextButtons;

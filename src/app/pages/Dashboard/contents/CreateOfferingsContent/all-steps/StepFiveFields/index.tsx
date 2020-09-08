import React, { useEffect } from 'react';
import { FormikProps } from 'formik';
import LessonStructure from './lesson-structure';
import OneOnOneLessonMode from './one-on-one-lesson-mode';
import GroupLessonMode from './group-lesson-mode';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from '@material-ui/core';
import YupFormikValidationViewer from '../../../../../../components/yup-formik-validation-viewer';

type Props = {
  formikProps: FormikProps<any>;
};
const StepFiveFieldsIndex: React.FC<Props> = ({ formikProps }) => {
  const classes = useStyles();
  useEffect(() => {}, [formikProps.values.lessonMode]);
  return (
    <div className={'mb-5'}>
      <YupFormikValidationViewer formikProps={formikProps} />
      <h2 className={'mb-5'}>
        Class/Course's structure, availability, and pricing model
      </h2>
      <Paper elevation={1}>
        <LessonStructure formikProps={formikProps} />
      </Paper>
      <Accordion
        expanded={formikProps.values.lessonMode.includes('1-on-1')}
        disabled={!formikProps.values.lessonMode.includes('1-on-1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            One-on-one Lesson/Class 🧍
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={'w-100'}>
            <OneOnOneLessonMode formikProps={formikProps} />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={formikProps.values.lessonMode.includes('group')}
        disabled={!formikProps.values.lessonMode.includes('group')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Group Lesson/Class 🧑‍🤝‍🧑
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={'w-100'}>
            <GroupLessonMode formikProps={formikProps} />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default StepFiveFieldsIndex;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

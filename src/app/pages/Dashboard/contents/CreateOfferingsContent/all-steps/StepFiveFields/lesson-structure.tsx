import React, { useState } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Field, FormikProps } from 'formik';
import PlainErrorMessage from '../../../../../../components/plain-error-message';
import DateTimePickerFormik from '../../../../../../components/date-time-picker-formik';
import { RadioGroup, TextField } from '@material-ui/core';
import StyledRadio from '../../../../../../components/styled-radio';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
  formikProps: FormikProps<any>;
};

const LessonStructure: React.FC<Props> = ({ formikProps }) => {
  const [preferredLanguages, setPreferredLanguages] = useState<any>([
    { key: 'English', value: 'english' },
    { key: 'Norsk', value: 'norsk' },
    { key: 'Swedish', value: 'swedish' },
    { key: 'Finish', value: 'finish' },
    { key: 'Danish', value: 'danish' },
    { key: 'Arabic', value: 'arabic' },
    { key: 'Chinese', value: 'chinese' },
  ]);

  const classes = useStyles();

  return (
    <div className={'pb-5 px-2'}>
      <section className={'my-5'}>
        <br />
        <div className={'m-5 d-flex flex-row justify-content-around'}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Lesson Mode</FormLabel>
            <RadioGroup
              color={'primary'}
              aria-label="lessonMode"
              name="lessonMode"
              id={'lessonMode'}
              value={formikProps.values.lessonMode}
              onChange={formikProps.handleChange}
            >
              <FormControlLabel
                color={'primary'}
                value="1-on-1"
                control={<StyledRadio />}
                label="1-on-1"
              />
              <FormControlLabel
                color={'primary'}
                value="group"
                control={<StyledRadio />}
                label="Group"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">Preferred Languages</FormLabel>
            <FormGroup>
              <Field name={'preferredLanguages'}>
                {({ field }) => {
                  return preferredLanguages.map(option => {
                    return (
                      <div
                        className="checkboxes in-row margin-bottom-20"
                        key={option.key}
                      >
                        <input
                          type="checkbox"
                          id={option.value}
                          {...field}
                          value={option.value}
                          checked={field.value.includes(option.value)}
                        />
                        <label htmlFor={option.value}>{option.key}</label>
                      </div>
                    );
                  });
                }}
              </Field>
            </FormGroup>
            <PlainErrorMessage id={'preferredLanguages'} />
          </FormControl>
        </div>
      </section>

      <div className={'d-flex flex-row justify-content-around'}>
        <section>
          <DateTimePickerFormik
            id={'starts'}
            label={'Date Starts'}
            disablePast={true}
            formikProps={formikProps}
          />
        </section>
        <section>
          <DateTimePickerFormik
            id={'ends'}
            label={'Date Ends'}
            disablePast={true}
            formikProps={formikProps}
          />
        </section>
      </div>
      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </div>
  );
};

export default LessonStructure;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

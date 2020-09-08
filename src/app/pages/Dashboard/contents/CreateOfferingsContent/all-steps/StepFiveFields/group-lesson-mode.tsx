import React from 'react';
import { FormikProps } from 'formik';
import InputWithIconInsideFormik from '../../../../../../components/input-with-icon-inside-formik';
import TextareaFormik from './components/TextareaFormik';
import { Slider } from '@material-ui/core';
import PlainErrorMessage from '../../../../../../components/plain-error-message';

type Props = {
  formikProps: FormikProps<any>;
};

const GroupLessonMode: React.FC<Props> = ({ formikProps }) => {
  return (
    <div className={'mb-5 p-5'}>
      <div>
        <label htmlFor="perAttendeeRate">Pricing per attendee</label>
        <InputWithIconInsideFormik
          id={'pricingPerAttendee'}
          icon={'im im-icon-Dollar-Sign2'}
          placeholder={'e.g. 20'}
          formikProps={formikProps}
        />
      </div>

      <div className={'my-5'}>
        <label htmlFor={'hours'}>
          How long in hours? <strong>{formikProps.values.hours}</strong>
        </label>

        <Slider
          defaultValue={formikProps.values.hours}
          onChange={(event, value) => {
            formikProps.setFieldValue('hours', value);
          }}
          valueLabelDisplay="auto"
          marks
          step={1}
          min={1}
          max={8}
        />
        <PlainErrorMessage id={'hours'} />
      </div>

      <section className={'my-5'}>
        <label>Extra details:</label>
        <TextareaFormik
          formikProps={formikProps}
          id={'includedInGroup'}
          label={'Included'}
          placeholder={'e.g. pdf ebook, etc..'}
        />

        <TextareaFormik
          formikProps={formikProps}
          placeholder={'e.g. snacks, etc..'}
          id={'excludedInGroup'}
          label={'Excluded'}
        />
      </section>
    </div>
  );
};

export default GroupLessonMode;

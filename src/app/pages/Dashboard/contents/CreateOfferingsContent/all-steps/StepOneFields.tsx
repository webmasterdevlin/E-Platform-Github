import React, { FC } from 'react';
import LanguagesAutosuggest from '../../../../../demo-development/full-text-search-demo/languages-autosuggest';
import PlainErrorMessage from '../../../../../components/plain-error-message';
import { FormikProps } from 'formik';
import InputFormik from '../../../../../components/input-formik';
import { OfferingModel } from './schema/create-offerings.value';
import YupFormikValidationViewer from '../../../../../components/yup-formik-validation-viewer';

type Props = {
  formikProps: FormikProps<OfferingModel>;
};

const StepOneFields: FC<Props> = ({ formikProps }) => (
  <>
    <YupFormikValidationViewer formikProps={formikProps} />
    <pre>CHECK: {formikProps.errors.offering}</pre>
    {formikProps.values.offering ? (
      <InputFormik
        id={'offering'}
        label={'Offering'}
        formikProps={formikProps}
      />
    ) : (
      <section>
        <h2 className={'mb-5'}>Pick a subject</h2>
        <LanguagesAutosuggest setFieldValue={formikProps.setFieldValue} />
        <PlainErrorMessage id={'offering'} />
      </section>
    )}
  </>
);

export default StepOneFields;

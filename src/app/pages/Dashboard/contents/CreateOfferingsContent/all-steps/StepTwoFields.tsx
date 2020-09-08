import React from 'react';
import { FormikProps } from 'formik';
import InputFormik from '../../../../../components/input-formik';
import { OfferingModel } from './schema/create-offerings.value';
import Box from '@material-ui/core/Box/Box';
import { ThumbnailImageContainer } from '../../../../../components/thumbnail-image-container';
import YupFormikValidationViewer from '../../../../../components/yup-formik-validation-viewer';

type Props = {
  formikProps: FormikProps<OfferingModel>;
};
const StepTwoFields: React.FC<Props> = ({ formikProps }) => (
  <>
    <YupFormikValidationViewer formikProps={formikProps} />
    <h2 className={'mb-5'}>Class/Course's title and description</h2>
    <ThumbnailImageContainer formikProps={formikProps} />

    <Box mb={5}>
      <InputFormik id={'title'} label={'Title'} formikProps={formikProps} />
    </Box>
    <InputFormik
      id={'description'}
      label={'Description'}
      formikProps={formikProps}
    />
  </>
);

export default StepTwoFields;

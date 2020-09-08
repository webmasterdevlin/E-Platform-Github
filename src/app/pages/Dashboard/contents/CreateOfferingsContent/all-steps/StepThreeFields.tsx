import React from 'react';
import { Link } from 'react-router-dom';
import { FormikProps } from 'formik';
import { OfferingModel } from './schema/create-offerings.value';
import Box from '@material-ui/core/Box/Box';
import YupFormikValidationViewer from '../../../../../components/yup-formik-validation-viewer';

type Props = {
  formikProps: FormikProps<OfferingModel>;
};
const StepThreeFields: React.FC<Props> = ({ formikProps }) => (
  <>
    <YupFormikValidationViewer formikProps={formikProps} />
    <h2 className={'mb-5'}>Personal profile and résumé</h2>
    <Box mb={4}>
      <h4 className={'d-flex flex-row align-items-center'}>
        Let people know something about you. Open this new tab to
        <Link
          className={'ml-2 button'}
          to={'dashboard-my-profile'}
          target={'_blank'}
        >
          create/update your personal profile
        </Link>
      </h4>
    </Box>
    <Box mb={4}>
      <h4 className={'d-flex flex-row align-items-center'}>
        Make your resume look attractive. Open this new tab to
        <Link
          className={'ml-2 button'}
          to={'dashboard-resume'}
          target={'_blank'}
        >
          create/update your résumé
        </Link>
      </h4>
    </Box>
  </>
);

export default StepThreeFields;

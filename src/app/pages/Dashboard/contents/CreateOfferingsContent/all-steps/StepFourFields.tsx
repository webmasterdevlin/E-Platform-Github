import React, { useState } from 'react';
import { FormikProps } from 'formik';
import CheckboxesVerticalFormik from '../../../../../components/checkboxes-vertical-formik';
import YupFormikValidationViewer from '../../../../../components/yup-formik-validation-viewer';

type Props = {
  formikProps?: FormikProps<any>;
};
const StepFourFields: React.FC<Props> = ({ formikProps }) => {
  const [locations, setLocations] = useState<any>([
    { key: 'Online/Virtual', value: 'onlineVirtual' },
    { key: "Mentor's Place", value: 'mentorsPlace' },
    { key: "Student's Place", value: 'studentsPlace' },
    { key: 'Decide later', value: 'decideLater' },
  ]);

  return (
    <div>
      <YupFormikValidationViewer formikProps={formikProps} />
      <h2 className={'mb-5'}>Choose course's location(s)</h2>
      <CheckboxesVerticalFormik options={locations} id={'courseLocations'} />
    </div>
  );
};

export default StepFourFields;

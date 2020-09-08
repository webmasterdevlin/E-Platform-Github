import React, { useState } from 'react';
import CheckboxesHorizontalFormik from '../../../../../../components/checkboxes-horizontal-formik';
import { useMediaQuery } from '@material-ui/core';

type Props = {};

const DailyRecurrencePattern: React.FC<Props> = () => {
  const smallScreen = useMediaQuery('(max-width:720px)');

  const [days, setDays] = useState<any>([
    { key: 'Monday', value: 'monday' },
    { key: 'Tuesday', value: 'tuesday' },
    { key: 'Wednesday', value: 'wednesday' },
    { key: 'Thursday', value: 'thursday' },
    { key: 'Friday', value: 'friday' },
    { key: 'Saturday', value: 'saturday' },
    { key: 'Sunday', value: 'sunday' },
  ]);

  return (
    <>
      <h1>Daily Recurrence Pattern Component</h1>
      {/*<CheckboxesHorizontalFormik options={days} id={'courseLocations'} />*/}
    </>
  );
};

export default DailyRecurrencePattern;

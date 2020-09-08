import React, { useEffect } from 'react';
import DashboardTitleBar from '../../../dashboard-title-bar';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../../../../../store/types';
import { fetchOfferingsAction } from '../my-offerings.actions';
import { Status } from '../../CreateOfferingsContent/all-steps/schema/create-offerings.value';
import ListOfOffering from './components/list-of-offering';
import Copyright from '../../../../../components/copyright';
import StyledCircularProgress from '../../../../../components/styled-circular-progress';

const InactiveOfferings = () => {
  const dispatch: Dispatch = useDispatch();
  const { offerings, loading } = useSelector(
    (state: IApplicationState) => state.offeringReducer,
  );

  useEffect(() => {
    if (!offerings.length) dispatch(fetchOfferingsAction());
  }, []);

  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'Passed Offerings'} />
      <div className="row">
        {loading ? (
          <StyledCircularProgress />
        ) : (
          <ListOfOffering
            offerings={offerings.filter(o => o.status === Status.inactive)}
          />
        )}
        <Copyright />
      </div>
    </div>
  );
};

export default InactiveOfferings;

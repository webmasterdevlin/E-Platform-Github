import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmationDialog from '../../../../../../components/confirmation-dialog';
import {
  OfferingModel,
  Status,
} from '../../../CreateOfferingsContent/all-steps/schema/create-offerings.value';

type Props = {
  offerings: Array<OfferingModel>;
};

const ListOfOffering: React.FC<Props> = ({ offerings }) => {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [confirmationValue, setConfirmationValue] = useState('No');

  const handleDeletePackage = () => {
    setOpenConfirmation(true);
  };

  const handleCloseConfirmation = (newValue?: string) => {
    setOpenConfirmation(false);
    if (newValue) setConfirmationValue(newValue);
    newValue === 'Yes' ? console.log('YES') : console.log('NO');
  };

  return (
    <>
      {offerings.map(o => (
        <div className="col-lg-12 col-md-12">
          <div className="dashboard-list-box margin-top-0">
            <ul>
              <li>
                <div className="list-box-listing">
                  <div className="list-box-listing-img">
                    <img
                      className={'rounded'}
                      src={'https://picsum.photos/200?' + new Date()}
                      alt="image of package"
                      loading={'eager'}
                    />
                  </div>
                  <div className="list-box-listing-content">
                    <div className="inner">
                      <h3>{o.title}</h3>
                      <span>{o.description}</span>
                      <div className="star-rating">
                        <div className="rating-counter">{o.lessonMode}</div>
                        <div>
                          {o.oneOnOnePackages &&
                            `package(s) inside: ${o.oneOnOnePackages.length}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons-to-right">
                  <Link to={`offering-detail/${o.id}`} className="button gray">
                    <i className="sl sl-icon-eye" /> View
                  </Link>
                  {o.status !== Status.inactive && (
                    <Link to={`edit-offering/${o.id}`} className="button gray">
                      <i className="sl sl-icon-note" /> Edit
                    </Link>
                  )}
                  <a onClick={handleDeletePackage} className="button gray">
                    <i className="sl sl-icon-close" /> Delete
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <ConfirmationDialog
            id="confirmation"
            keepMounted
            open={openConfirmation}
            onClose={handleCloseConfirmation}
            value={confirmationValue}
          />
        </div>
      ))}
    </>
  );
};

export default ListOfOffering;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Copyright from '../../../../../components/copyright';
import { Box, Button, Container, Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../../../../../store/types';
import OfferingDetailName from './components/offering-detail-name';
import OfferingDetailValue from './components/offering-detail-value';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import BoxPackage from './components/box-package';
import {
  LessonMode,
  OfferingModel,
  Status,
} from '../../CreateOfferingsContent/all-steps/schema/create-offerings.value';

const OfferingDetail = () => {
  const { id } = useParams();
  const [offering, setOffering] = useState<OfferingModel>(null);
  const { offerings, loading } = useSelector(
    (state: IApplicationState) => state.offeringReducer,
  );

  useEffect(() => {
    // getOfferingByIdAxios(id).then(({ data }) =
    const index = offerings.findIndex(o => o.id === id);
    setOffering(offerings[index]);
  }, []);

  return (
    <div className="dashboard-content">
      {offering && (
        <Container>
          <div className={'d-flex justify-content-center'}>
            <Typography className={'mb-5'} variant={'h2'}>
              Offering Details
            </Typography>
          </div>

          <Paper className={'p-5'}>
            <Box display={'flex'} justifyContent={'space-between'}>
              <div>
                <Box mb={3}>
                  <section>
                    <strong>Subject:</strong>
                    <span>{` ${offering.offering}`}</span>
                  </section>
                  <section>
                    <strong>Mode:</strong>
                    <span>{` ${offering.lessonMode}`}</span>
                  </section>
                </Box>
                <Box mb={3}>
                  <OfferingDetailName name={'Course Title'} />
                  <OfferingDetailValue value={offering.title} />
                </Box>
                <Box mb={12}>
                  <OfferingDetailName name={'Course Description'} />
                  <OfferingDetailValue value={offering.description} />
                </Box>
              </div>
              <div>
                <img
                  className={''}
                  alt={`${offering.title} image`}
                  src={'https://picsum.photos/200'}
                />
              </div>
            </Box>

            <Box mb={6}>
              <OfferingDetailName
                name={'Course Locations'}
                icon={'im im-icon-Location-2'}
              />
              <ul className="list-2 my-2">
                {offering.courseLocations.map(location => (
                  <li key={location.key}>{location}</li>
                ))}
              </ul>
            </Box>
            <Box mb={6}>
              <OfferingDetailName
                name={'Lesson Mode'}
                icon={'im im-icon-Teacher'}
              />
              <OfferingDetailValue value={offering.lessonMode} />
            </Box>
            <Box mb={6}>
              <OfferingDetailName
                name={'Preferred Languages'}
                icon={'fa fa-language'}
              />
              <ul className="list-2 my-2">
                {offering.preferredLanguages.map(lang => (
                  <li key={lang.key}>{lang}</li>
                ))}
              </ul>
            </Box>
            {offering.lessonMode === LessonMode.group ? (
              <>
                <Box mb={6}>
                  <OfferingDetailName
                    name={'How long?'}
                    icon={'im im-icon-Clock'}
                  />
                  <OfferingDetailValue value={`${offering.hours} hrs.`} />
                </Box>
                <Box mb={6}>
                  <OfferingDetailName name={'Pricing per attendee'} />
                  <OfferingDetailValue
                    value={`$${offering.pricingPerAttendee}`}
                  />
                </Box>
                <Box mb={6}>
                  <OfferingDetailName name={"What's included?"} />
                  <OfferingDetailValue value={`${offering.included}`} />
                </Box>
                <Box mb={6}>
                  <OfferingDetailName name={"What's excluded?"} />
                  <OfferingDetailValue value={`${offering.excluded}`} />
                </Box>
              </>
            ) : (
              <>
                <Box mb={6}>
                  <OfferingDetailName name={'Additional costs'} />
                  <OfferingDetailValue value={`$${offering.additionalCosts}`} />
                </Box>
                <Box mb={6}>
                  <OfferingDetailName name={'Offers 1 hr free for online'} />
                  <OfferingDetailValue
                    value={offering.oneHourFree ? 'Yes' : 'No'}
                  />
                </Box>
                <Box mb={6}>
                  <OfferingDetailName
                    name={`Package(s) ${offering.oneOnOnePackages.length}`}
                  />
                  {offering.oneOnOnePackages.map(p => (
                    <BoxPackage key={p.name}>
                      <Box display={'flex'} justifyContent={'space-between'}>
                        <div>Name: {p.name}</div>
                        <div>
                          <i className="sl sl-icon-pin" />
                        </div>
                      </Box>
                      <div>Pricing: ${p.pricing}</div>
                      <div>Hours: {p.hours}</div>
                      <div>Included: {p.included}</div>
                      <div>Excluded: {p.excluded}</div>
                    </BoxPackage>
                  ))}
                </Box>
              </>
            )}
            <Box mb={6} display={'flex'} justifyContent={'space-around'}>
              <div>
                <OfferingDetailName
                  name={'Date Starts'}
                  icon={'fa fa-calendar-check-o'}
                />
                <Box m={1} color={'#666'} fontSize={'1.5rem'}>
                  {offering.starts}
                </Box>
              </div>
              <div>
                <OfferingDetailName
                  name={'Date Ends'}
                  icon={'fa fa-calendar-times-o'}
                />
                <Box m={1} color={'#666'} fontSize={'1.5rem'}>
                  {offering.ends}
                </Box>
              </div>
            </Box>
            {/* Footer */}
            <div id={'footer'}>
              {offering.status !== Status.inactive && (
                <Box display={'flex'} flexDirection={'row-reverse'}>
                  <div>
                    <ul>
                      <Link to={'/dashboard/edit-offering/' + `${offering.id}`}>
                        <Button
                          variant="text"
                          color="primary"
                          startIcon={<EditIcon />}
                        >
                          Edit
                        </Button>
                      </Link>
                    </ul>
                  </div>
                </Box>
              )}
            </div>
          </Paper>
        </Container>
      )}
      <Copyright />
    </div>
  );
};

export default OfferingDetail;

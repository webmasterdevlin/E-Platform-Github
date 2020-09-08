import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Copyright from '../../../../../components/copyright';
import { IApplicationState } from '../../../../../../store/types';
import { Field, Form, Formik, FormikProps } from 'formik';
import InputFormik from '../../../../../components/input-formik';
import { createOfferingsYupObject } from '../../CreateOfferingsContent/all-steps/schema/create-offerings.validation';
import LanguagesAutosuggest from '../../../../../demo-development/full-text-search-demo/languages-autosuggest';
import PlainErrorMessage from '../../../../../components/plain-error-message';
import StyledRadio from '../../../../../components/styled-radio';
import CheckboxFormik from '../../../../../components/checkbox-formik';
import DateTimePickerFormik from '../../../../../components/date-time-picker-formik';
import BoxPackage from './components/box-package';
import {
  LessonMode,
  OfferingModel,
} from '../../CreateOfferingsContent/all-steps/schema/create-offerings.value';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  RadioGroup,
  Slider,
} from '@material-ui/core';

const EditOffering = () => {
  const { id } = useParams();
  const [offering, setOffering] = useState<OfferingModel>(null);
  const { offerings, loading } = useSelector(
    (state: IApplicationState) => state.offeringReducer,
  );

  const [preferredLanguages, setPreferredLanguages] = useState<any>([
    { key: 'English', value: 'english' },
    { key: 'Norsk', value: 'norsk' },
    { key: 'Swedish', value: 'swedish' },
    { key: 'Finish', value: 'finish' },
    { key: 'Danish', value: 'danish' },
    { key: 'Arabic', value: 'arabic' },
    { key: 'Chinese', value: 'chinese' },
  ]);

  useEffect(() => {
    // getOfferingByIdAxios(id).then(({ data }) =
    const index = offerings.findIndex(o => o.id === id);
    setOffering(offerings[index]);
  }, []);

  return (
    <div className="dashboard-content">
      {offering && (
        <Container>
          <div className="dashboard-list-box margin-top-0">
            <h4 className="gray">Editing {offering.offering}</h4>
            <div className="dashboard-list-box-static">
              <Formik
                enableReinitialize={true}
                initialValues={offering}
                validationSchema={createOfferingsYupObject}
                onSubmit={(values, actions) => {
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                {(formikProps: FormikProps<OfferingModel>) => (
                  <Form>
                    <section className={'pb-5'}>
                      {formikProps.values.offering ? (
                        <InputFormik
                          id={'offering'}
                          label={'Offering'}
                          formikProps={formikProps}
                        />
                      ) : (
                        <section>
                          <Box mb={3} fontWeight={'bold'} fontSize={'1.6rem'}>
                            Pick a subject
                          </Box>
                          <LanguagesAutosuggest
                            setFieldValue={formikProps.setFieldValue}
                          />
                          <PlainErrorMessage id={'offering'} />
                        </section>
                      )}
                      <InputFormik
                        id={'title'}
                        label={'Title'}
                        formikProps={formikProps}
                      />
                      <InputFormik
                        id={'description'}
                        label={'Description'}
                        formikProps={formikProps}
                      />
                      <div
                        className={'m-5 d-flex flex-row justify-content-around'}
                      >
                        <Box my={4}>
                          <FormControl component="fieldset">
                            <Box mb={1} fontWeight={'bold'} fontSize={'1.6rem'}>
                              Lesson Mode
                            </Box>
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
                        </Box>
                        <Box my={4}>
                          <FormControl component="fieldset">
                            <Box mb={1} fontWeight={'bold'} fontSize={'1.6rem'}>
                              Preferred Languages
                            </Box>
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
                                          checked={
                                            option.value ===
                                            formikProps.values
                                              .preferredLanguages
                                              ? option.value
                                              : field.value.includes(
                                                  option.value,
                                                )
                                          }
                                        />
                                        <label htmlFor={option.value}>
                                          {option.key}
                                        </label>
                                      </div>
                                    );
                                  });
                                }}
                              </Field>
                            </FormGroup>
                            <PlainErrorMessage id={'preferredLanguages'} />
                          </FormControl>
                        </Box>
                      </div>
                      {formikProps.values.lessonMode === LessonMode.oneOnOne ? (
                        <>
                          <InputFormik
                            id={'additionalCosts'}
                            label={'Additional Costs'}
                            icon={'im im-icon-Dollar-Sign'}
                            formikProps={formikProps}
                          />
                          <Box mb={4}>
                            <CheckboxFormik
                              formikProps={formikProps}
                              id={'oneHourFree'}
                              label={'1 hr free if online/virtual'}
                            />
                          </Box>
                          {formikProps.values.oneOnOnePackages.map((p, i) => (
                            <BoxPackage key={`oneOnOnePackages[${i}].name`}>
                              <Box
                                display={'flex'}
                                flexDirection={'row-reverse'}
                              >
                                <i className="sl sl-icon-pin" />
                              </Box>
                              <InputFormik
                                id={`oneOnOnePackages[${i}].name`}
                                label={'Package'}
                                formikProps={formikProps}
                              />
                              <InputFormik
                                id={`oneOnOnePackages[${i}].pricing`}
                                label={'Pricing (USD)'}
                                formikProps={formikProps}
                              />
                              <div className={'my-5'}>
                                <label htmlFor={'hours'}>
                                  How long in hours?{' '}
                                  <strong>
                                    {
                                      formikProps.values.oneOnOnePackages[i]
                                        .hours
                                    }
                                  </strong>
                                </label>

                                <Slider
                                  defaultValue={
                                    formikProps.values.oneOnOnePackages[i].hours
                                  }
                                  onChange={(event, value) => {
                                    formikProps.setFieldValue(
                                      `oneOnOnePackages[${i}].hours`,
                                      value,
                                    );
                                  }}
                                  valueLabelDisplay="auto"
                                  marks
                                  step={1}
                                  min={1}
                                  max={8}
                                />
                                <PlainErrorMessage
                                  id={`oneOnOnePackages[${i}].hours`}
                                />
                              </div>
                              <Box mb={4}>
                                <Box
                                  mb={1}
                                  fontWeight={'bold'}
                                  fontSize={'1.6rem'}
                                >
                                  What's included?
                                </Box>
                                <textarea
                                  id={`oneOnOnePackages[${i}].included`}
                                  value={
                                    formikProps.values.oneOnOnePackages[`${i}`]
                                      .included
                                  }
                                  onChange={formikProps.handleChange}
                                  onBlur={formikProps.handleBlur}
                                  cols={15}
                                  rows={5}
                                />
                                <PlainErrorMessage
                                  id={`oneOnOnePackages[${i}].included`}
                                />
                              </Box>
                              <Box mb={4}>
                                <Box
                                  mb={1}
                                  fontWeight={'bold'}
                                  fontSize={'1.6rem'}
                                >
                                  What's excluded?
                                </Box>
                                <textarea
                                  id={`oneOnOnePackages[${i}].excluded`}
                                  value={
                                    formikProps.values.oneOnOnePackages[`${i}`]
                                      .excluded
                                  }
                                  onChange={formikProps.handleChange}
                                  onBlur={formikProps.handleBlur}
                                  cols={15}
                                  rows={5}
                                />
                                <PlainErrorMessage
                                  id={`oneOnOnePackages[${i}].excluded`}
                                />
                              </Box>
                            </BoxPackage>
                          ))}
                        </>
                      ) : (
                        <>
                          <Box mb={4}>
                            <Box mb={1} fontWeight={'bold'} fontSize={'1.6rem'}>
                              How long in hours?{' '}
                              <strong>{formikProps.values.hours}</strong>
                            </Box>

                            <Slider
                              defaultValue={offering?.hours}
                              onChange={(event, value) => {
                                console.log('VALUE::', value);
                                formikProps.setFieldValue('hours', value);
                              }}
                              valueLabelDisplay="auto"
                              marks
                              step={1}
                              min={1}
                              max={8}
                            />
                            <PlainErrorMessage id={'hours'} />
                          </Box>
                          <InputFormik
                            id={'included'}
                            label={"What's included?"}
                            formikProps={formikProps}
                          />
                          <InputFormik
                            id={'excluded'}
                            label={"What's excluded?"}
                            formikProps={formikProps}
                          />
                        </>
                      )}
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
                      <div id={'footer'}>
                        <Button
                          type={'submit'}
                          color={'primary'}
                          variant={'contained'}
                        >
                          Update
                        </Button>
                      </div>
                    </section>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Container>
      )}
      <Copyright />
    </div>
  );
};

export default EditOffering;

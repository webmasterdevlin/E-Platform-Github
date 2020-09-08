import React, { useState } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import InputWithIconInsideFormik from '../../../../../../components/input-with-icon-inside-formik';
import CheckboxFormik from '../../../../../../components/checkbox-formik';
import TextareaFormik from './components/TextareaFormik';
import {
  createOfferingsValue,
  OfferingModel,
  OneOnOnePackageModel,
} from '../schema/create-offerings.value';
import { Box, Button, Fab, Slider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PlainErrorMessage from '../../../../../../components/plain-error-message';
import { packageFormYupObject } from '../schema/create-offerings.validation';

type Props = {
  formikProps: FormikProps<OfferingModel>;
};

const OneOnOneLessonMode: React.FC<Props> = ({ formikProps }) => {
  const [previewPackages, setPreviewPackages] = useState<
    Array<OneOnOnePackageModel>
  >([]);
  const [disableAddButton, setDisableAddButton] = useState(false);
  const [oneOnOnePackages, setOneOnOnePackages] = useState<
    Array<OneOnOnePackageModel>
  >(createOfferingsValue.oneOnOnePackages);
  const [packageForm, setPackageForm] = useState<OneOnOnePackageModel>({
    id: '',
    name: '',
    hours: 1,
    pricing: 0,
    included: '',
    excluded: '',
  });

  const handleAddPackage = () => {
    setOneOnOnePackages([
      ...oneOnOnePackages,
      packageForm as OneOnOnePackageModel,
    ]);
    setDisableAddButton(true);
  };

  const handleDraftPackage = (
    values: OneOnOnePackageModel,
    packages: Array<OneOnOnePackageModel>,
  ) => {
    formikProps.setFieldValue('oneOnOnePackages', [...packages, values]);
    setOneOnOnePackages(
      oneOnOnePackages.filter(p => p.name !== packageForm.name),
    );
    setDisableAddButton(false);
  };

  const handleCancelForm = () => {
    setOneOnOnePackages(oneOnOnePackages.filter(p => p.id !== packageForm.id));
    setDisableAddButton(false);
  };

  return (
    <div className={'p-5 mb-5'}>
      <section className={'mb-5'}>
        <div>
          <label>Additional costs for travelling if applicable</label>
          <InputWithIconInsideFormik
            id={'additionalCosts'}
            icon={'im im-icon-Dollar-Sign2'}
            placeholder={'e.g. 20'}
            formikProps={formikProps}
          />
        </div>
        <Box>
          <CheckboxFormik
            formikProps={formikProps}
            id={'oneHourFree'}
            label={'1 hr free if online/virtual'}
          />
        </Box>
      </section>
      <section>
        <label>{previewPackages[0] && `Drafted Packages`}</label>
        {previewPackages?.map(p => (
          <h5>{p.name} 📄</h5>
        ))}
      </section>

      <section className={'mb-5'}>
        <pre>
          oneOnOnePackages:{' '}
          {JSON.stringify(formikProps.values.oneOnOnePackages, null, 2)}
        </pre>
        <section>
          {oneOnOnePackages?.map(p => (
            <Formik
              key={p.id}
              initialValues={packageForm}
              validationSchema={packageFormYupObject}
              onSubmit={(values, actions) => {
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {(formik2Props: FormikProps<OneOnOnePackageModel>) => (
                <Form>
                  <pre>
                    package: {JSON.stringify(formik2Props.values, null, 2)}
                  </pre>
                  <div>
                    <label htmlFor={'name'}>Name of the package</label>
                    <input
                      id={'name'}
                      placeholder={'e.g. basic'}
                      value={formik2Props.values.name}
                      onChange={formik2Props.handleChange}
                      onBlur={formik2Props.handleBlur}
                    />
                    <PlainErrorMessage id={'name'} />
                  </div>
                  <div className={'my-5'}>
                    <label htmlFor={'hours'}>
                      How long in hours?{' '}
                      <strong>{formik2Props.values.hours}</strong>
                    </label>

                    <Slider
                      defaultValue={formik2Props.values.hours}
                      onChange={(event, value) => {
                        formik2Props.setFieldValue('hours', value);
                      }}
                      valueLabelDisplay="auto"
                      marks
                      step={1}
                      min={1}
                      max={8}
                    />
                    <PlainErrorMessage id={'hours'} />
                  </div>
                  <div>
                    <label htmlFor={'pricing'}>Package rate or pricing</label>
                    <div>
                      <InputWithIconInsideFormik
                        id={'pricing'}
                        icon={'im im-icon-Dollar-Sign2'}
                        placeholder={'e.g. 20'}
                        formikProps={formik2Props}
                      />
                    </div>
                    <PlainErrorMessage id={'pricing'} />
                  </div>

                  <div className={'my-5'}>
                    <label>Extra details:</label>
                    <section className={'mb-5'}>
                      <TextareaFormik
                        formikProps={formik2Props}
                        id={'included'}
                        label={'Included'}
                        placeholder={'e.g. pdf ebook, etc..'}
                      />
                    </section>
                    <TextareaFormik
                      formikProps={formik2Props}
                      id={'excluded'}
                      label={'Excluded'}
                      placeholder={'e.g. snacks, etc..'}
                    />
                  </div>
                  <Button
                    onClick={() => {
                      if (!formik2Props.isValid || !formik2Props.values.name) {
                        alert('Please provide required data');
                        return;
                      }

                      setPreviewPackages([
                        ...previewPackages,
                        formik2Props.values,
                      ]);

                      handleDraftPackage(
                        formik2Props.values,
                        formikProps.values.oneOnOnePackages,
                      );
                    }}
                    variant={'contained'}
                    color={'primary'}
                  >
                    Draft
                  </Button>
                  <Button
                    onClick={handleCancelForm}
                    variant={'outlined'}
                    color={'primary'}
                  >
                    Cancel
                  </Button>
                </Form>
              )}
            </Formik>
          ))}
        </section>

        <div className={'d-flex justify-content-center'}>
          <Fab
            disabled={disableAddButton}
            onClick={handleAddPackage}
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </div>
      </section>
    </div>
  );
};

export default OneOnOneLessonMode;

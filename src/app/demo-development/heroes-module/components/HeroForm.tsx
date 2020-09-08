import React, { useState } from 'react';
import { addHero } from '../hero.actions';
import { useDispatch } from 'react-redux';
import { IHeroModel } from '../hero.types';
import { Dispatch } from 'redux';
import { ErrorMessage, Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Box } from '@material-ui/core';

const HeroForm: React.FC = () => {
  /* Dispatcher in Redux */
  const dispatch: Dispatch = useDispatch();

  /* Styling in MUI (Material UI) */
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    errorBar: {
      color: '#f91942',
    },
  });
  const classes = useStyles();

  /* Model of the hero object */
  const [newHero, setNewHero] = useState({
    firstName: '',
    lastName: '',
    house: '',
    knownAs: '',
  } as IHeroModel);

  /* Validation for each input */
  const validationSchema = Yup.object({
    firstName: Yup.string().label('First Name').min(2).required(),
    lastName: Yup.string().label('Last Name').min(2).required(),
    house: Yup.string().label('House').required(),
    knownAs: Yup.string().label('Known as').required(),
  });

  return (
    <Box marginBottom={5}>
      {/* Pass the form inside the Formik element */}
      <Formik
        initialValues={newHero}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          dispatch(addHero(values));
          actions.resetForm();
        }}
      >
        {(formikProps: FormikProps<IHeroModel>) => (
          <Card>
            <CardContent>
              <Form className="row">
                <div className={'d-flex flex-row mb-5'}>
                  <section className="col-md-6">
                    <div className="input-with-icon medium-icons">
                      <input
                        type="text"
                        id={'firstName'}
                        placeholder={'First Name'}
                        onChange={formikProps.handleChange('firstName')}
                        onBlur={formikProps.handleBlur('firstName')}
                        value={formikProps.values.firstName}
                      />
                      <label htmlFor={'firstName'}>
                        <i className="im im-icon-Pen" />
                      </label>
                    </div>
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className={classes.errorBar}
                    />
                  </section>
                  <section className="col-md-6">
                    <div className="input-with-icon medium-icons">
                      <input
                        type="text"
                        id={'lastName'}
                        placeholder={'Last Name'}
                        onChange={formikProps.handleChange('lastName')}
                        onBlur={formikProps.handleBlur('lastName')}
                        value={formikProps.values.lastName}
                      />
                      <label htmlFor={'lastName'}>
                        <i className="im im-icon-Pen" />
                      </label>
                    </div>
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className={classes.errorBar}
                    />
                  </section>
                </div>

                <div className={'d-flex flex-row mb-5'}>
                  <section className="col-md-6">
                    <div className="input-with-icon medium-icons">
                      <input
                        type="text"
                        id={'house'}
                        placeholder={'House'}
                        onChange={formikProps.handleChange('house')}
                        onBlur={formikProps.handleBlur('house')}
                        value={formikProps.values.house}
                      />
                      <label htmlFor={'house'}>
                        <i className="im im-icon-Ying-Yang" />
                      </label>
                    </div>
                    <ErrorMessage
                      name="house"
                      component="div"
                      className={classes.errorBar}
                    />
                  </section>
                  <section className="col-md-6">
                    <div className="input-with-icon medium-icons">
                      <input
                        type="text"
                        id={'knownAs'}
                        placeholder={'Known As'}
                        onChange={formikProps.handleChange('knownAs')}
                        onBlur={formikProps.handleBlur('knownAs')}
                        value={formikProps.values.knownAs}
                      />
                      <label htmlFor={'knownAs'}>
                        <i className="im im-icon-Zombie" />
                      </label>
                    </div>
                    <ErrorMessage
                      name="knownAs"
                      component="div"
                      className={classes.errorBar}
                    />
                  </section>
                </div>

                <section className="col-md-12">
                  <Button
                    type={'submit'}
                    variant={'contained'}
                    color={'primary'}
                  >
                    Send Request
                  </Button>
                </section>
              </Form>
            </CardContent>
          </Card>
        )}
      </Formik>
    </Box>
  );
};

export default HeroForm;

/*
Formik Form template that you can copy and paste

const useStyles = makeStyles({
  errorBar: {
    color: '#f91942',
     marginBottom: '2rem',
  },
});
  const classes = useStyles();

// easy formik paste
<Formik
  initialValues={{}}
   validationSchema={{}}
     onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
      }}
   >
      {formikProps => <Form></Form>}
</Formik>


      onChange={formikProps.handleChange('')}
                        onBlur={formikProps.handleBlur('')}
                        value={formikProps.values.}
/>

                            <ErrorMessage
                      name="knownAs"
                      component="div"
                      className={classes.errorBar}
                    />
*/

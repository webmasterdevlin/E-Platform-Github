import * as React from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { action } from 'typesafe-actions';
import Box from '@material-ui/core/Box/Box';
function ComingSoonPage() {
  return (
    <div
      className="coming-soon-page"
      style={{
        backgroundImage: 'url(assets/images/main-search-background-01.jpg)',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <img src="../../../assets/images/logo2.png" alt="" />

            <Formik
              initialValues={{ email: '' }}
              validationSchema={Yup.object({
                email: Yup.string().label('Email').email().required(),
              })}
              onSubmit={values => {
                console.log('HAHAHA, ', values.email);
                alert('Thank you. We will email you soon.');
              }}
            >
              {formikProps => (
                <>
                  <h3>We are launching Listeo soon!</h3>
                  <div
                    id="countdown"
                    className="margin-top-10 margin-bottom-35"
                  />

                  <Box color=" #ffc600">
                    <ErrorMessage name={'email'} component={'span'} />
                  </Box>

                  <br />

                  <div className="main-search-input gray-style margin-top-30 margin-bottom-10">
                    <div className="main-search-input-item form">
                      <input
                        name="email"
                        placeholder="Your email address"
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                      />
                    </div>
                    <button type="submit" className="button">
                      Notify Me
                    </button>
                  </div>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ComingSoonPage;

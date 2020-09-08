import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Form, Formik, FormikProps } from 'formik';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction, registerUserAction } from './sign-in.actions';
import {
  registerMentorYupObject,
  RegisterStudentModel,
  registerStudentYupObject,
  signInYupObject,
} from './validation-schemas';
import { IApplicationState } from '../../../../store/types';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    padding: '2.5rem',
  },
  errorBar: {
    color: '#f91942',
    marginBottom: '2rem',
  },
}));

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`auth-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </div>
  );
};

const AuthTabs: React.FC<any | null> = () => {
  const dispatch: Dispatch = useDispatch();
  const { loading } = useSelector(
    (state: IApplicationState) => state.signInReducer,
  );
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [error, setError] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  let signInValue = { email: '', password: '', rememberMe: '' };
  let registerValue = {
    email: '',
    password: '',
    repeatPassword: '',
    roles: [],
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color={'default'}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor={'primary'}
          variant={'fullWidth'}
          aria-label="simple tabs example"
        >
          <Tab
            style={{ fontSize: '1.20rem' }}
            label="Login"
            icon={<i className="fa fa-sign-in" style={{ fontSize: '3rem' }} />}
            {...a11yProps(0)}
          />
          <Tab
            style={{ fontSize: '1.20rem' }}
            label="Student"
            icon={
              <i
                className="im im-icon-Student-MaleFemale"
                style={{ fontSize: '3rem' }}
              />
            }
            {...a11yProps(1)}
          />
          <Tab
            style={{ fontSize: '1.20rem' }}
            label="Mentor"
            icon={
              <i className="im im-icon-Teacher" style={{ fontSize: '3rem' }} />
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <div className={'d-flex justify-content-center mt-5'}>
        <span style={{ color: '#222' }}>{error}</span>
      </div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Formik
            initialValues={signInValue}
            validationSchema={signInYupObject}
            onSubmit={async (values, actions) => {
              try {
                await dispatch(loginUserAction(values));
                navigate('/dashboard');
              } catch (e) {
                setError(`Something happened: ${e.message}`);
              }
            }}
          >
            {(formikProps: FormikProps<any>) => (
              <Form className="login mt-5">
                <div className="sign-in-demo-notice">
                  demo email: <strong> student@gmail.com</strong>
                  {' or '}
                  <strong> mentor@gmail.com</strong>
                  <br />
                  demo password: <strong>pass1234</strong>
                </div>
                <section className="form-row form-row-wide input-with-icon medium-icons">
                  <input
                    type="text"
                    className="input-text"
                    placeholder={'Email'}
                    name="email"
                    id="email"
                    onChange={formikProps.handleChange('email')}
                    onBlur={formikProps.handleBlur('email')}
                    value={formikProps.values.email}
                  />
                  <label htmlFor="email">
                    <i className="im im-icon-Male" />
                  </label>
                </section>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={classes.errorBar}
                />
                <section className="form-row form-row-wide input-with-icon medium-icons">
                  <input
                    className="input-text"
                    type="password"
                    placeholder={'Password'}
                    name="current-password"
                    id="current-password"
                    onChange={formikProps.handleChange('password')}
                    onBlur={formikProps.handleBlur('password')}
                    value={formikProps.values.password}
                  />
                  <label htmlFor="current-password">
                    <i className="im im-icon-Lock-2" />
                  </label>
                </section>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={classes.errorBar}
                />
                <span className="lost_password">
                  <a>Lost Your Password?</a>
                </span>
                <Box
                  marginTop={4}
                  className="form-row"
                  flexDirection={'column'}
                >
                  <Button
                    type={'submit'}
                    color={'primary'}
                    variant={'contained'}
                  >
                    Log in now
                  </Button>
                  <section className="checkboxes margin-top-10">
                    <input
                      id="remember-me"
                      type="checkbox"
                      name="check"
                      value={formikProps.values.rememberMe}
                      onChange={formikProps.handleChange('rememberMe')}
                    />
                    <label htmlFor="remember-me">Remember Me</label>
                  </section>
                </Box>
              </Form>
            )}
          </Formik>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Formik
            initialValues={registerValue}
            validationSchema={registerStudentYupObject}
            onSubmit={async (values, actions) => {
              if (values.password !== values.repeatPassword) {
                actions.setErrors({
                  password: 'Password and Repeat Password must be the same',
                });
                return;
              }
              delete values.repeatPassword;
              values.roles = ['student'];

              try {
                await dispatch(registerUserAction(values));
                navigate('/');
              } catch (e) {
                setError(`Something happened: ${e.message}`);
              }
            }}
          >
            {(formikProps: FormikProps<any>) => (
              <Form className="register mt-5">
                <section className="form-row form-row-wide input-with-icon medium-icons">
                  <input
                    type="text"
                    placeholder={'Email'}
                    className="input-text"
                    name="email"
                    id="student-email"
                    onChange={formikProps.handleChange('email')}
                    onBlur={formikProps.handleBlur('email')}
                    value={formikProps.values.email}
                  />
                  <label htmlFor="student-email">
                    <i className="im im-icon-Mail" />
                  </label>
                </section>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={classes.errorBar}
                />
                <section className="form-row form-row-wide input-with-icon medium-icons">
                  <input
                    className="input-text"
                    type="password"
                    placeholder={'Password'}
                    name="new-password"
                    id="student-new-password"
                    onChange={formikProps.handleChange('password')}
                    onBlur={formikProps.handleBlur('password')}
                    value={formikProps.values.password}
                  />
                  <label htmlFor="student-new-password">
                    <i className="im im-icon-Lock-2" />
                  </label>
                </section>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={classes.errorBar}
                />
                <section className="form-row form-row-wide input-with-icon medium-icons">
                  <input
                    className="input-text"
                    type="password"
                    placeholder={'Repeat Password'}
                    name="new-password"
                    id="student-repeat-password"
                    onChange={formikProps.handleChange('repeatPassword')}
                    onBlur={formikProps.handleBlur('repeatPassword')}
                    value={formikProps.values.repeatPassword}
                  />
                  <label htmlFor="student-repeat-password">
                    <i className="im im-icon-Lock-2" />
                  </label>
                </section>
                <ErrorMessage
                  name="repeatPassword"
                  component="div"
                  className={classes.errorBar}
                />
                <Box
                  marginTop={4}
                  className="form-row"
                  flexDirection={'column'}
                >
                  <Button
                    type={'submit'}
                    color={'primary'}
                    variant={'contained'}
                    className={'w-100'}
                  >
                    Register / Create Account
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Formik
            initialValues={registerValue}
            validationSchema={registerMentorYupObject}
            onSubmit={async (values, actions) => {
              if (values.password !== values.repeatPassword) {
                actions.setErrors({
                  password: 'Password and repeat password must match',
                });

                return;
              }
              delete values.repeatPassword;
              values.roles = ['mentor'];
              try {
                await dispatch(registerUserAction(values));
                navigate('/dashboard');
              } catch (e) {
                setError(`Something happened: ${e.message}`);
              }
            }}
          >
            {formikProps => (
              <Form className="register mt-5">
                <section className="form-row form-row-wide input-with-icon medium-icons">
                  <input
                    type="text"
                    className="input-text"
                    placeholder={'Email'}
                    name="email"
                    id="mentor-email"
                    onChange={formikProps.handleChange('email')}
                    onBlur={formikProps.handleBlur('email')}
                    value={formikProps.values.email}
                  />
                  <label htmlFor="mentor-email">
                    <i className="im im-icon-Mail" />
                  </label>
                </section>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={classes.errorBar}
                />
                <section className="form-row form-row-wide input-with-icon medium-icons">
                  <input
                    className="input-text"
                    type="password"
                    placeholder={'Password'}
                    name="mentor-new-password"
                    id="new-password"
                    onChange={formikProps.handleChange('password')}
                    onBlur={formikProps.handleBlur('password')}
                    value={formikProps.values.password}
                  />
                  <label htmlFor="mentor-new-password">
                    <i className="im im-icon-Lock-2" />
                  </label>
                </section>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={classes.errorBar}
                />
                <section className="form-row form-row-wide input-with-icon medium-icons">
                  <input
                    className="input-text"
                    type="password"
                    placeholder={'Repeat Password'}
                    name="new-password"
                    id="mentor-repeat-password"
                    onChange={formikProps.handleChange('repeatPassword')}
                    onBlur={formikProps.handleBlur('repeatPassword')}
                    value={formikProps.values.repeatPassword}
                  />
                  <label htmlFor="mentor-repeat-password">
                    <i className="im im-icon-Lock-2" />
                  </label>
                </section>
                <ErrorMessage
                  name="repeatPassword"
                  component="div"
                  className={classes.errorBar}
                />
                <Box
                  marginTop={4}
                  className="form-row"
                  flexDirection={'column'}
                >
                  <Button
                    type={'submit'}
                    color={'primary'}
                    variant={'contained'}
                    className={'w-100'}
                  >
                    Register / Create Account
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default AuthTabs;

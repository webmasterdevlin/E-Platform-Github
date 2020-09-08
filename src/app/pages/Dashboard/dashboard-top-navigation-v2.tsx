import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import UserMenu from '../../features/auth/components/user-menu';
import {
  Box,
  Button,
  createStyles,
  FormControlLabel,
  Grid,
  Switch,
  SwitchClassKey,
  SwitchProps,
  Theme,
  Typography,
  withStyles,
} from '@material-ui/core';

const DashboardTopNavigationV2 = () => {
  const [state, setState] = React.useState({
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      {/* Header Container ================================================== */}
      <header id="header-container" className="fixed fullwidth dashboard">
        {/* Header */}
        <div id="header" className="not-sticky">
          <div className="container">
            {/* Left Side Content */}
            <div className="left-side">
              {/* Logo */}
              <div id="logo">
                <Link to={'/'}>
                  <img src="../../../assets/images/logo.png" alt="" />
                </Link>
                <Link to={'/'} className="dashboard-logo">
                  <img src="../../../assets/images/logo2.png" alt="" />
                </Link>
              </div>
              {/* Mobile Navigation */}
              <div className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
              {/* Main Navigation */}
              <nav id="navigation" className="style-1">
                <Link to={`create-offerings`} className="button with-icon">
                  Create Offerings <i className="fa fa-hand-grab-o" />
                </Link>
                <Link
                  to={`create-offerings`}
                  className="button border with-icon"
                >
                  Book a Lesson <i className="im im-icon-Tag" />
                </Link>

                <ul id="responsive">
                  {/*<li>*/}
                  {/*  <a>Home</a>*/}
                  {/*  <ul>*/}
                  {/*    <li>*/}
                  {/*      <Link to={'/home-two'}>Home 2</Link>*/}
                  {/*    </li>*/}
                  {/*  </ul>*/}
                  {/*</li>*/}
                </ul>
              </nav>
              <div className="clearfix" />
              {/* Main Navigation / End */}
            </div>
            {/* Left Side Content / End */}

            {/* Right Side Content / End */}
            <div className="right-side">
              {/* Header Widget */}
              <div className="header-widget d-flex row justify-content-between align-items-center">
                {/* User Menu */}
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                >
                  <div>Alert me please</div>
                  <Box
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Typography component="div">
                      <Grid
                        component="label"
                        container
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item>Off</Grid>
                        <Grid item>
                          <AntSwitch
                            checked={state.checkedC}
                            onChange={handleChange}
                            name="checkedC"
                          />
                        </Grid>
                        <Grid item>On</Grid>
                      </Grid>
                    </Typography>
                  </Box>
                </Box>
                <UserMenu />
              </div>
              {/* Header Widget / End */}
            </div>
            {/* Right Side Content / End */}
          </div>
        </div>
        {/* Header / End */}
      </header>
      <div className="clearfix" />
      {/* Header Container / End */}
    </>
  );
};

export default DashboardTopNavigationV2;

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {
      display: 'none',
    },
  }),
)(Switch);

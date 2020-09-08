import React from 'react';
import { useColorlibStepIconStyles } from './custom-stepper-style';
import clsx from 'clsx';

import { StepIconProps } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import SendIcon from '@material-ui/icons/Send';

export default function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SearchIcon />,
    2: <CreateIcon />,
    3: <PersonIcon />,
    4: <AddLocationIcon />,
    5: <DescriptionIcon />,
    6: <SendIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

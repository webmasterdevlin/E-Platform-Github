import React from 'react';
import { ExperienceModel } from './schema/experience.value';
import { Box, Button, IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

type Props = {
  setIsEditing: () => void;
  setShowNewExperience: (boolean) => void;
  experience: ExperienceModel;
  showAddExperienceButton: boolean;
  setShowEditingExperience: (string) => void;
};

const Experience: React.FC<Props> = ({
  setShowEditingExperience,
  setShowNewExperience,
  setIsEditing,
  experience,
  showAddExperienceButton,
}) => {
  return (
    <div className="dashboard-list-box-static">
      <section className={'mb-4'}>
        <div className="d-flex flex-row justify-content-between">
          <Box color={'#222'} fontSize={'1.80rem'} fontWeight={'500'}>
            {experience?.jobTitle}
          </Box>
          <label htmlFor="edit">
            <IconButton
              onClick={() => {
                setIsEditing();
                setShowEditingExperience(experience?.id);
              }}
              className={'p-0'}
              color="primary"
              aria-label="edit experience"
              component="span"
            >
              <CreateIcon />
            </IconButton>
          </label>
        </div>
        <Box color={'#222'}>{experience?.companyName}</Box>
        <Box color={'#222'}>{experience?.location}</Box>
        <Box>
          {`${new Date(experience?.started).getFullYear()} - ${
            experience?.ended
              ? new Date(experience?.ended).getFullYear()
              : 'Present'
          }`}
        </Box>
        <Box color={'#222'}>{experience?.description}</Box>
      </section>
      {showAddExperienceButton && (
        <Button
          onClick={setShowNewExperience}
          variant={'outlined'}
          color={'primary'}
        >
          Add Role
        </Button>
      )}
    </div>
  );
};

export default Experience;

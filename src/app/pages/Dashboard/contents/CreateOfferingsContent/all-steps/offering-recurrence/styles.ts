import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    lessonTimeGrid: {
      display: 'grid',
      gridTemplateColumns: '5rem 5rem',
      gridTemplateRows: '5rem 5rem 5rem',
      gridRowGap: '1rem',
      gridColumnGap: '3rem',
    },
    endingGrid: {
      display: 'grid',
      gridTemplateColumns: '6rem 6rem',
      gridTemplateRows: '5rem 5rem 5rem',
      gridRowGap: '1rem',
      gridColumnGap: '3rem',
    },
    recurrencePatternGrid: {
      display: 'grid',
      // gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))',
      gridTemplateColumns: '15% 85%',
      // gridTemplateRows: '5rem 5rem 5rem 5rem',
      // gridRowGap: '2rem',
      gridColumnGap: '4rem',
      marginBottom: '4rem',
    },
    rangeOfRecurrenceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
      // gridTemplateColumns: '15% 85%',
      // gridTemplateRows: '5rem 5rem 5rem 5rem',
      // gridRowGap: '2rem',
      // gridColumnGap: '4rem',
      marginBottom: '4rem',
    },
  }),
);

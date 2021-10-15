import React, { FC } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Grid as GridMaterial} from '@mui/material';
import { WorkContainer } from './index';
import { data, Work} from './data'
import cn from 'classnames';

const useStyles = makeStyles((theme) => ({
  container: {},
}));

type WorkListOptions = {
  className?: string | string[];
  data : Work[];
};

export const WorkList: FC<WorkListOptions> = ({ data, className }) => {
  const styles = useStyles();

  return (
    <GridMaterial
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={cn(styles.container, className)}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {data.map((work, index) => (
        <WorkContainer key={index} work={work} />
      ))}
    </GridMaterial>
  );
};
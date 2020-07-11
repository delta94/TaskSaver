import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  header: {
    fontSize: '2.5rem'
  }
}));

const Page404 = () => {
  const classes = useStyles();

  return (
    <Container>
      <h1 className={classes.header}>404 Page not found</h1>
    </Container>
  );
};

export default Page404;
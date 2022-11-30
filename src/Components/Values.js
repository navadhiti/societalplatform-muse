import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Values = () => {
  return (
    <>
         <Grid
                    container
                    spacing={0}
                    justifyContent="center"
                    alignItems="center"
                    className="p-5"
                    sx={{ py: 2 }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={4}
                        sx={{ textAlign: "center" }}
                    >
                        <Box>
                            Catalyse<br />
                            Interactions

                        </Box>
                    </Grid>
    </>
  )
}

export default Values
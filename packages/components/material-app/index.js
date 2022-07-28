import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { withErrorBoundary, init } from '@local/sentry';

const { hub } = init({
  dsn: "http://865a179e70294228a63cc493ebef5eac@0.0.0.0:9000/8",
  beforeSend(event) {
    console.log("@local/material-app", event)
    // Don't send the event to Sentry
    return null
  }
})

const Index = () => (
        <React.Fragment>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Create React App example with MaterialUI
                    </Typography>
                    <Button>Useless button</Button>
                </Box>
            </Container>
        </React.Fragment>
    )

export default withErrorBoundary(Index, hub)

import { Container, Typography } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import EnhanceUrl from './package/enhance-url';

ReactDOM.render(
    <React.StrictMode>
        <Container maxWidth="sm">
            <Typography variant="h2" component="h2" align="center" m={10}>
                Enhance URL
            </Typography>
            <Typography variant="subtitle1" component="span" align="center">
                This is a openstreetmap{' '}
                <EnhanceUrl
                    url="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
                    text="Map"
                />{' '}
                url, feel free to open it in a new window or inside an iframe here using the menu
                buttons
            </Typography>
        </Container>
    </React.StrictMode>,
    document.getElementById('root')
);

import React from 'react';
import logo from './logo.svg';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import './App.css';
const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

function App() {
  return (
    <div className="App">
         <Box
sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#">Link</Link>
      <Link href="#" color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" variant="body2">
        {'variant="body2"'}
      </Link>
    </Box>
    </div>
  );
}

export default App;

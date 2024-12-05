import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({ headings, value, handleChange }) {
  const tabSx = {
    color: 'white',
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        width: '10vw',
        alignSelf: 'center',
        position: 'fixed',
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        textColor="primary"
        aria-label="Vertical tabs example"
        sx={{ border: 1, borderColor: 'white' }}
      >
        {headings.map((heading) => {
          return <Tab label={heading} {...a11yProps(0)} sx={tabSx} />;
        })}
      </Tabs>
    </Box>
  );
}

import styles from '../styles/Home.module.css';
import { useEffect, useState, useRef } from 'react';
import CollapsingText from './collapsingText';
import VerticalTabs from './tab';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import { Box, Button, Container, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Home(): JSX.Element {
  const canvasRef = useRef(null);
  const baseRef = useRef(null);
  const tabRefArray = useRef({});
  const scrollToRef = (value) => {
    tabRefArray.current[value].scrollIntoView({
      behavior: 'smooth', // Smooth scrolling
      block: 'start', // Aligns the element to the top of the viewport
    });
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [tabValue, setTabValue] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      // console.log(canvasRef.current.scrollTop);
      setScrollPosition(canvasRef.current.scrollTop);
    };
    canvasRef.current.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on unmount
    return () => {
      canvasRef.current.removeEventListener('scroll', handleScroll);
    };
  },[])

  useEffect(() => {
    // Function to update scroll position
    
    // console.log(window.location.href)

    // Attach the event listener
    // Cleanup the event listener on unmount
    
    if(baseRef.current.getBoundingClientRect().bottom>=0){
      console.log(baseRef.current.getBoundingClientRect().top);
      setTabValue(null);
    } else {
    let isSet=false;
    for(let i=0;i<4;i++){
      const rect=tabRefArray.current[i].getBoundingClientRect();
      if(rect.bottom>=0){
        console.log(rect.top)
        setTabValue(i);
        isSet=true;
        break;
      }
      if(!isSet)
          setTabValue(3);
    }
  }
    
  }, [scrollPosition]);

  // Update state on tab change

  const handleChange = (event, newValue) => {
    scrollToRef(newValue);
  };
  const backgroundBoxSx = {
    flexGrow: 1,
    bgcolor: 'black',
    display: 'flex',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    overflowY: 'scroll',
    overflowX: 'hidden',
    top: 0,
    left: 0,
  };
  const columnSx = {
    border: 'solid',
    BorderColor: 'whitesmoke',
    top: 2000,
    width: '80vw',
    height: '100vh',
  };
  const headings = [
    'About Me',
    'Projects',
    'Work Experience',
    'Resume & Contact',
  ];

  return (
    <Box sx={backgroundBoxSx} ref={canvasRef}>
      <Stack direction={'row'} spacing={25}>
        <VerticalTabs
          headings={headings}
          value={tabValue}
          handleChange={handleChange}
        ></VerticalTabs>
        
        <Stack
          direction={'column'}
          sx={columnSx}
          spacing={'100vh'}
          ref={canvasRef}
        >
          <Stack
            direction={'column'}
            color={'red'}
            width={'80vw'}
            height={'20vh'}
            sx={{ backgroundColor: 'gray' }}
            borderRadius={8}
            ref={baseRef}
          >
            <img
              src="/image.jpeg"
              alt="Circular example"
              className={styles['circular-image']}
            />
            <Stack
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              marginTop={'20vh'}
            >
              <CollapsingText
                text={'Hi, I am Divyanshu'}
                timeInterval={50}
              ></CollapsingText>
              <CollapsingText
                text={'I am a Backend Developer'}
                timeInterval={50}
              ></CollapsingText>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  width: '10vw',
                  position: 'relative',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
                onClick={() => {scrollToRef(0);}}
                startIcon={<KeyboardDoubleArrowDownIcon />}
              >
                Hello
              </Button>
            </Stack>
          </Stack>

          {headings.map((element, index) => {
            return (
              <Stack
                direction={'column'}
                color={'red'}
                width={'80vw'}
                // minHeight={'100vh'}
                sx={{ backgroundColor: 'gray' }}
                borderRadius={8}
                border={'1px solid grey'}
                // overflow={'auto'}
                // border: {'1px solid grey'}, // Optional, for visual debugging
                // overflow: {'auto'}, // Handle overflow if content exceeds 
                // justifyContent={'center'}
                alignItems={'top'}
                marginTop={'0vh'}
              >
              <Typography
                variant="h1"
                textAlign={'center'}
                color={'Blue'}
                
                ref={(el) => {
                  tabRefArray.current[index] = el;
                }}
              >
                {element}
              </Typography>
              <Typography        fontFamily={"Monteserrat"}         variant="h4"
color={'white'} align='center'>
              I am Divyanshu Mathpal, a passionate software engineer and graduate student pursuing a Master of Science in Computer Science at New York University. With a strong foundation in computer science from IIT Ropar and professional experience as a Software Engineer at Arista Networks, I have developed expertise in designing scalable systems, optimizing performance, and leading teams to deliver impactful solutions.

Throughout my career, I have engineered innovative solutions, such as a microservice architecture that reduced page load times by 98%, and co-founded a mobile app, Khatepay, which achieved 1,000+ downloads within its first week. My technical toolkit spans programming languages like Python, Go, and Dart, frameworks such as React and Django, and container technologies like Docker and Kubernetes.

Beyond work, I enjoy teaching and mentoring students, currently serving as a Teaching Assistant for Algorithmic Problem Solving at NYU. I thrive on solving challenging problems, collaborating on impactful projects, and contributing to the tech community.
              </Typography>
              </Stack>
            );
          })}
          </Stack>
        </Stack>

    </Box>
  );
}

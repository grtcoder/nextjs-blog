import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

export default function CollapsingText({ text, timeInterval }): JSX.Element {
  const [displayString, setDisplayString] = useState('');
  const [ind, setInd] = useState(0);

  useEffect(() => {
    if (displayString.length != text.length)
      setTimeout(() => {
        setDisplayString((currString) => (currString += text[ind]));
        setInd(ind + 1);
      }, timeInterval);
  }, [displayString]);

  return (
    <Typography
      textAlign={'center'}
      color={'white'}
      fontFamily={'Monteserrat'}
      fontSize={'5vh'}
    >
      {displayString}
    </Typography>
  );
}

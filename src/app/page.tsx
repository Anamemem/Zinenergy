import Image from 'next/image'
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import CardCollection from "../../src/app/component/productCard"

export default function Home() {
  return (
    <><Box width="100%" height="auto" position="relative">
      <img
        src="backgroundzin.png"
        alt="Your Image"
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
        }} />
    <Typography
        variant="h5"
        component="div"
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '20px',
          color: '#ffffff',
        }}
      >
       No Gibberish - Let’s get you <br />
moving on the Right motion track
      </Typography>
    </Box>
    
    <Box
    height={{xs:"100vh", md: "40vh", sm: "50vh"}}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
     
      }}
    >
      <Stack spacing={10} direction={{xs: "column", md: "row", sm: "row"}}>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
         

     <h2>8+</h2> <Typography fontSize="16px">No Gibberish - Let’s <br />
get you moving on
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
           
          }}
        >
          <h2>24+</h2> <Typography fontSize="16px">No Gibberish - Let’s <br />
get you moving on
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
        
          }}
        >
           <h2>5+</h2> <Typography fontSize="16px">No Gibberish - Let’s <br />
get you moving on
          </Typography>
        </Box>
      </Stack>
    </Box>
    <Box
      sx={{
       
       paddingTop: "40px",
        alignItems: "center",
        backgroundColor: "#EDEDED",
        height: "100vh", // Set the height to full viewport height
      }}
      px={{md: "50px", xs: "10px"}}
    >
      <Box
          sx={{
            textAlign: "center",
        
          }}
        >
          <Typography  fontWeight="700" fontSize={{xs: "1.5rem", md: "4rem"}}>Product and services
          </Typography>
        </Box>
        <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      
      }}
     
      mt={10}
    >
    
      <CardCollection />
  
    </Box>
    <Box  mt={2} >

    <Typography> Latest transactions</Typography>
   
        <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      backgroundColor: "white",
      height: "50vh",
      marginTop: "40px",
      }}
     
     
    >
    
     <Typography>No transactions yet</Typography>
  
    </Box>
    </Box>
    </Box>
 
    </>
     )
}

import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Mentor } from '@/interfaces/mentor'
import { ScrollLink } from 'react-scroll'
import { StyledButton } from '../styled-button'
import { height } from '@mui/system'
import Link from 'next/link'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            height: 200,
            mb: 2,
          }}
        >
          <img style={{ width: '100%', height: '100%' }} src={item.photo as string} alt={'Img ' + item.id} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem' }}>
            {item.name}
          </Typography>

          <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
            {item.description}
          </Typography>
          <Box sx={{ '& img': { height: 26 } }}>
            {/* eslint-disable-next-line */}
            {/* <img src={item.company?.logo} alt={item.company?.name + ' logo'} /> */}
            {/* <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}> */}
            <StyledButton color="primary" size="large" variant="outlined">
              <Link href={item.link}>View</Link>
            </StyledButton>
            {/* </ScrollLink> */}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default MentorCardItem

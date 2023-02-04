import React, { FC, useRef } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
// import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { TestimonialItem } from '@/components/testimonial'
import { data } from './testimonial.data'
import styles from '../../styles/faq.module.css'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-28px !important', md: '64px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '90px !important' : '30px !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledSlickContainer = styled('div')(() => ({
  position: 'relative',

  '& .slick-list': { marginLeft: '-30px', marginBottom: '24px' },
}))

const HomeTestimonial: FC = () => {
  const sliderRef = useRef(null)

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
  }

  return (
    <Box id="testimonial" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: '' }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 36, md: 46 },
                mt: { xs: 7, md: 7 },
                mb: 4,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              FAQ{' '}
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={6} sx={{ display: { md: 'block' } }}>
            <Box sx={{ width: { xs: '100%', md: '90%' } }}>
              {/* <Image src="/images/home-testimonial.png" width={520} height={540} quality={97} alt="Testimonial img" /> */}
              <div>
                <Accordion className={styles.accordian}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordian}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography>Accordion 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordian}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                    <Typography>Accordion 3</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordian}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
                    <Typography>Accordion 4</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordian}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
                    <Typography>Accordion 5</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeTestimonial

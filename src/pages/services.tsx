import React, { FC, useRef } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Container from '@mui/material/Container'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styles from '../styles/service.module.css'
export default function services() {
  return (
    <div>
      <div className={styles.header}>
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
          Services{' '}
        </Typography>
      </div>

      <Box id="services" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: '#f2f2f2' }}>
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
                Experential Learning{' '}
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sm={6} sx={{ display: { md: 'block' } }}>
              <Box sx={{ width: { xs: '100%', md: '90%' } }}>
                {/* <Image src="/images/home-testimonial.png" width={520} height={540} quality={97} alt="Testimonial img" /> */}
                <div>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <Typography>Accordion 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4a-content"
                      id="panel4a-header"
                    >
                      <Typography>Accordion 4</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5a-content"
                      id="panel5a-header"
                    >
                      <Typography>Accordion 5</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="services" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: '#f2f2f2' }}>
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
                Virtual Experience{' '}
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sm={6} sx={{ display: { md: 'block' } }}>
              <Box sx={{ width: { xs: '100%', md: '90%' } }}>
                {/* <Image src="/images/home-testimonial.png" width={520} height={540} quality={97} alt="Testimonial img" /> */}
                <div>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <Typography>Accordion 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4a-content"
                      id="panel4a-header"
                    >
                      <Typography>Accordion 4</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5a-content"
                      id="panel5a-header"
                    >
                      <Typography>Accordion 5</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="services" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: '#f2f2f2' }}>
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
                Psychometric Tests{' '}
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sm={6} sx={{ display: { md: 'block' } }}>
              <Box sx={{ width: { xs: '100%', md: '90%' } }}>
                {/* <Image src="/images/home-testimonial.png" width={520} height={540} quality={97} alt="Testimonial img" /> */}
                <div>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <Typography>Accordion 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4a-content"
                      id="panel4a-header"
                    >
                      <Typography>Accordion 4</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={styles.accordian}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5a-content"
                      id="panel5a-header"
                    >
                      <Typography>Accordion 5</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

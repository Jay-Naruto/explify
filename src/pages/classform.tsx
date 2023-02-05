import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import styles from '../styles/form.module.css'
import { Grid, Typography, Box, Container } from '@mui/material'

type UserSubmitForm = {
  name: string
  board: string
  strength: string
  location: string
  contact: string
  details: string
}
export default function schoolform() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    board: Yup.string().required('Board is required'),

    // strength: Yup.string().required('Email is required').email('Email is invalid'),
    strength: Yup.string().required('Strength is required'),

    location: Yup.string().required('Location is required'),
    contact: Yup.string().required('Contact is required'),
    details: Yup.string().required('Details is required'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2))
  }
  return (
    <div className={styles.form}>
      <div className={styles.wrap}>
        <img className={styles.svg} src="./doodle.png"></img>

        <img className={styles.svg} src="./doodle2.png"></img>

        <img className={styles.svg} src="./doodle3.png"></img>

        <img className={styles.svg} src="./doodle4.png"></img>

        <img className={styles.svg} src="./doodle.png"></img>

        <img className={styles.svg} src="./doodle2.png"></img>

        <img className={styles.svg} src="./doodle3.png"></img>

        <img className={styles.svg} src="./doodle4.png"></img>
        <img className={styles.svg} src="./doodle.png"></img>

        <img className={styles.svg} src="./doodle2.png"></img>
      </div>
      <div className={styles.header}></div>
      <Box id="form1" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: '' }}>
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
                Join Us{' '}
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
              <Box sx={{ width: '100%' }}>
                <img
                  style={{ width: '100%' }}
                  src="https://rainbowclasseshisar.com/wp-content/uploads/2020/04/rainbow-classes-jee-preparation-after-class-10th.jpg"
                  alt=""
                  className={styles.sideImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sm={6} sx={{ display: { md: 'block' } }}>
              <Box sx={{ width: { xs: '100%', md: '90%' } }}>
                {/* <Image src="/images/home-testimonial.png" width={520} height={540} quality={97} alt="Testimonial img" /> */}
                <div>
                  <div>
                    <div>
                      <div className="register-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="form-group">
                            <label>Full Name</label>
                            <input
                              type="text"
                              {...register('name')}
                              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.name?.message}</div>
                          </div>

                          {/* <div className="form-group">
                            <label>Board</label>
                            <input
                              type="text"
                              {...register('board')}
                              className={`form-control ${errors.board ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.board?.message}</div>
                          </div> */}

                          <div className="form-group">
                            <label>Strength</label>
                            <input
                              type="text"
                              {...register('strength')}
                              className={`form-control ${errors.strength ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.strength?.message}</div>
                          </div>

                          <div className="form-group">
                            <label>Location</label>
                            <input
                              type="text"
                              {...register('location')}
                              className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.location?.message}</div>
                          </div>
                          <div className="form-group">
                            <label>Details</label>
                            <input
                              type="text"
                              {...register('details')}
                              className={`form-control ${errors.details ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.details?.message}</div>
                          </div>

                          <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                              Register
                            </button>
                            <button type="button" onClick={() => reset()} className="btn btn-warning float-right">
                              Reset
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

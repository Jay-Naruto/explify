import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import styles from '../styles/form.module.css'
import { Grid, Typography, Box, Container } from '@mui/material'

type UserSubmitForm = {
  fullname: string
  username: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
}
export default function schoolform() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
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
      <div className={styles.header}></div>
      <Box id="form1" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: '#f2f2f2' }}>
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
                  src="https://education.maharashtra.gov.in/images/school-icon.png"
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
                              {...register('fullname')}
                              className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.fullname?.message}</div>
                          </div>

                          <div className="form-group">
                            <label>Username</label>
                            <input
                              type="text"
                              {...register('username')}
                              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                          </div>

                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="text"
                              {...register('email')}
                              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                          </div>

                          <div className="form-group">
                            <label>Password</label>
                            <input
                              type="password"
                              {...register('password')}
                              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                          </div>
                          <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                              type="password"
                              {...register('confirmPassword')}
                              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                          </div>

                          <div className="form-group form-check">
                            <input
                              type="checkbox"
                              {...register('acceptTerms')}
                              className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`}
                            />
                            <label htmlFor="acceptTerms" className="form-check-label">
                              I have read and agree to the Terms
                            </label>
                            <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
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

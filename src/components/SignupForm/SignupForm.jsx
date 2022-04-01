import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
 
  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
          style={{width: '200px'}}
          placeholder='Full Name'
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
          style={{width: '200px'}}
          placeholder='Please Enter Your Email'
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
          style={{width: '200px'}}
          placeholder='Enter A Secure Password'
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
          style={{width: '200px'}}
          placeholder='Confirm Password'
        />
      </div>
      <div className={styles.buttonContainer}>
        <button disabled={isFormInvalid()} className={styles.signupButton}>
          Sign Up
        </button>
        <Link to="/">
          <button
          className={styles.cancelButton}
          >Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default SignupForm

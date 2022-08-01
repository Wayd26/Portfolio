import React, { useState } from 'react';
import './ContactForm.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { send } from 'emailjs-com';
import Swal from 'sweetalert2';
import { validateEmail } from '../../utils/utils';

const useStyles = makeStyles((theme) => ({
  email: {
    '& > *': {
      marginBottom: theme.spacing(2),
      backgroundColor: '#3b4353',
      color: 'white',
      '&:hover': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.Mui-focused': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.MuiFilledInput-underline:before': {
        borderBottom: '2px solid #6f7b9b',
      },
      '&.MuiFilledInput-underline:after': {
        borderBottom: '2px solid #258b9e',
      },
    },
  },
  message: {
    '& > *': {
      marginBottom: theme.spacing(2),
      backgroundColor: '#3b4353',
      color: 'white',
      '&:hover': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.Mui-focused': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.MuiFilledInput-underline:before': {
        borderBottom: '2px solid #6f7b9b',
      },
      '&.MuiFilledInput-underline:after': {
        borderBottom: '2px solid #258b9e',
      },
    },
  },
  submit: {
    '&': {
      backgroundColor: '#39b175',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#6de9ab',
        boxShadow: 'none',
      },
    },
    '& > *': {
      color: 'white',
      fontSize: '15px',
      fontWeight: '600',
    },
  },
}))

const ContactForm = () => {

  const SERVICE_ID = "service_6z2ospj";

  const TEMPLATE_ID = "template_gjxsw8u";

  const USER_ID = "Nxv4q9B1yTE6Nhafj";

  const RECIPIENT = "Wassiou Ayedoun"

  const [data, setData] = useState({ user_name: "", user_email: "", message: "" })
  const [status, setStatus] = useState("")

  const classes = useStyles()

  const handleOnSubmit = () => {

    const fieldEmpty = data.user_name === "" || data.user_email === "" || data.message === "";
    const emailIsInvalid = validateEmail(data.user_email) === false
    if (fieldEmpty || emailIsInvalid) {

      if (fieldEmpty) {
        setStatus("ERROR_EMPTY_FIELD")
      } else if (emailIsInvalid) {
        setStatus("ERROR_EMAIL_INVALID")
      }
      setTimeout(() => {
        setStatus("")
      }, 5000);
    } else {

      const messageParams = {
        to_name: RECIPIENT,
        from_name: data.user_name + "(" + data.user_email + ")",
        message: data.message
      }

      send(
        SERVICE_ID,
        TEMPLATE_ID,
        messageParams,
        USER_ID
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully.'
          })
        })
        .catch((err) => {
          console.log('FAILED...', err);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong. Please try later or join me through LinkedIn.',
            text: err.text,
          })
        });

      setData({ ...data, user_name: "", user_email: "", message: "" })

    }

  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-form-wrapper">
      {status === 'ERROR_EMPTY_FIELD' && <p style={{ textAlign: 'center', color: 'red' }}>All the fields are required.</p>}
      <form
        className="contact-form"
      >
        <TextField
          className={classes.email}
          type="text"
          name="user_name"
          label="Name"
          value={data.user_name}
          onChange={handleInputChange}
          variant="filled"
        />
        <TextField
          className={classes.email}
          type="email"
          name="user_email"
          label="Email"
          value={data.user_email}
          onChange={handleInputChange}
          variant="filled"
        />
        {status === "ERROR_EMAIL_INVALID" && <div style={{ textAlign: 'center', color: 'red' }}>This email is invalid.</div>}


        <TextField
          className={classes.message}
          type="text"
          name="message"
          label="Message"
          value={data.message}
          onChange={handleInputChange}
          multiline
          rows="5"
          variant="filled"
        />
        {/* {status === 'SUCCESS' ? (
          <p className="email-success">Thanks!</p>
        ) : ( */}
        <Button className={classes.submit} onClick={handleOnSubmit} variant="contained">
          Submit
        </Button>
        {/* )}
        {status === 'ERROR' && <p>Ooops! There was an error.</p>} */}
      </form>
    </div>
  )
}

export default ContactForm

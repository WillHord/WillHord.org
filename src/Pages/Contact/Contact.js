import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import TopMenu from '../../components/topMenu/Menu'

import "bootstrap/dist/css/bootstrap.css";
import './Contact.css'

const LoginSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    message: Yup.string()
      .required("Message is required")
  });


class Contact extends React.Component{
    render(){
        return (
            <>
            <TopMenu color='white' lead={true} backgroundColor={'#282E34'} burgerColor={'black'}/>
            <div className='contactFormBody'>
                <div className='contactForm'>
                    <div className='Title'>
                        <h2>Contact</h2>
                    </div>
                    <hr className='divider'/>
                    <Formik
                    initialValues={{ name: "", email: "", message: "" }}
                    validationSchema={LoginSchema}
                    onSubmit={({ setSubmitting }) => {
                        alert("Form is validated! Submitting the form...");
                        setSubmitting(false);
                    }}
                    >
                    {({ touched, errors, isSubmitting }) => (
                        <Form className="ContactForm">
                        <div className="form-group form-control-inline">
                            <label htmlFor="name">Name</label>
                            <Field
                            type="name"
                            name="name"
                            placeholder="Enter name"
                            className={`form-control ${
                                touched.name && errors.name ? "is-invalid" : ""
                            }`}
                            />
                            <ErrorMessage
                            component="div"
                            name="name"
                            className="invalid-feedback"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            className={`form-control ${
                                touched.email && errors.email ? "is-invalid" : ""
                            }`}
                            />
                            <ErrorMessage
                            component="div"
                            name="email"
                            className="invalid-feedback"
                            />
                        </div>

                        <div className="form-group" >
                            <label htmlFor="message">Message</label>
                            <Field
                            type="message"
                            name="message"
                            as='textarea'
                            placeholder="Enter Message"
                            className={`form-control ${
                                touched.message && errors.message ? "is-invalid" : ""
                            }`}
                            rows='3'
                            // style={{height:'100%'}}
                            />
                            <ErrorMessage
                            component="div"
                            name="message"
                            className="invalid-feedback"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Please wait..." : "Submit"}
                        </button>
                        </Form>
                    )}
                    </Formik>
                </div>
            </div>
            </>
        )
    }
}

export default Contact;

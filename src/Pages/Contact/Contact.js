import React from 'react';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


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

  const API_PATH = '/api/Contact/Contact.php';


class Contact extends React.Component{
    constructor(props){
        super (props);
        this.state = {
            name: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log(values.name);
        console.log(values.email);
        console.log(values.message);

        this.setState({name: values.name});
        this.setState({email: values.email});
        this.setState({message: values.message});

        // event.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
            this.setState({
              mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ error: error.message }));
      };


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
                    onSubmit={(values, {setSubmitting}) => {
                        // console.log(values.email)
                        this.handleSubmit(values);
                        setSubmitting(false);
                        
                    }}
                    >
                    {({ values, touched, errors, isSubmitting }) => (
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
                            // onClick={() => console.log(values.name)}
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

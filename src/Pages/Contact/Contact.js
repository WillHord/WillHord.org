import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import TopMenu from "../../components/topMenu/Menu";

import "bootstrap/dist/css/bootstrap.css";
import "./Contact.css";

const LoginSchema = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	email: Yup.string()
		.email("Invalid email address format")
		.required("Email is required"),
	message: Yup.string().required("Message is required"),
});

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			message: "",
			mailSent: false,
			error: null,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		document.getElementsByTagName("body")[0].className = "contactBody";
	}

	componentWillUnmount() {
		document.getElementsByTagName("body")[0].className = "";
	}

	handleSubmit = (e) => {
		axios({
			method: "post",
			url: "https://test.willhord.org/api/Contact/",
			headers: { "content-type": "application/json" },
			data: this.state,
		})
			.then((result) => {
				this.setState({
					mailSent: result.data.sent,
				});
				console.log("Form Sent!");
			})
			.catch((error) => {
				this.setState({ error: error.message });
			});
	};

	render() {
		return (
			<>
				<TopMenu
					color="white"
					lead={true}
					backgroundColor={"#292a2c"}
					burgerColor={"white"}
				/>
				<div className="contactFormBody">
					<div className="contactForm">
						<div className="Title">
							<h2>Contact</h2>
						</div>
						<hr className="divider" />
						<Formik
							initialValues={{ name: "", email: "", message: "" }}
							validationSchema={LoginSchema}
							onSubmit={(values, { setSubmitting, resetForm }) => {
								this.setState({ name: values.name });
								this.setState({ email: values.email });
								this.setState({ message: values.message });

								this.handleSubmit();
								resetForm({ values: "" });
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

									<div className="form-group">
										<label htmlFor="message">Message</label>
										<Field
											type="message"
											name="message"
											as="textarea"
											placeholder="Enter Message"
											className={`form-control ${
												touched.message && errors.message ? "is-invalid" : ""
											}`}
											rows="3"
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
		);
	}
}

export default Contact;

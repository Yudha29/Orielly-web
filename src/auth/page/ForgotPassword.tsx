import React from 'react';
import * as Yup from 'yup';
import {Form, Formik} from 'formik';
import TextInput from "../../common/component/form/formik/textInput/TextInput";
import Button from "../../common/component/button/Button";
import {Helmet} from "react-helmet";

class ForgotPassword extends React.Component<any, any> {
    initVal = {email: ''};
    valSchema = Yup.object({email: Yup.string().email('Please enter valid email').required('Please enter your email')});

    render() {
        return (
            <>
                <Helmet>
                    <title>Forgot Password</title>
                </Helmet>
                <div className="shadow-md w-96 rounded-md mx-auto mt-36 bg-white p-8 relative">
                    <p
                        className="absolute quick-sand text-4xl orielly-text-orange-700 font-bold"
                        style={{
                            top: -70,
                            left: '50%',
                            transform: 'translateX(-50%)'
                        }}
                    >
                        O'rielly
                    </p>
                    <div className="mb-8">
                        <h1 className="quick-sand text-gray-700 text-3xl font-bold mb-3">Forgot Password</h1>
                        <p className="text-gray-500 text-sm">We will send the verification code to your email</p>
                    </div>
                    <Formik
                        initialValues={this.initVal}
                        validationSchema={this.valSchema}
                        onSubmit={values => console.log(values)}
                    >
                        <Form>
                            <TextInput
                                name="email"
                                label="Email"
                                placeholder="Enter your email"
                            />
                            <div className="mt-4">
                                <Button
                                    type="submit"
                                    className="orielly-bg-orange-700 text-white rounded-full"
                                >
                                    Get verification code
                                </Button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </>
        );
    }
}

export default ForgotPassword;
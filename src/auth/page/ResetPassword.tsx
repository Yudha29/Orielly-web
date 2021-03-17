import React from 'react';
import * as Yup from 'yup';
import {Form, Formik} from 'formik';
import Button from "../../common/component/button/Button";
import PassInput from "../../common/component/form/formik/passInput/PassInput";
import {Helmet} from "react-helmet";

class ResetPassword extends React.Component<any, any> {
    initVal = {password: '', confirmPassword: ''};
    valSchema = Yup.object({
        password: Yup.string().min(8, 'Password length is less than 8 character').required('Please enter your password'),
        confirmPassword: Yup
            .string()
            .oneOf([Yup.ref('password'), null], 'Password confirmation not match')
            .required('Please reenter your password')
    });

    render() {
        return (
            <>
                <Helmet>
                    <title>Reset Password</title>
                </Helmet>
                <div className="shadow-md w-96 rounded-md mx-auto mt-36 bg-white p-8 relative">
                    <p
                        className="absolute quick-sand text-4xl orielly-text-primary font-bold"
                        style={{
                            top: -70,
                            left: '50%',
                            transform: 'translateX(-50%)'
                        }}
                    >
                        O'rielly
                    </p>
                    <div className="mb-8">
                        <h1 className="quick-sand text-gray-700 text-3xl font-bold mb-3">Reset Password</h1>
                        <p className="text-gray-500 text-sm">Please Enter and confirm your new password</p>
                    </div>
                    <Formik
                        initialValues={this.initVal}
                        validationSchema={this.valSchema}
                        onSubmit={values => console.log(values)}
                    >
                        <Form>
                            <PassInput
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                            />
                            <PassInput
                                name="confirmPassword"
                                label="Confirm Password"
                                placeholder="Enter your password again"
                            />
                            <div className="mt-4">
                                <Button
                                    type="submit"
                                    className="orielly-bg-primary text-white rounded-md w-full"
                                >
                                    Reset Password
                                </Button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </>
        );
    }
}

export default ResetPassword;
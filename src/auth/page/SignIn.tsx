import React from "react";
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import TextInput from "../../common/component/form/formik/textInput/TextInput";
import PassInput from "../../common/component/form/formik/passInput/PassInput";
import Link from "../../common/component/navigation/link/Link";
import Button from "../../common/component/button/Button";
import {Helmet} from "react-helmet";

class SignIn extends React.Component<any, any> {
    initVal = {email: '', password: ''}
    validSchema = Yup.object({
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    render() {
        return (
            <>
                <Helmet>
                    <title>Sign In</title>
                </Helmet>
                <div
                    className="shadow-md rounded-md mx-auto mt-36 bg-white relative"
                    style={{
                        width: 950,
                    }}
                >
                    <p
                        className="absolute quick-sand text-4xl orielly-text-primary font-bold"
                        style={{
                            top: -70,
                            left: '2rem'
                        }}
                    >
                        O'rielly
                    </p>
                    <div className="flex">
                        <div className="w-5/12 p-8 rounded-l-sm">
                            <div className="text-right mb-8">
                                <Link
                                    to="/"
                                    className="text-right text-sm"
                                >
                                    Skip
                                </Link>
                            </div>
                            <div className="mb-8">
                                <h1 className="quick-sand text-gray-700 text-3xl font-bold mb-3">Sign in</h1>
                                <p className="text-gray-500 text-sm">
                                    Don't have account
                                    <Link
                                        to="/signup"
                                        className="ml-1"
                                    >
                                        sign up
                                    </Link>
                                </p>
                            </div>
                            <Formik
                                initialValues={this.initVal}
                                validationSchema={this.validSchema}
                                onSubmit={(values) => console.log(values)}
                            >
                                <Form>
                                    <TextInput
                                        name="email"
                                        label="Email / Phone number"
                                        placeholder="Enter your Email / Phone number"
                                    />
                                    <div className="mb-4">
                                        <PassInput
                                            name="password"
                                            label="Password"
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                    <div className="flex items-center mb-8">
                                        <div className="w-6/12">
                                            <Button
                                                type="submit"
                                                className="orielly-bg-primary w-full text-white rounded-md"
                                            >
                                                Sign in
                                            </Button>
                                        </div>
                                        <div className="text-center w-6/12">
                                            <Link
                                                to="/forgot"
                                                className="text-sm"
                                            >
                                                Forgot Password
                                            </Link>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                        <div className="w-7/12 overflow-hidden rounded-r-sm relative">
                            <div
                                className="absolute top-0 right-0 left-0 bottom-0 w-full"
                                style={{
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundImage: 'url(/assets/signin-signup-photo.jpg)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SignIn;
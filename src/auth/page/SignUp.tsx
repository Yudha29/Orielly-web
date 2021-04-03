import React from "react";
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import TextInput from "../../common/component/form/formik/textInput/TextInput";
import PassInput from "../../common/component/form/formik/passInput/PassInput";
import Link from "../../common/component/navigation/link/Link";
import Button from "../../common/component/button/Button";
import {Helmet} from "react-helmet";

class SignUp extends React.Component<any, any> {
    initVal = {email: '', name: '', password: ''}
    validSchema = Yup.object({
        email: Yup.string().email('please enter valid email').required('Please enter your email'),
        name: Yup.string().required('Please enter your name'),
        password: Yup.string().min(8, 'Password length is less than 8 character').required('Please enter your password')
    });

    render() {
        return (
            <>
                <Helmet>
                    <title>Sign Up</title>
                </Helmet>
                <div
                    className="shadow-md rounded-md mx-auto mt-36 bg-white relative"
                    style={{width: 950}}
                >
                    <div
                      className="absolute"
                      style={{
                          top: -70,
                          left: '2rem'
                      }}
                    >
                        <Link to="/">
                            <img
                              className="w-36 -mt-5"
                              src="/assets/logo-light.png"
                              alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="flex">
                        <div className="w-5/12 p-8 rounded-l-sm my-4">
                            <div className="mb-8">
                                <h1 className="quick-sand text-gray-700 text-3xl font-bold mb-3">Sign Up</h1>
                                <p className="text-gray-500 text-sm">
                                    Have account?
                                    <Link
                                        to="/signin"
                                        className="ml-1"
                                    >
                                        sign in
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
                                        label="Email"
                                        placeholder="Enter your Email"
                                    />
                                    <TextInput
                                        name="name"
                                        label="Name"
                                        placeholder="Enter your name"
                                    />
                                    <div className="mb-4">
                                        <PassInput
                                            name="password"
                                            label="Password"
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="orielly-bg-primary w-full text-white rounded-md"
                                    >
                                        Sign up
                                    </Button>
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

export default SignUp;
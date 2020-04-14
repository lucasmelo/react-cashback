import React from 'react';
import '../../global.css';
import './style.css';
// import cashBackImg from '../../assets/cashback.svg';
import logo from '../../assets/logo.png'
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';
import * as yup from 'yup';

export default function Login() {
    const history = useHistory();
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    const validations = yup.object().shape({
        email: yup
            .string()
            .required('Campo obrigatório')
            .min(5, 'E-mail invalido')
            .matches('@', 'E-mail inválido')
            .test('test-email', 'E-mail não cadastrado', value => value === email),
        password: yup
            .string()
            .required('Campo obrigatório')
            .min(4, 'Sua senha deve ter 4 caracteres')
            .test('test-password', 'Senha incorreta', value => value === password),
    })

    const handleLogin = value => {
        history.push('/shopping')
    }

    return (
        <div className="login-container">
            <section className="form">

                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <h1> Faça seu login</h1>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => handleLogin(values)}
                    validationSchema={validations}>

                    {({ errors, touched }) => (
                        <FormikForm>

                            <Field
                                name="email"
                                placeholder="E-mail"
                                className={touched.email && errors.email ? 'input-error' : 'input'}
                            />
                            <ErrorMessage component="span" name="email" className="error-message" />

                            <Field
                                name="password"
                                placeholder="Senha"
                                className={touched.password && errors.password ? 'input-error' : 'input'}
                            />
                            <ErrorMessage component="span" name="password" className="error-message" />

                            <Link to="/register" className="back-link">
                                <FiLogIn size="16" color="#41414d" style={{ marginRight: '5px' }} />
                                Não tenho um cadastro
                            </Link>
                            <button className="button" type="submit">CONTINUAR</button>

                        </FormikForm>
                    )}
                </Formik>
            </section>
            {/* <img src={cashBackImg} alt="Cash Back" /> */}

        </div>
    );
}
import React from 'react';
import '../../global.css';
import './style.css';
// import cashBackImg from '../../assets/cashback.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';
import * as yup from 'yup';
import logo from '../../assets/logo.png'


export default function Register() {

    const history = useHistory();

    const validations = yup.object().shape({
        name: yup
            .string()
            .required('Campo obrigatório')
            .min(3, 'Insira o nome completo')
            .matches(' ', 'Insira o nome completo'),
        cpf: yup
            .string()
            .required('Campo obrigatório')
            .min(11, 'Insira o cpf completo'),
        email: yup
            .string()
            .required('Campo obrigatório')
            .min(5, 'Insira o email completo')
            .matches('@', 'E-mail inválido'),
        password: yup
            .string()
            .required('Campo obrigatório')
            .min(4, 'A senha deve ter no mínimo 4 caracteres')
    })

    const handleSubmit = values => {
        localStorage.clear();
        localStorage.setItem('username', values.name.toUpperCase());
        localStorage.setItem('cpf', values.cpf);
        localStorage.setItem('email', values.email);
        localStorage.setItem('password', values.password);
        history.push('/');
    };

    return (
        <div className="register-container">
            <section className="form">

                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <h1> Faça seu cadastro</h1>


                <Formik initialValues={{ name: '', cpf: '', email: '', password: '' }} onSubmit={(values) =>
                    handleSubmit(values)} validationSchema={validations}>
                    {({ errors, touched }) => (
                        <FormikForm>

                            <Field
                                name="name"
                                placeholder="Nome completo"
                                className={touched.name && errors.name ? 'input-error' : 'input'}
                            />
                            <ErrorMessage component="span" name="name" className="error-message" />

                            <Field
                                name="cpf"
                                placeholder="CPF"
                                className={touched.cpf && errors.cpf ? 'input-error' : 'input'}
                            />
                            <ErrorMessage component="span" name="cpf" className="error-message" />

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

                            <button className="button" type="submit">CADASTRAR</button>

                            <Link to="/" className="back-link">
                                <FiArrowLeft size={17} color="#41414d" style={{ marginRight: '5px' }} />
                                Voltar para a home
                            </Link>

                        </FormikForm>
                    )}
                </Formik>

            </section>

            {/* <img src={cashBackImg} alt="Cash Back" /> */}

        </div>
    );
}
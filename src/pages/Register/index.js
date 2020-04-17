import React from 'react';
import '../../global.css';
import './style.css';
// import cashBackImg from '../../assets/cashback.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';
import * as yup from 'yup';
import logo from '../../assets/logo.png';
import MaskedInput from 'react-text-mask'
import emailMask from 'text-mask-addons/dist/emailMask'

export default function Register() {

    const history = useHistory();

    const validations = yup.object().shape({
        username: yup
            .string()
            .required('Campo obrigatório')
            .min(3, 'Insira o nome completo')
            .matches(' ', 'Insira o nome completo'),
        cpf: yup
            .string()
            .required('Campo obrigatório')
            .min(14, 'Insira o cpf completo'),
        email: yup
            .string()
            .required('Campo obrigatório')
            .min(7, 'Insira o email completo')
            .matches('@', 'E-mail inválido')
            .matches('.', 'E-mail inválido'),
        password: yup
            .string()
            .required('Campo obrigatório')
            .min(4, 'A senha deve ter no mínimo 4 caracteres')
    })

    const handleSubmit = values => {
        localStorage.clear();
        const fields = ['username', 'cpf', 'email', 'password'];

        fields.forEach(e => {
            localStorage.setItem(e, values[e]);
        });



        history.push('/');
    };

    return (
        <div className="register-container">
            <section className="form">

                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <h1> Faça seu cadastro</h1>


                <Formik initialValues={{ username: '', cpf: '', email: '', password: '' }} onSubmit={(values) =>
                    handleSubmit(values)} validationSchema={validations}>
                    {({ errors, touched }) => (
                        <FormikForm>

                            <Field
                                name="username"
                                placeholder="Nome completo"
                                className={touched.username && errors.username ? 'input-error' : 'input'}
                            />
                            <ErrorMessage component="span" name="username" className="error-message" />

                            <Field name="cpf" maxLength={11}>
                                {({ field }) => (
                                    <MaskedInput
                                        guide={false}
                                        mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                                        {...field}
                                        placeholder="CPF"
                                        className={touched.cpf && errors.cpf ? 'input-error' : 'input'}
                                    />
                                )}
                            </Field>

                            <ErrorMessage component="span" name="cpf" className="error-message" />

                            <Field name="email" maxLength={30}>
                                {({ field }) => (
                                    <MaskedInput
                                        guide={false}
                                        mask={emailMask}
                                        {...field}
                                        placeholder="Email"
                                        className={touched.email && errors.email ? 'input-error' : 'input'}
                                    />
                                )}
                            </Field>
                            <ErrorMessage component="span" name="email" className="error-message" />


                            <Field
                                name="password"
                                type="password"
                                placeholder="Senha"
                                maxLength={4}
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
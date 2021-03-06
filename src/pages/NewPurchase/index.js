import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';
import * as yup from 'yup';
import './style.css'
import logo from '../../assets/img/logo.png';
import { FiLogIn } from 'react-icons/fi';
import { addItems } from '../../mocks/items.mock'
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import DateValidator from '../../assets/DateValidator/date.validator'

export const NewPurchase = () => {
    const history = useHistory();

    const validations = yup.object().shape({
        code: yup
            .string()
            .required('Campo obrigatório')
            .min(5, 'Código inválido'),
        value: yup
            .string()
            .required('Campo obrigatório'),
        date: yup
            .string()
            .required('Campo obrigatório')
            .test('test-number', 'Você só pode cadastrar as compras do mês atual', date => DateValidator(date))
    });

    const handleLogin = value => {
        addItems(value);
        history.push('/shopping');
    };

    const numberMask = createNumberMask({
        prefix: 'R$ ',
        suffix: '',
        allowDecimal: true,
        includeThousandsSeparator: false,
        decimalSymbol: ','
    });

    return (
        <div className="purchase-container" >
            <section className="form">
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <h1> Cadastrar nova compra</h1>

                <Formik
                    initialValues={{ code: '', value: '', date: '' }}
                    onSubmit={values => handleLogin(values)}
                    validationSchema={validations}>
                    {({ errors, touched }) => (
                        <FormikForm>
                            <Field
                                data-testid="code"
                                name="code"
                                placeholder="Código da compra"
                                className={touched.code && errors.code ? 'input-error' : 'input'}
                                maxLength={5}
                            />
                            <ErrorMessage component="span" name="code" className="error-message" />

                            <Field name="value" >
                                {({ field }) => (
                                    <MaskedInput
                                        data-testid="value"
                                        guide={false}
                                        mask={numberMask}
                                        {...field}
                                        placeholder="Valor da compra"
                                        className={touched.value && errors.value ? 'input-error' : 'input'}
                                        maxLength={12}
                                    />
                                )}
                            </Field>
                            <ErrorMessage component="span" name="value" className="error-message" />

                            <Field name="date">
                                {({ field }) => (
                                    <MaskedInput
                                        data-testid="date"
                                        guide={false}
                                        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                        {...field}
                                        placeholder="Data da compra"
                                        className={touched.date && errors.date ? 'input-error' : 'input'}
                                    />
                                )}
                            </Field>
                            <ErrorMessage component="span" name="date" className="error-message" />

                            <button className="button" type="submit">Cadastrar</button>

                            <Link to="/shopping" className="back-link">
                                <FiLogIn size="16" color="#41414d" style={{ marginRight: '5px' }} />
                                Voltar para suas compras
                            </Link>
                        </FormikForm>
                    )}
                </Formik>
            </section>
        </div>
    );
}

export default NewPurchase;

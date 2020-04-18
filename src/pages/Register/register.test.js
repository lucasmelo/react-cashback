import React from 'react';
import Register from './index';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Tests for Register component', () => {
    it('Should render and change all Register inputs', async () => {
        const history = createMemoryHistory();
        const { getByTestId } = render(<Router history={history}><Register /></Router>);
        const usernameField = await waitForElement(() => getByTestId('username'));
        const cpfField = await waitForElement(() => getByTestId('cpf'));
        const emailField = await waitForElement(() => getByTestId('email'));
        const passwordField = await waitForElement(() => getByTestId('password'));

        const formRegisterMock = {
            username: 'João Da Silva',
            cpf: '111.111.111-11',
            email: 'joaodasilva@gmail.com',
            password: '3216'
        };

        // username input
        await act(async () => {
            fireEvent.change(getByTestId("username"), {
                target: { value: formRegisterMock.username }
            });
        });
        expect(usernameField.value).toEqual(formRegisterMock.username);

        // cpf input
        await act(async () => {
            fireEvent.change(getByTestId("cpf"), {
                target: { value: formRegisterMock.cpf }
            });
        });
        expect(cpfField.value).toEqual(formRegisterMock.cpf);

        //email input
        await act(async () => {
            fireEvent.change(getByTestId("email"), {
                target: { value: formRegisterMock.email }
            });
        });
        expect(emailField.value).toEqual(formRegisterMock.email);

        // password input
        await act(async () => {
            fireEvent.change(getByTestId("password"), {
                target: { value: formRegisterMock.password }
            });
        });
        expect(passwordField.value).toEqual(formRegisterMock.password);

    })
});
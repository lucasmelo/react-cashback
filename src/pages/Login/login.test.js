import React from 'react';
import Login from './index';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Tests for Login component', () => {
    it('Should render and change all login inputs', async () => {
        const history = createMemoryHistory();
        const { getByTestId } = render(<Router history={history}><Login /></Router>);
        const emailField = await waitForElement(() => getByTestId('email'));
        const passwordField = await waitForElement(() => getByTestId('password'));
        const formLoginMock = { email: 'test@test.com', password: '0514' };

        // email input
        await act(async () => {
            fireEvent.change(getByTestId("email"), {
                target: { value: formLoginMock.email }
            });
        });
        expect(emailField.value).toEqual(formLoginMock.email);

        //password input
        await act(async () => {
            fireEvent.change(getByTestId("password"), {
                target: { value: formLoginMock.password }
            });
        });
        expect(passwordField.value).toEqual(formLoginMock.password);
    })
});
import React from 'react';
import NewPurchase from './index';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Tests for NewPurchase component', () => {
    it('Should render and change all NewPurchase inputs', async () => {
        const history = createMemoryHistory();
        const { getByTestId } = render(<Router history={history}><NewPurchase /></Router>);
        const codeField = await waitForElement(() => getByTestId('code'));
        const valueField = await waitForElement(() => getByTestId('value'));
        const dateField = await waitForElement(() => getByTestId('date'));

        const formPurchaseMock = {
            code: '55421',
            value: 'R$ 115.22',
            date: '15/05/2020',
        };

        // code input
        await act(async () => {
            fireEvent.change(getByTestId("code"), {
                target: { value: formPurchaseMock.code }
            });
        });
        expect(codeField.value).toEqual(formPurchaseMock.code);

        // value input
        await act(async () => {
            fireEvent.change(getByTestId("value"), {
                target: { value: formPurchaseMock.value }
            });
        });
        expect(valueField.value).toEqual(formPurchaseMock.value);

        //date input
        await act(async () => {
            fireEvent.change(getByTestId("date"), {
                target: { value: formPurchaseMock.date }
            });
        });
        expect(dateField.value).toEqual(formPurchaseMock.date);
    })
});
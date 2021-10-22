import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import Form from '../../components/SignIn/Form'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn()
      const { getByTestId } = render(<Form onSubmit={onSubmit} />)

      fireEvent.changeText(getByTestId('username'), 'kalle')
      fireEvent.changeText(getByTestId('password'), 'password')

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
      })
    })
  })
})
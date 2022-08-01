import {useState} from 'react'

import {
  AppContainer,
  PasswordValidatorContainer,
  Heading,
  Description,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const showErrorMessage = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <AppContainer>
      <PasswordValidatorContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {showErrorMessage && (
          <ErrorMessage>
            {' '}
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordValidatorContainer>
    </AppContainer>
  )
}

export default PasswordValidator

// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  ContentContainer,
  LockImage,
  Heading,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setUpdateLocked] = useState(true)
  const onClickUpdateLockStatus = () => {
    setUpdateLocked(prevState => !prevState)
  }

  const imgUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altValue = isLocked ? 'lock' : 'unlock'
  const btnText = isLocked ? 'Unlock' : 'Lock'
  const heading = isLocked ? 'Locked' : 'Unlocked'

  return (
    <AppContainer>
      <ContentContainer>
        <LockImage src={imgUrl} alt={altValue} />
        <Heading>Your Device is {heading}</Heading>
        <Button type="button" onClick={onClickUpdateLockStatus}>
          {btnText}
        </Button>
      </ContentContainer>
    </AppContainer>
  )
}

export default Unlock

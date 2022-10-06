import styled from 'styled-components'
import colors from '../../utils/style/colors'
import {StyledLink} from '../../utils/style/Atoms'
import HomeIllustration from '../../assets/images/home-illustration.svg'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.backgroundLight};
  margin: 0 65px;
  padding: 75px;
  position: relative;
`

const LeftContent = styled.div`
  width: 50%;
`

const RightContent = styled.div`
  width: 50%;
  position: relative;
`

const Illustration = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.h1`
  line-height: 160.5%;
`

function Home() {
    return (
        <Wrapper>
            <LeftContent>
                <Title className={'title'}>Repérez vos besoins,
                    on s’occupe du reste, avec les meilleurs talents</Title>
                <StyledLink to={'/survey/1'} $isFullLink>Faire le test</StyledLink>
            </LeftContent>
            <RightContent>
                <Illustration src={HomeIllustration} alt="home illustration"/>
            </RightContent>

        </Wrapper>
    )
}

export default Home
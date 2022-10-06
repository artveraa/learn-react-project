import Card from '../../components/Card/Card'
import DefaultPicture from '../../assets/images/default-picture.jpeg'
import styled from "styled-components";
import colors from "../../utils/style/colors";

function Freelances() {

    const freelanceProfiles = [
        {
            name: 'Jane Doe',
            jobTitle: 'Devops',
            picture: DefaultPicture,
        },
        {
            name: 'John Doe',
            jobTitle: 'Développeur Front',
            picture: DefaultPicture,
        },
        {
            name: 'Jeanne Biche',
            jobTitle: 'Développeur Fullstack',
            picture: DefaultPicture,
        },
    ]

    const CardContainer = styled.div`
      display: grid;
      gap: 24px;
      grid-template-rows: 350px 350px;
      grid-template-columns: repeat(2, 1fr);
      width: 800px;
      margin: 0 auto;
    `

    const Title = styled.h1`
      text-align: center;
    `

    const Subtitle = styled.p`
      text-align: center;
    `

    return (
        <div>
            <Title>Trouvez votre prestataire</Title>
            <Subtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</Subtitle>
            <CardContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={index}
                        label={profile.jobTitle}
                        title={profile.name}
                        picture={profile.picture}
                    />
                ))}
            </CardContainer>
        </div>
    )
}

export default Freelances
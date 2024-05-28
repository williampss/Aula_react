import{ View, Text } from "react-native"
import{ CardContainer, Container, TitleContainer, TitleText } from './style'
import Page from '../../project_app/assets/images/Group 66pagefundo.png'

function CreativeCard() {
    return (
        <CardContainer>
            <TitleContainer>
                <TitleText>Tatakae</TitleText>
            </TitleContainer>
        </CardContainer>
    );
  }

export function ModalPage(){
    return(
        <Container source={Page} resizeMode="cover">
            <CreativeCard/>
            <CreativeCard/>
            <CreativeCard/>

        </Container>

    )
}
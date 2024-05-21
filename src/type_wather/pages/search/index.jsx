import React from "react";
import { Container,HeaderContainer, HeaderImg, HeaderTitle, Input, SubTitle, TitleColored, TitleContainer, TitleText } from "./style";
import { ImageBackground } from "react-native";
import Background from '../../assets/images/BackgroundFundoImg.png'
import Clound from '../../assets/images/VectorClound.png'

export default function Search(){
  return(
    <Container source={Background} resizeMode="cover">
      <HeaderContainer>
        <HeaderImg source={Clound}/>
        <TextTitle>TypeWeather</TextTitle>
      </HeaderContainer>
      <TitleContainer>
        <TitleText>
          Boas Vindas ao <TitleColored>TypeWather</TitleColored>
        </TitleText>
        <SubTitle>Ecolha um local para previsão de tempo</SubTitle>
      </TitleContainer>
      <Input>Buscar Local</Input>

    </Container>

  );
}
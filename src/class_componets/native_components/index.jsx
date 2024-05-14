
import * as S from "./style"
import React from "react";

function CreativeCard(props) {
  return (
  
    <S.CardContainer>
      <S.CardTitle>{props.title}</S.CardTitle>
      <S.CardSubTitle>{props.desc}</S.CardSubTitle>
    </S.CardContainer>
  );
}

export const  CreativeComponents = React.FC = () => {
  return(
    <S.ImageContainer>
      <CreativeCard title="Titulo" desc="Descrição"/>
      <CreativeCard title="Titulo" desc="Descrição"/>
      <CreativeCard title="Titulo" desc="Descrição"/>
      <CreativeCard title="Titulo" desc="Descrição"/>
    </S.ImageContainer>
  );
}
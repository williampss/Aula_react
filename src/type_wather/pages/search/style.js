import styled from "styled-components/native";
import { isJSDocUnknownTag } from "typescript";

export const Container = styled.ImageBackground`
 flex: 1;
 justify-content: center;
 flex-direction: column;
`;

export const HeaderContainer = styled.View `
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const HeaderImg  = styled.Image`
width: 36px;
height: 24px;
`;

export const TitleText = styled.Text`
font-size: 20px;
color: white;
font-weight: bold;
`;

export const TitleContainer = styled.View`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const SubTitle = styled.Text`
font-size: 14px;
font-weight: normal;
`;

export const TitleColored = styled.Text`
font-size: 20px;
color:red;
font-weight: bold;
`;

export const Input = styled.TextInput`
margin-top: 32px;
width: 311px;
height: 36px;
border-radius: 20px;
padding-left: 20px;
color: blue;
background-color: purple;
`;



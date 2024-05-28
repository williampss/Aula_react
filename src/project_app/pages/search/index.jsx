import React, { useState } from "react";
import { TouchableOpacity, Modal } from "react-native"
import { Button, ButtonContainer, ButtonImage, Container, HeaderContainer, HeaderImg } from "./style";
import Background from '../../assets/images/Group 45imageBackg.png'
import Logo from '../../assets/images/logo.png'
import ButtonChoc from '../../assets/images/giphy.gif'
import { ModalPage } from '../../modal'

export default function Store() {

    const [modalVisible, setModalVisible] = useState(false);

    function generatePage() {

        return setModalVisible(true)
    }

    return (
        <Container source={Background} resizeMode="cover">
            <HeaderContainer>
                <HeaderImg source={Logo} />
                <ButtonContainer>
                    <TouchableOpacity onPress={generatePage}>
                        <ButtonImage source={ButtonChoc} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Button>CLIQUE</Button>
                    </TouchableOpacity>
                </ButtonContainer>
            </HeaderContainer>

            <Modal visible={modalVisible} animationType="fade">
                <ModalPage></ModalPage>
            </Modal>

        </Container>
    );
}
import React, {ReactNode} from 'react';
import {Modal as RNModal, TouchableOpacity} from 'react-native';

import {Container, Box, RoundedIcon} from '@components';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const SIZE = 60;

const Modal = ({visible, onClose, children}: ModalProps) => {
  const footer = (
    <TouchableOpacity onPress={onClose}>
      <Box flexDirection="row" justifyContent="center">
        <RoundedIcon
          size={SIZE}
          backgroundColor="white"
          name="x"
          color="secondary"
          iconSize={32}
        />
      </Box>
    </TouchableOpacity>
  );
  return (
    <RNModal animationType="slide" visible={visible}>
      <Container footer={footer} pattern={3}>
        {children}
      </Container>
    </RNModal>
  );
};

export default Modal;

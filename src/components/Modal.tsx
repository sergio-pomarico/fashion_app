import React, {ReactNode} from 'react';
import {Modal as RNModal, TouchableOpacity} from 'react-native';

import {Container, Box, Text} from '@components';
import Icon from 'react-native-vector-icons/Feather';

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
        <Box
          height={SIZE}
          width={SIZE}
          backgroundColor="white"
          style={{borderRadius: SIZE / 2}}
          alignItems="center"
          justifyContent="center">
          <Text color="secondary">
            <Icon name="x" size={35} />
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
  return (
    <RNModal animationType="slide" visible={visible}>
      <Container footer={footer}>{children}</Container>
    </RNModal>
  );
};

export default Modal;

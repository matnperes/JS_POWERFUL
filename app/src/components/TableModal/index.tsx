import { Modal, TouchableOpacity, Platform } from 'react-native';
import {useState} from 'react';

import { Button } from '../Button';
import { Close } from '../Icons/Close';

import { Text } from '../Text';

import { Overlay, ModalBody, ModalHeader, ModalForm, ModalInput } from './styles';

interface TableModalProps{
  visible: boolean,
  onClose: () => void,
  onSave: (table: string) => void
}

export function TableModal({visible, onClose, onSave}:TableModalProps){
  const [table, setTable] = useState('');

  function handleSave(){
    onSave(table);
    onClose();
  }

  return(
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <ModalHeader>
            <Text weight='600'>Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color='667'/>
            </TouchableOpacity>
          </ModalHeader>

          <ModalForm>
            <ModalInput
              placeholder='Número da mesa'
              placeholderTextColor="#667"
              keyboardType='number-pad'
              onChangeText={setTable}
            />


            <Button onPress={()=>handleSave()} disabled={table.length === 0}>
              Salvar
            </Button>
          </ModalForm>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}

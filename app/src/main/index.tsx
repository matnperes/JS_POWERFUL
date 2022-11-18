import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer
} from './styles';

import { Categories } from '../components/Categories';

import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';
import {useState} from 'react';

export function Main() {
  const [isTableModalVisible, setIsTabelModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');

  function handleSaveTable(table:string){
    setSelectedTable(table);
  }

  return (
    <>
      <Container>
        <Header/>

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>


      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button onPress = {() => setIsTabelModalVisible(true)}>
            Novo Pedido
            </Button>
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTabelModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}

import { Order } from '../../types/Order';
import { Container } from '../Orders/styles';
import { OrdersBoard } from '../OrdersBoard';

const orders: Order [] = [
  {
    '_id': '63742d0ad681d89fcc3ec163',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'X-tudo especial',
          'imagePath': '1668478421153-burger-molho-especial.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '6372f5d518ac32a8f7c3cdc5'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1668478150696-coca-cola.png',
          'price': 6,
        },
        'quantity': 2,
        '_id': '63742d0ad681d89fcc3ec165'
      }
    ],
  },
  {
    '_id': '63742d0bd681d89fcc3ec167',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'X-tudo especial',
          'imagePath': '1668478421153-burger-molho-especial.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '6372f5d518ac32a8f7c3cdc5'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1668478150696-coca-cola.png',
          'price': 6,
        },
        'quantity': 13,
        '_id': '63742d0bd681d89fcc3ec169'
      }
    ],
  },
  {
    '_id': '6372f5d518ac32a8f7c3cdc5',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'X-tudo especial',
          'imagePath': '1668478421153-burger-molho-especial.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '6372f5d518ac32a8f7c3cdc5'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1668478150696-coca-cola.png',
          'price': 6,
        },
        'quantity': 13,
        '_id': '63742d0cd681d89fcc3ec16d'
      }
    ],
  }
];


export function Orders(){
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders= {orders}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
        orders= {[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders= {[]}
      />
    </Container>
  );
}

import { useEffect } from 'react';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

import { Overlay, ModalBody, OrderDetails, Actions } from './style';

interface OrderModalProps{
  visible: boolean;
  order: Order | null;
  onClose: () => void
}

export function OrderModal(props: OrderModalProps){

  useEffect(()=>{
    function handleKeyDown(event: KeyboardEvent){
      if(event.key === 'Escape'){
        props.onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [props.onClose]);

  if(!props.visible || !props.order){
    return null;
  }

  const total = props.order.products.reduce((total, {product, quantity})=>{
    return total + (product.price * quantity);
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {props.order.table}</strong>

          <button type='button' onClick={props.onClose}>
            <img src={closeIcon} alt="icone de fechar" />
          </button>
        </header>

        <div className='status-container'>
          <small>Status do pedido</small>
          <div>
            <span>
              {props.order.status === 'WAITING' && '🕑'}
              {props.order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {props.order.status === 'DONE' && '✅'}
            </span>

            <strong>
              {props.order.status === 'WAITING' && 'Fila de espera'}
              {props.order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {props.order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-itens">
            {props.order.products.map(({_id, product, quantity}) => (
              <div className='item' key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />

                <span className='quantity'>{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>


          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type='button' className='primary'>
            <span>👩‍🍳</span>
            <span>Iniciar Produção</span>
          </button>

          <button type='button' className='secondary'>
            <span>Canelar pedido</span>
          </button>
        </Actions>

      </ModalBody>
    </Overlay>

  );
}

import React from 'react';
import styled from 'styled-components'
import Carrot from './assets/carrot.webp';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const ItemName = styled.p`
  color: darkblue;
  size: 28px;
  margin: 20px;
`

const PriceText = styled.p`
  color: darkblue;
  size: 28px;
  margin: 20px;
`

const ItemThumbnail = styled.img`
  width: 150px;
`

function PurchaseItem(props) {
  return (
    <div style={{
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: 'darkblue'
    }}>
      <ItemThumbnail src={Carrot} alt="carrot"/>
      <ItemName>{props.name}</ItemName>
      <PriceText>${props.price}</PriceText>
      <Button>
        BUY NOW
      </Button>
    </div>
  );
}

export { PurchaseItem }

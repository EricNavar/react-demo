import React from 'react';
import styled from 'styled-components'
import Carrot from './assets/carrot.webp';
import House from './assets/house.jpg';
import Sword from './assets/sword.gif';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const BuyNowButton = styled(Button)`
  background: #e3af34;
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

function StoreItem(props) {
  return (
    <div style={{
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 8,
      borderColor: 'black',
      width: 300,
      textAlign: 'center',
      margin: 16,
      padding: 16,
      lineHeight: .5,
  }}>
    <ItemThumbnail src={props.thumbnail} />
    <ItemName>{props.name}</ItemName>
    <PriceText>{props.price}</PriceText>
    <BuyNowButton>
      BUY NOW
    </BuyNowButton>
    <p>Seller: {props.seller ? props.seller : "Unknown"}</p>
  </div>
  )
}

export { StoreItem };

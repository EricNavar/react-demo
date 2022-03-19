import React from 'react';
import styled from 'styled-components'

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

const SoldText = styled.span`
  color: red;
  font-weight: bold;
`

const Container = styled.div`
  border-style: solid;
  border-wdth: 1px;
  border-radius: 8px;
  border-color: black;
  min-width: 300px;
  text-align: center;
  margin: 16px;
  padding: 16px;
  line-height: .5;
`

function StoreItem(props) {
  return (
    <Container>
      <ItemThumbnail src={props.thumbnail} />
      <ItemName>{props.name}{props.sold && <SoldText> SOLD</SoldText>}</ItemName>
      <PriceText>{props.price}</PriceText>
      <BuyNowButton>
        BUY NOW
      </BuyNowButton>
    </Container>
  )
}

export { StoreItem };

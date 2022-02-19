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

const BuyNowButton = styled.button`
  background: #e3af34;
`

const DetailsText = styled.p`
  color: darkblue;
  size: 28px;
  margin: 20px;
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

const ItemContainer = styled.div`
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  border-color: black;
  width: 300px;
  text-align: center;
  margin: 16px;
  padding: 16px;
  line-height: .5;
`

function PurchasePage() {
  return (
    <div>
      <Button>
        Sign in
      </Button>
      <h1>
        Seltzer Water Pricing
      </h1>
      <DetailsText>
        Get your tasty seltzer water today :)
      </DetailsText>
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
        <ItemThumbnail src={Carrot} alt="canada-dry"/>
        <ItemName>Canada Dry Seltzer Water</ItemName>
        <PriceText>$9.00</PriceText>
        <BuyNowButton>
          BUY NOW
        </BuyNowButton>
      </div>
    </div>
  )
}

export { PurchasePage };

/*
          border-style: solid;
          border-width: 1px;
          border-radius: 8px;
          border-color: black;
          width: 300px;
          text-align: center;
          margin: 16px;
          padding: 16px;
          line-height: .5;
*/
import React from 'react';
import styled from 'styled-components'
import CanadaDryImage from './assets/canada-dry.jpeg';

const DetailsText = styled.p`
  color: darkblue;
  size: 28px;
  margin: 20px;
`

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

function PurchasePage() {
  return (
    <div>
      <h1>
        Seltzer Water Pricing
      </h1>
      <DetailsText>
        Get your tasty seltzer water today :)
      </DetailsText>
    
      <ItemThumbnail src={CanadaDryImage} alt="canada-dry"/>
      <ItemName>Canada Dry Seltzer Water</ItemName>
      <PriceText>$9.00</PriceText>
      <Button>
        BUY NOW
      </Button>
    </div>
  )
}

export { PurchasePage };

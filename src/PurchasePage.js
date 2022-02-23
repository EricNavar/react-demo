import React from 'react';
import styled from 'styled-components'
import Carrot from './assets/carrot.webp';
import House from './assets/house.jpg';
import Sword from './assets/sword.gif';
import { StoreItem } from './StoreItem';
import {items} from './pricingData';


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

function PurchasePage() {
  return (
    <div>
      <Button>
        Sign in
      </Button>
      <h1>
        SSD Minecraft Server Marketplace
      </h1>

      {items.map((item) => {
        //return <StoreItem name={item.name} thumbnail={item.thumbnail} price={item.price}/>
        return <StoreItem {...item}/>
      })}

    </div>
  )
}

// {
//   name: "carrot",
//   price: "5 emeralds",
//   thumbnail: Carrot
// },

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
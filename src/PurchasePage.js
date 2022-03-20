import React from 'react';
import styled from 'styled-components'
import { StoreItem } from './StoreItem';
import {items} from './pricingData';

const SearchField = styled.input`
  padding: 6px;
  border-radius: 2px;
  margin: 16px;
`

const Header = styled.div`
  position: fixed;
  background: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 100%;
  padding-right: 16px;
`

const ItemContainer = styled.div`
  padding-top: 160px;
  display: flex;
  flex-wrap: wrap;
`

function PurchasePage() {
  const [searchText, setSearchText] = React.useState('');
  const onChangeSearch = e => {
    setSearchText(e.target.value);
  }

  const [filterSold, setFilterSold] = React.useState(false);
  const onChangeFilterSold = e => {
    setFilterSold(e.target.value);
  }

  return (
    <div>
      <Header>
        <h1>
          SSD Minecraft Server Marketplace
        </h1>
        <label>Search:</label>
        <SearchField id="search-field" type="text" name="search" value={searchText} onChange={onChangeSearch}/>
        <label>Filter sold </label>
        <SearchField id="filter-sold" type="checkbox" value={filterSold} onChange={onChangeFilterSold}/>
      </Header>
      <ItemContainer id="item-container">
        {items.map((item) => {
          console.log(!(filterSold && item.sold));
          
          if (!(filterSold && item.sold) && (searchText === "" || item.name.toLowerCase().includes(searchText.toLowerCase())))
            return <StoreItem {...item}/>
          else return <></>
        })}
      </ItemContainer>

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
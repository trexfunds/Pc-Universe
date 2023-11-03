import React from 'react'

const SelectCategory = (select) => {
  return (
    <select defaultValue={select}>
    <option value="all">All Categories</option>
    <option value="MSI">MSI</option>
    <option value="gigabyte">GIGABYTE</option>
    <option value="graphic card">Graphic Card</option>
    <option value="GPU">GPU</option>
                 
</select>
  )
}

export default SelectCategory
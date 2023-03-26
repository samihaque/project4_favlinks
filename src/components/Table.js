import React from 'react'
import LinkContainer from './LinkContainer'
import "../App.css"

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    
    <thead className='border-buttom-a table-sp-100 left-align'>
      <tr>
        <th className='cell-p'>Name</th>
        <th className='cell-p'>URL</th>
        <th className='cell-p'>Remove</th>
      </tr>
    </thead>
    
  )
}

const TableBody = (props) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via props
  const rows = props.linkData.map((row, index) => {
    return (
      <tr key={index} >
        <td className='margin-right'>{row.name}</td>
        <td className='margin-right'>
          <a href={row.URL}>{row.URL}</a>
        </td>
        <td className='margin-right'>
          <button className='button' style={{width: 60}} onClick={() => props.removeLink(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  
    /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/
    return (
      
        <table className='table-sp'>
          <TableHeader />
          <TableBody linkData={props.linkData} removeLink={props.removeLink} />
        </table>
      
      )
  
}

export default Table

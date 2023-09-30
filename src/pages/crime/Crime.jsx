import React from 'react'
import './crime.scss'
import { Table } from 'react-bootstrap'
const Crime = () => {
  return (
    <div>
      <div className='crimeMain'>
        <p>ბრაკონიერები არიან ადამიანები ვინც აზიანებს ბუნებას და ანადგურებს გარემოს, ამ საზოგადოებაში ასეთი ადამიანებს არ მივესალმებით!</p>
        <button>შეგვატყობინეთ</button>
      </div>
      <div className='crime_stats mt-5'>
        <Table striped>
          <thead>
            <tr>
              <td>ადგილი</td>
              <td>დრო</td>
              <td>ძაბვა</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ადგილი</td>
              <td>10:43</td>
              <td>128ვ</td>
            </tr>
            <tr>
              <td>ადგილი</td>
              <td>10:43</td>
              <td>128ვ</td>
            </tr>
            <tr>
              <td>ადგილი</td>
              <td>10:43</td>
              <td>128ვ</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Crime
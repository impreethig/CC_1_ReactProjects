import React from 'react'

export default function Singers() {
  return (
    <div>
      <table style={{width:"30%" ,marginLeft:"32rem"}} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Singer Name</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>AR Rahman</td>
            <td>2015</td>
          </tr>
          <tr>
            <td scope='row'>Hesham Abdul Wahab</td>
            <td>2021</td>
          </tr>
          <tr>
            <td scope='row'>Vishal Chandrasekhar</td>
            <td>2022</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}
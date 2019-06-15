import React, {useState} from 'react'
import {connect} from 'react-redux'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {getTransaction} from '../store'

const tdStyle = {
  background: '#fff',
  border: '1px solid #ddd',
  borderRight: 'none',
  borderBottom: 'none',
  padding: '8px 6px',
  width: '275px'
}
const thStyle = {
  width: '290px',
  padding: '6px 0px',
  textAlign: 'center'
}

const headerStyle = {
  background: '#ccc',
  padding: '6px 5px',
  margin: '5px',
  border: '1px solid #ccc'
}
function TransactionDetail({transactions}) {
  const [columns,
    setcolumns] = useState([
    {
      dataField: '_id',
      text: 'Transaction ID',
      sort: true
    }, {
      dataField: 'name',
      text: 'User Name',
      sort: true
    }, {
      dataField: 'paymentMode',
      text: 'Payment Mode'
    }, {
      dataField: 'amount',
      text: 'Amount'
    }
  ])

  return (

    <div>

      <BootstrapTable
        data={transactions}
        tableStyle={{
        background: '#fff',
        width: '100%',
        fontFamily: 'Source Sans Pro,Hiragino Sans GB,Arial,sans-serif'
      }}
        bordered={true}
        headerStyle={headerStyle}>
        <TableHeaderColumn isKey dataField='_id' thStyle={thStyle} tdStyle={tdStyle}>Transaction ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' thStyle={thStyle} tdStyle={tdStyle}>User Name</TableHeaderColumn>
        <TableHeaderColumn dataField='paymentMode' thStyle={thStyle} tdStyle={tdStyle}>Payment Mode</TableHeaderColumn>
        <TableHeaderColumn dataField='amount' thStyle={thStyle} tdStyle={tdStyle}>Amount</TableHeaderColumn>
      </BootstrapTable>,
    </div>
  )
}

function mapStateToProps(state) {
  const {transactions} = state
  return {transactions}
}

const mapDispatchToProps = {
  getTransaction
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionDetail)

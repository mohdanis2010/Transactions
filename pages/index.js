import React from 'react'
import {connect} from 'react-redux'
import 'isomorphic-unfetch'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import {
  container,
  leftSubContaoner,
  rightSubContaoner,
  tableContaoner,
  btnSubmit,
  lineChart
} from '../style';

import {postTransaction, getTransaction, getPayload} from '../store'
import TransactionDetail from './transactionDetail'
import CheckboxCmp from '../components/selectionBox'
import CustomInput from '../components/customInput';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false
    }
  }

  static async getInitialProps({reduxStore, req}) {
    return {}
  }
  componentDidMount() {
    this.loadData()
  }

  loadData = async() => {
    const res = await fetch('http://localhost:4000/getTrans')
    const data = await res.json()
    const {getTransaction} = this.props;
    getTransaction(data)
  }
  getItemDetails = (item, type) => {
    this
      .props
      .getPayload(item, type);
  }

  handleTransfer = async() => {
    await fetch('http://localhost:4000/addTrans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.props.payload)
    });
    this
      .props
      .postTransaction();
    this.loadData()
  }

  render() {
    const {transactions, payload} = this.props;
    return (
      <div style={container}>
        <div style={leftSubContaoner}>
          <CheckboxCmp onItemClick={this.getItemDetails}/>
        </div>

        <div style={rightSubContaoner}>
          <CustomInput amountChange={this.getItemDetails}/>
          <input
            type="button"
            value="Transfer"
            disabled={!payload.amount}
            style={btnSubmit}
            onClick={this.handleTransfer}/>
        </div>

        <div style={tableContaoner}>
          <TransactionDetail/>
        </div>

        <div style={lineChart}>
          <LineChart
            width={800}
            height={400}
            data={transactions}
            margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5
          }}>
            <CartesianGrid strokeDasharray="3 1"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line
              type="monotone"
              dataKey="name"
              stroke="#8884d8"
              activeDot={{
              r: 8
            }}/>
            <Line type="monotone" dataKey="paymentMode" stroke="#82ca9d"/>
            <Line type="monotone" dataKey="amount" stroke="#8884d8"/>
          </LineChart>

        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({payload: state.payload, transactions: state.transactions})

const mapDispatchToProps = {
  getTransaction,
  postTransaction,
  getPayload
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)

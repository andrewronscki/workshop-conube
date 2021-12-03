const { DynamoDB } = require('aws-sdk')
const { v4 } = require('uuid')

const db = new DynamoDB.DocumentClient()
const TableOrder = 'OrderTable'
const TableLog = 'LogTable'

const createOrder = async event => {
  const record = event.Records[0]
  const body = JSON.parse(record.body)
  const message = JSON.parse(body.Message)

  const newOrder = {
    id: v4(),
    customerId: message.customerId,
    items: message.items,
  }

  await db.put({
    TableName: TableOrder,
    Item: newOrder,
  }).promise()

  console.log(newOrder)
}

const createLog = async event => {
  const record = event.Records[0]
  const body = JSON.parse(record.body)
  const message = JSON.parse(body.Message)

  const newLog = {
    id: v4(),
    customerId: message.customerId,
    items: message.items,
  }

  await db.put({
    TableName: TableLog,
    Item: newLog,
  }).promise()

  console.log(newLog)
}

module.exports = {
  createOrder,
  createLog,
}

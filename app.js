var express = require('express')

var app = express()

app.use(express.json())

var originalData = {}

//file path
var dataFile = 'data.json'

const {
    getData,
    saveData
} = require("./functions")

const PORT = 3000


app.get('/', (req, res) => res.send('Hello World!'))

//Post api "http://localhost:3000/records/add"
app.post("/records/add", (req, res) => {
    const record = req.body
    originalData = getData(dataFile)
    const allRecords = originalData.records || []

    allRecords.push(record);

    const isDone = saveData(dataFile, {
        records: allRecords
    })

    if (isDone) {
        res.send({
            status: 200,
            message: 'Save Patra'
        })
    } else {
        res.send({ status: 300, message: 'Failed babu' })
    }
})


//Get api "http://localhost:3000/records"

app.get('/records', (req, res) => {
    originalData = getData(dataFile)
    const allRecords = originalData.records || []


    res.send({ data: allRecords, status: 200, message: "Data Fetched mama" })
})


app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
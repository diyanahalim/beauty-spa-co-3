const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "nanauwu1234",
    database: "spacodb" 
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req, res)=> {
    const sqlSelect = "SELECT * FROM booking_details"
    db.query(sqlSelect, (err, result)=>{
        // console.log(result);
        res.send(result); //displaying everything that is on our back end
    });
})


app.post("/api/insert", (req, res)=> {

    const customer_name = req.body.customer_name;
    const customer_email = req.body.customer_email;
    const customer_phone_number = req.body.customer_phone_number;
    const appointment_date = req.body.appointment_date;
    const appointment_start_time= req.body.appointment_start_time;
    const appointment_end_time = req.body.appointment_end_time;

    const sqlInsert = "INSERT INTO booking_details (customer_name, customer_email, customer_phone_number, appointment_date, appointment_start_time, appointment_end_time) VALUES (?, ?, ?, ?, ?, ?)"
    db.query(sqlInsert, [customer_name, customer_email, customer_phone_number, appointment_date, appointment_start_time, appointment_end_time], (err, result)=>{
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});
const app = require('./app')
const connectWithDb = require('./config/db')

connectWithDb();

app.listen(3000,()=>{
    console.log(`Server is running at port:8100`)
})
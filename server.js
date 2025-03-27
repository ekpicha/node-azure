// Import Express framework
const express = require('express')
const app = express()

// รับ port จาก process.env.PORT (Azure จะใช้ 8080 ถ้าไม่กำหนด)
const port = process.env.PORT || 8080

// Route หลักเพื่อเช็คว่ายังทำงานได้
app.get('/', (req, res) => {
  res.send('✅ Hello! Node.js App is Running on Azure Web App')
})

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK')
})

// Start app บน port ที่กำหนด
app.listen(port, () => {
  console.log(`🚀 App is running at http://localhost:${port}`)
})

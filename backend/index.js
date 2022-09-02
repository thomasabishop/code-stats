import express from "express"
import helmet from "helmet"
import axios from "axios"
import { Buffer } from "buffer"

const app = express()
const port = process.env.PORT || 8000

app.use(helmet())

app.listen(port, () => console.log(`Listening on ${port}`))

async function queryWakatime() {
  const wakatimeToken = "0ce7d1ce-2b18-4fe3-934c-aa8977475c10"
  const config = {
    headers: {
      Authorization: `Basic ${Buffer.from(wakatimeToken).toString("base64")}`,
    },
  }
  const endpoint = "https://wakatime.com/api/v1/users/current/stats"

  const data = axios.get(endpoint, config)
  return data
}

// Return basic data from Wakatime
// app.get("/api/wakatime", (req, res) => {})

queryWakatime().then((res) => console.log(res?.data.data?.categories))

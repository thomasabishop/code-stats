import { useEffect, useState } from "react"
import axios, { AxiosResponse } from "axios"
import { Buffer } from "buffer"
const wakatimeToken = "0ce7d1ce-2b18-4fe3-934c-aa8977475c10"

export const LanguagesChart: React.FC = () => {
  const [langData, setLangData] = useState<AxiosResponse | undefined>(undefined)
  const endpoint =
    "http://www.whateverorigin.org/get?url=" +
    "https://wakatime.com/api/v1/users/current/stats"
  const config = {
    headers: {
      Authorization: `Basic ${Buffer.from(wakatimeToken).toString("base64")}`,
    },
  }
  const fetchLangData = async () => {
    const res = await axios.get(endpoint, config)
    console.log(res)
    // setLangData(res)
  }
  useEffect(() => {
    fetchLangData()
    console.log(config.headers)
  }, [])

  return <p>something</p>
}

export default LanguagesChart

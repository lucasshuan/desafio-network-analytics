import express from "express";
import { router } from "./router";
import cors from 'cors';
import { job } from "./cron";

const app = express()
const port = 3000;

app.use(cors({
    origin: "*"
}))

app.use(express.json({ limit: "250mb" }));
app.use(router)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

job.start()
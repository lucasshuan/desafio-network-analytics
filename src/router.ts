import { Router } from "express";
import { createCurrency, getCurrencies } from "./service/currency_service";
import { getCurrencyLogs, getLogs } from "./service/log_service";

const router = Router()

router.get("/currency", async (_, res) => {
    try {
        const currencies = await getCurrencies()
        res.json(currencies)
    }
    catch (error) {
        console.log(error)
        res.json(error)
    }
})

router.post("/currency", async (req, res) => {
    const { name, value, fluctuationRate } = req.body
    try {
        const currency = await createCurrency(name, value, fluctuationRate)
        res.json(currency)
    }
    catch (error) {
        console.log(error)
        res.json(error)
    }
})

router.get("/currency/:currency/logs", async (req, res) => {
    const { currency } = req.params
    try {
        const logs = await getCurrencyLogs(parseInt(currency))
        res.json(logs)
    }
    catch (error) {
        console.log(error)
        res.json(error)
    }
})

router.get("/logs", async (_, res) => {
    try {
        const logs = await getLogs()
        res.json(logs)
    }
    catch (error) {
        console.log(error)
        res.json(error)
    }
})

export { router }
import { CronJob } from "cron";
import { getCurrencies, updateCurrencyValue } from "./service/currency_service";

async function updateAllCurrencyValues() {
    console.log(`Atualizando todas as moedas`)
    const currencies = await getCurrencies()
    for (const currency of currencies) {
        const minValue = currency.value - (currency.value * currency.fluctuationRate);
        const maxValue = currency.value + (currency.value * currency.fluctuationRate);
        const newValue = Math.random() * (maxValue - minValue) + minValue;
        await updateCurrencyValue(currency, newValue)
    }
}

const job = new CronJob(
    '*/5 * * * *',
    updateAllCurrencyValues,
    null,
    true,
    'America/Sao_Paulo'
)

export { job }
import { Currency } from "@prisma/client";
import { prisma } from "../database";
import { createLog } from "./log_service";

export async function getCurrency(id: number) {
    console.log(`Buscando moeda id: ${id}`)
    return await prisma.currency.findUnique({ 
        where: { id },
        include: {
            logs: true
        }
    })
}

export async function getCurrencies() {
    console.log(`Buscando todas as moedas`)
    return await prisma.currency.findMany()
}

export async function createCurrency(name: string, value: number, fluctuationRate: number) {
    console.log(`Criando moeda: ${name}`)
    await prisma.currency.create({
        data: {
            name,
            value,
            fluctuationRate
        }
    })
}

export async function updateCurrencyValue(currency: Currency, newValue: number) {
    console.log(`Atualizando valor da moeda: ${currency.name}`)
    const newCurrency = await prisma.currency.update({
        where: {
            id: currency.id
        },
        data: {
            value: newValue
        }
    })
    await createLog(currency.id, currency.value, newValue)
    return newCurrency
}
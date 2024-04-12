import { prisma } from "../database";

export async function getLogs() {
    console.log(`Buscando histórico de flutuações`)
    return await prisma.log.findMany()
}

export async function getCurrencyLogs(id: number) {
    console.log(`Buscando logs da moeda id: ${id}`)
    return await prisma.log.findMany({ where: { currencyId: id } })
}

export async function createLog(currencyId: number, previousValue: number, newValue: number) {
    console.log(`Criando log de alteração na moeda id: ${currencyId}`)
    return await prisma.log.create({
        data: {
            currencyId,
            previousValue,
            newValue
        }
    }) 
}
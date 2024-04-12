import { prisma } from "../database";

export async function getLogs() {
    console.log(`Buscando histórico de flutuações`)
    return await prisma.log.findMany({ select: {
        currency: {
            select: {
                name: true
            }
        },
        previousValue: true,
        newValue: true
    }})
}

export async function getCurrencyLogs(id: number) {
    console.log(`Buscando logs da moeda id: ${id}`)
    return await prisma.log.findMany({ 
        where: { currencyId: id }, 
        select: {
            previousValue: true,
            newValue: true
        } 
    })
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
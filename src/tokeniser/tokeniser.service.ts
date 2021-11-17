import {randomBytes} from "crypto";

/**
 * A noSQL in memory database. Can't see any SQL here. No sirree no.
 */
let inMemoryNoSqlDb = new Map()

/**
 * Takes an array of account numbers and replaces each account number with a unique token.
 * @param accountNumbers
 */
export const tokenise = async (accountNumbers: string[]): Promise<string[]> => {
    return accountNumbers.map(accountNumber => {
        let replacementToken = randomBytes(16).toString("hex")
        inMemoryNoSqlDb.set(replacementToken, accountNumber)
        return replacementToken
    })
}

/**
 * Takes an array of tokens that are used to retrieve correlating account numbers.
 * @param tokens
 */
export const detokenise = async (tokens: string[]): Promise<string[]> => {
    return tokens.map(token => inMemoryNoSqlDb.get(token))
}
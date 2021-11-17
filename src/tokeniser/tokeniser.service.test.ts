import {detokenise, tokenise} from "./tokeniser.service";
import {describe, expect, test} from '@jest/globals'

describe('Tokeniser tests',  () => {
    test('Tokenise and detokenise single item', async () => {
        const originalAccountNumber = ['1234-1234-1234-1234']
        const tokenisedAccountNumber = await tokenise(originalAccountNumber).then(data => {
            return data
        })
        expect(tokenisedAccountNumber.length).toBe(1)
        expect(tokenisedAccountNumber[0].length).toBe(32)
        const detokenisedAccountNumber = await detokenise(tokenisedAccountNumber).then(data => data)
        expect(detokenisedAccountNumber === originalAccountNumber)
    })

    test('Tokenise and detokenise multiple items', async () => {
        const originalAccountNumbers = ['2345-2345-2345-2345', '3456-3456-3456-3456']
        const tokenisedAccountNumbers = await tokenise(originalAccountNumbers).then(data => {
            return data
        })
        expect(tokenisedAccountNumbers.length).toBe(2)
        expect(tokenisedAccountNumbers[0].length).toBe(32)
        expect(tokenisedAccountNumbers[1].length).toBe(32)
        const detokenisedAccountNumbers = await detokenise(tokenisedAccountNumbers).then(data => data)
        expect(detokenisedAccountNumbers === originalAccountNumbers)
    })
})



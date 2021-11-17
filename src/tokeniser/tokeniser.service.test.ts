import {tokenise} from "./tokeniser.service";
import {describe, expect, test} from '@jest/globals'

describe('Tokeniser tests', () => {
    test('Tokenise single item', () => {
        return tokenise(['1234-1234-1234-1234']).then(data => {
            expect(data).toBe('bla 1!')
        })
    })

    test('Tokenise multiple items', () => {
        return tokenise(['2345-2345-2345-2345', '3456-3456-3456-3456']).then(data => {
            expect(data).toBe('bla 2!')
        })
    })
})


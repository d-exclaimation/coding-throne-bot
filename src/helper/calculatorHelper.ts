//
//  calculatorHelper.ts
//  coding-throne-bot
//
//  Created by d-exclaimation on 1:08 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//
export const splitWords = (sentences: string): string[] => {
    const words = sentences
        .split("")
    let result: string[] = []

    for (const word of words) {
        if (result.length && /^\d+$/.test(word) && /^\d+$/.test(result[result.length - 1])) {
            result[result.length - 1] += word;
            continue;
        }
        result.push(word)
    }
    return result.filter(value => value !== " ")
}

type Operation = (lhs: number, rhs: number) => number

const operations: Record<string, Operation> = {
    "+": (lhs, rhs) => lhs + rhs,
    "-": (lhs, rhs) => lhs - rhs,
    "*": (lhs, rhs) => lhs * rhs,
    "/": (lhs, rhs) => lhs / rhs,
    "%": (lhs, rhs) => lhs % rhs,
    "^": (lhs, rhs) => lhs ** rhs,
}

const operatorOrder: Record<string, number> = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "%": 2,
    "^": 3,
}

const evaluate = (operator: string, lhs: number, rhs: number): number => {
    return operations[operator](lhs, rhs)
}

export const evaluatePostfix = (tokens: string[]): number | undefined => {
    let numStack: number[] = []
    for (const token of tokens) {
        if (/^\d+$/.test(token)) {
            // Regex for check if numeric
            numStack.push(parseFloat(token))
        } else {
            // Take two, evaluate repush new value
            const first = numStack.pop();
            const second = numStack.pop();
            if (!first || !second)
                return undefined;
            numStack.push(evaluate(token, second, first))
        }
    }
    return numStack.pop()
}

export const infixToPostfix = (tokens: string[]): string[] => {
    let postfix: string[] = []
    let symbols: string[] = []

    for (const token of tokens) {
        if (/^\d+$/.test(token)) {
            // Numeric immediately enter postfix
            postfix.push(token)
        } else if (token === "(") {
            // Added to symbols as anchor
            symbols.push(token)
        } else if (token === ")") {
            // Pull out until anchor is found
            let curr = postfix.pop();
            while (curr && curr !== "(") {
                postfix.push(curr)
                curr = symbols.pop()
            }
        } else {
            // Take from the symbols until an inferior operator
            while (symbols.length > 0 && operatorOrder[symbols[symbols.length - 1]] >= operatorOrder[token]) {
                const curr = symbols.pop()
                if (!curr)
                    break;
                postfix.push(curr)
            }
            symbols.push(token)
        }
    }

    while (symbols.length) {
        const curr = symbols.pop()
        if (!curr)
            break
        postfix.push(curr)
    }
    return postfix
};

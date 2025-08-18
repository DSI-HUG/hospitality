interface Token {
    id: string,
    name: string,
    type: 'COLOR' | 'TYPO',
    value: string
}

interface Tokens {
    references: Token[];
    systems: Token[];
}

declare const tokens: Tokens;
export { tokens };
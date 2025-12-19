import rawTokens from './tokens.json';

export interface Token {
    id: string;
    name: string;
    type: string;
    value: string | number;
}

export interface TokenSystem {
    id?: string;
    name: string;
    type: string;
    reference: Token[];
    _referenceValue:
        | string
        | {
            weight: number;
            size: number;
            lineHeight: number;
            font: string;
        };
}

export interface Tokens {
    references: Token[];
    systems: {
        light: TokenSystem[];
        dark: TokenSystem[];
    } | TokenSystem[];
}

const tokens: {
    colors: Tokens;
    typographies: Tokens;
} = rawTokens;

export { tokens };

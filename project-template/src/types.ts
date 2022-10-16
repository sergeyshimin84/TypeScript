export type Reviews = [string, number, string][];

export interface Author {
    firstName: string,
    lastName: string,
};

export type BuyCallback = (error?: Error | null, transactionId?: string) => void;
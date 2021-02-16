export interface InvoiceDto {
    id: number,
    amount: number,
    outstanding: boolean,
    paymentDate: null,
    positions: [
        {
            id: number,
            description: string,
            quantity: number,
            price: number
        }
    ]
}
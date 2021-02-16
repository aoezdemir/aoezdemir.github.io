export interface PostAcceptAgreementDto{
    acceptAgreement: boolean;
    processInstanceId: string;
    firstName?: string,
    lastName?: string,
    email?: string,
    phoneNumber?: string,
    street?: string,
    zipCode?: string,
    city?: string,
    country?: string,
    birthDate?: moment.Moment,
    cardHolder?: string,
    cardNumber?: number,
    expiryMonth?: number,
    expiryYear?: number,
    cvv?: number,
}
import { PostSearchDto } from 'src/assets/interfaces/postSearchDto';
export interface BookingDto {
    acceptAgreement: boolean,
    firstName :string,
    lastName :string,
    email :string,
    birthDate: moment.Moment
}
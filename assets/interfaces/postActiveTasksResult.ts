export interface PostActiveTasksResult 
        {
            taskName: string,
            taskId: string,
            definitionKey: string,
            taskProcessInstanceId: string
            taskDate: {
                contractId: number,
                year: number,
                month: string,
                leapYear: boolean,
                dayOfYear: number,
                chronology: {
                    calendarType: string,
                    id: string
                },
                dayOfWeek: string,
                era: string,
                monthValue: number,
                dayOfMonth: number
            },
            rentalCar: {
                id: number,
                carClass: string,
                make: string,
                model: string,
                year: number,
                licensePlate: string,
                seats: number,
                transmissionType: string,
                site: string,
                dailyRentalPrice: number,
                color: string,
                inUse: boolean
            },
            customer: {
                id: number,
                company: string|null,
                firstName: string,
                lastName: string,
                email: string,
                phoneNumber: string,
                street: string,
                zipCode: string,
                city: string,
                country: string,
                birthDate: {
                    year: number,
                    month: string,
                    leapYear: boolean,
                    dayOfYear: number,
                    chronology: {
                        calendarType: string,
                        id: string
                    },
                    dayOfWeek: string,
                    era: string,
                    monthValue: number,
                    dayOfMonth: number
                }
            }
        }


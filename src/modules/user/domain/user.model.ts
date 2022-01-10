import { User } from '../../../shared/infrastructure/entities/user.entity';

export interface UserEntity {
    id: number;
    name: string;
    bank?: BankValueObject
}

export interface BankValueObject {
    balance: number;
    branch: string
}

export class UserModel {

    create(
        userProp: User,
        bankProp?: {
            id: number,
            balance: number,
            branch: string
        }
    ): UserEntity { 
        if (!bankProp) {
            return userProp
        }

        return {
            id: userProp.id,
            name: userProp.name,
            bank: bankProp
        };
    }
}

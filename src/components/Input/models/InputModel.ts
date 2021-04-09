import { FieldValues, UseFormRegister } from 'react-hook-form';

declare type Types = 'password' | 'email';

export class InputModel {
    constructor(
        public label: string,
        public controlName: string,
        public type: Types,
        public register: UseFormRegister<FieldValues>,
        public errorMessage?: string
    ) { }
}

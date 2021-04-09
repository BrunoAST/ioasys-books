declare type StyleTypes = 'text' | 'icon';
declare type Types = 'submit' | 'button';

export class ButtonModel {
    constructor(
        public styleType: StyleTypes,
        public type: Types,
        public click?: () => void,
        public title?: string,
        public disabled?: boolean
    ) { }
}

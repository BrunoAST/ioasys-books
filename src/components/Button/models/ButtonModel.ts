declare type StyleTypes = 'text' | 'icon';
declare type Types = 'submit' | 'button';

export class ButtonModel {
    constructor(
        public styleType: StyleTypes,
        public type: Types,
        public title?: string,
        public icon?: string,
    ) { }
}

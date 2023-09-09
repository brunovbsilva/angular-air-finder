export class OptionModel {
    value!: number | string;
    viewValue: string = this.value.toString();
}
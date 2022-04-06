import { valueConverter } from "aurelia";

@valueConverter('currency')
export class CurrencuyValueConverter {
    toView(value: number, currency: string): string {
        if (currency === 'euro') {
            return `${value * 0.91}`;
        }
        if (currency === 'sek') {
            return `${value * 9.43}`;
        }
    }
}
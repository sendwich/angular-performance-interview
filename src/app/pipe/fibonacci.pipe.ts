import { Pipe, PipeTransform } from '@angular/core';
import { fibonacci } from '../util/math';

@Pipe({
    name: 'fibonacci',
    standalone: true,
})
export class FibonacciPipe implements PipeTransform {
    transform(value: number): number {
        return fibonacci(value);
    }
}
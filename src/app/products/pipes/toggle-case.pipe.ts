import { Pipe, PipeTransform } from '@angular/core';

// sebastian | toggleCase = 'SEBASTIAN'
// SEBASTIAN | toggleCase = 'sebastian'


@Pipe({
  name: 'ToggleCasePipe',
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string ): string {
    return value.toUpperCase();
  }

}


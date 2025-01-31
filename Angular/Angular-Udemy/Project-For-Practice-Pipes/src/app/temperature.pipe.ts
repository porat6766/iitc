import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah'): any {
    let val: number;
    let outPutTemp;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    if (isNaN(val)) {
      return "Invalid temperature";
    }

    if (inputType === 'cel' && outputType === 'fah') {
      outPutTemp = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outPutTemp = (val - 32) * (5 / 9);
    } else {
      outPutTemp = val;
    }

    let symbol: '°F' | '°C';

    if (outputType) {
      symbol = outputType === 'cel' ? '°C' : '°F';
    } else {
      symbol = inputType === 'cel' ? '°C' : '°F';
    }

    return outPutTemp.toFixed(2) + symbol;
  }

}

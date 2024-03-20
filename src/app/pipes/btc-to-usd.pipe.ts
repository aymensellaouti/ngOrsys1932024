import { Pipe, PipeTransform } from '@angular/core';

const EXTCHANGE = 63031.30;
@Pipe({
  name: 'btcToUsd'
})
export class BtcToUsdPipe implements PipeTransform {

  transform(amount: number, isBtcToUsd = true): number {
    if (isBtcToUsd) {
      return EXTCHANGE * amount;
    } else {
      return amount / EXTCHANGE;
    }
  }

}

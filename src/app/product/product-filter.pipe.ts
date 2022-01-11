import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return "aaaa";
  }

  /*
  transform(value: Product, ...filterText: string[]): Product[] {

  }
  */

}

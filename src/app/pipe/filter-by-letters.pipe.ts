import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByLetters',
  standalone: true
})
export class FilterByLettersPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      // Assuming 'item' is a string
      const itemName: string = item.toLowerCase();
      return itemName.includes(searchText);
    });
  }
}



import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
  standalone: true
})
export class TruncateTextPipe implements PipeTransform {

  transform(content: string, maxLength: number): string {
    if (!content) {
      return '';
    }
    if (content.length <= maxLength) {
      return content;
    }
    return content.substr(0, maxLength) + '..';
  }


}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanatizer',
  standalone: true
})
export class SanatizerPipe implements PipeTransform {

  constructor(private _DomSanitizer: DomSanitizer) { }
  transform(value: string): SafeHtml {
    return this._DomSanitizer.bypassSecurityTrustHtml(value);
  }
}

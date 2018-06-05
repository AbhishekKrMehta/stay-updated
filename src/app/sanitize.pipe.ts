import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor( private sanitizer:DomSanitizer ){

  }

  transform(value: any, args?: any): any {

    // to test for HTML content
    var htmlRegex = new RegExp("<[a-z][\s\S]*>");
     
    if (htmlRegex.test(value)) {
      return this.sanitizer.bypassSecurityTrustHtml(value);
    } else {
      return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
  }

}

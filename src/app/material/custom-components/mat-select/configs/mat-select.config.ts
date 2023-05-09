import { Injectable, Optional } from '@angular/core';
import { CustomOpenDirective } from '../directives/custom-open.directive';

@Injectable()
export class MatSelectConfig {
  customDirective?: CustomOpenDirective;

  constructor(@Optional() config?: MatSelectConfig) {
    if (config) {
      this.customDirective = config.customDirective;
    }
  }
}
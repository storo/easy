import { Component, Input } from '@angular/core';

/**
 * Generated class for the AvatarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'Avatar',
  templateUrl: 'avatar.html'
})
export class AvatarComponent {

  @Input('image') image: string;
  @Input('name') name: string;
  @Input('status') status: string;

  constructor() {
  }

}

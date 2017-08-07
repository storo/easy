import { Component } from '@angular/core';

/**
 * Generated class for the AvatarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'avatar',
  templateUrl: 'avatar.html'
})
export class AvatarComponent {

  image: string;

  constructor() {
    this.image = 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png';
  }

}

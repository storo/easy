import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data : {url: string, name: string, status: string}[] = [
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pamela Sexy',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pepe',
      status: 'connect'
    },{
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Juanito',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Josefa',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pal q lee',
      status: 'disconnect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pamela Sexy',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pepe',
      status: 'connect'
    },{
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Juanito',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Josefa',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pal q lee',
      status: 'disconnect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pamela Sexy',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pepe',
      status: 'connect'
    },{
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Juanito',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Josefa',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pamela Sexy',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pepe',
      status: 'connect'
    },{
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Juanito',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Josefa',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pal q lee',
      status: 'disconnect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pamela Sexy',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pepe',
      status: 'connect'
    },{
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Juanito',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Josefa',
      status: 'connect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pal q lee',
      status: 'disconnect'
    },
    {
      url: 'https://www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png',
      name: 'Pamela Sexy',
      status: 'connect'
    }
  ];

  rows: number[][] = [];

  constructor(public navCtrl: NavController) {
    let position = 0;
    let rowsMax = this.data.length/4;
    let max = (this.data.length % 4 != 0)? rowsMax+1 : rowsMax;
    for(var i=1; i<=max; i++) {
      let columns = 0;
      let cols = [];
      let resume = true;
      
      while(resume) {
          if(columns < 4) {
            cols.push(position);
            columns++;
            if(position < this.data.length-1) {
              position++;
            } else {
              resume = false;
            }
          } else {
            resume = false;
          }
      }

      this.rows.push(cols);
    }
  }

}

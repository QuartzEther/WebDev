import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { AlertController } from '@ionic/angular';
import { identity } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  constructor(private alertCtrl: AlertController) {

  }

  async ngOnInit(){
   await LocalNotifications.requestPermissions();

   LocalNotifications.registerActionTypes({
    types: [
      {
        id: 'CHAT_MSG',
        actions:[
          {
            id: 'view',
            title: 'Open Chat'
          }
        ]
      }
    ]
   })

  }

  async sheduleBasic(){
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'friendly me',
          body: 'new meditation',
          id: 1,
          extra:{
            data: 'Pass data to your handler'
          },
          iconColor: '#0000FF'
        }
      ]
    })
  }

  async sheduleAdvanced(){

  }

  /*async presentAlert(header, message){
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }*/
}

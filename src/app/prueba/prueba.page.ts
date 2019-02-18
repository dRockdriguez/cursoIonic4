import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) { 

  }

  ngOnInit() {
  }

  async cargando(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 5000,
      spinner: 'circles',
      showBackdrop: true
    });
    await loading.present();
  }
  async creaSheet(){
    const sheet = await this.actionSheetCtrl.create({
      header: 'Titulo Sheet',
      buttons: [{
        text: 'Primer botón',
        role: 'destructive',
        icon: 'alarm'
      },
      {
        text: 'Segundo botón',
        icon: 'add-circle-outline'
      }]
    });
    await sheet.present();
  }

  async alert(){
    const alerta = await this.alertCtrl.create({
      header: 'Titulo',
      subHeader: 'SubTitulo',
      message: 'Mensaje',
      inputs: [{name:'check', type: 'checkbox', label: 'check'}]
    });
    await alerta.present();
  }

  refrescar(event){
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async abreToast(){
    const toast = await this.toastCtrl.create({
      message: 'Mensaje',
      showCloseButton: true,
      position: 'bottom',
      duration: 2000,
      closeButtonText: 'Cerrar',
      animated: true
    });
    await toast.present();
  }
}

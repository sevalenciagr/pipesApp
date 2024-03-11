import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Sebastian';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Isabella';
    this.gender = 'female';
  }


  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'No tenemos ningún cliente esperando',
    '=1': 'Actualmente tenemos 1 cliente esperando',
    'other': 'Actualmente tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }


  // KeyValue Pipe
  public person = {
    name: 'Sebastian',
    age: 29,
    address: 'Manizales, Caldas'
  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap:', value ))
  );

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  })


}

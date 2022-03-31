import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { map } from 'rxjs/Operators';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public currentValue: Number;
  datos: any=[];
  currentDatos = null;
  currentIndex = -1;
  title = '';

  constructor(private datosService: ServiceService) {}
  ngOnInit(): void {
    this.retrieveDatos();
  }

  refreshList(): void {
    this.currentDatos = null;
    this.currentIndex = -1;
    this.retrieveDatos();
  }

  retrieveDatos(): void{
    this.datosService.getAll().snapshotChanges().pipe(
      map(changes => changes.map(c=>({
        key: c.payload.key, ...c.payload.val()})) 
      )
    ).subscribe(data=>{
      this.datos = data;
      this.currentValue = 20;
      console.log(data);
      
    });
    
  }



  setActiveDatos(datos, index): void{
    this.currentDatos = datos;
    this.currentIndex = index;
    console.log(index);
  }

  saveDato(datito:any){
    console.log(datito);
  }


}

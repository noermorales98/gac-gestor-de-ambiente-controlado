import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { map } from 'rxjs/Operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  datos: any=[];

  constructor(private datosService: ServiceService) {}
  ngOnInit(): void {
    this.retrieveDatos();
  }

  retrieveDatos(): void{
    this.datosService.getAll().snapshotChanges().pipe(
      map(changes=> changes.map(c=>({
        key: c.payload.key, ...c.payload.val()}))
        )
    ).subscribe(data=>{
      this.datos = data;
      console.log(data);
    })
  }

}

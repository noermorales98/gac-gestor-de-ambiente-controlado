import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  datos:any[];

  constructor(private datosService: ServiceService) {}
  ngOnInit(): void {
    this.recibir();
  }

  recibir(): void{
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

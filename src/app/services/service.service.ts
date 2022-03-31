import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Datos, Senvals } from '../models/datos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private dbPath = '/vals';
  private dbPath2 = '/vals';
  datosRef: AngularFireList<Datos> = null;
  datosRef2: AngularFireList<Senvals> = null;
  constructor(private db: AngularFireDatabase) { 
    this.datosRef = db.list(this.dbPath);
    this.datosRef2 = db.list(this.dbPath2);
  }

  getAll(): AngularFireList<Datos>{
    return this.datosRef;
  }
  getAll2(): AngularFireList<Senvals>{
    return this.datosRef2;
  }

  

  
}

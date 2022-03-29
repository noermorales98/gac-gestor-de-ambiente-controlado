import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Datos } from '../models/datos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private dbPath = '/vals';
  datosRef: AngularFireList<Datos> = null;
  constructor(private db: AngularFireDatabase) { 
    this.datosRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Datos>{
    return this.datosRef;
  }
}

import { Injectable } from '@angular/core';
import { Time } from '@angular/common';
import { Storage } from '@ionic/storage';

export interface LRecords {
  area: string,
  liftname: string, //not the best primary key, but have to deal with it
  weight: number,
  reps: number,
  date: Date,
  time: Time
}

const LRECORDS = 'my-lrecords';

export interface CRecords{
  cardioType: string, //not best primary key, but since this is select from limited range by select it could work
  distance: number,
  completion_time: Time,
  date: Date,
  time: Time
}

const CRECORDS = 'my-crecords';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  addLRecord(record: LRecords): Promise<any>{
    return this.storage.get(LRECORDS).then((records: LRecords[]) => {
      if (records){
        records.push(record);
        return this.storage.set(LRECORDS, records);
      }
      else{
        return this.storage.set(LRECORDS, [record])
      }
    });
  }

  getLRecords(): Promise<LRecords[]>{
    return this.storage.get(LRECORDS);
  }

  updateLRecord(record: LRecords){
    return this.storage.get(LRECORDS).then((records: LRecords[]) => {
      if (!records || records.length === 0){
        return null;
      }

      let newRecord: LRecords[] = [];

      for(let r of records) {
        if (r.liftname == record.liftname){
          newRecord.push(record)
        }
        else{
          newRecord.push(r)
        }
      }

      return this.storage.set(LRECORDS, newRecord)
    });
  }

  deleteLRecord(liftname: string){ //for future reference, im using liftname as primary key, despite being a string
    return this.storage.get(LRECORDS).then((records: LRecords[]) => {
      if (!records || records.length === 0){
        return null;
      }

      let archive: LRecords[] = [];

      for(let r of records){
        if(r.liftname !== liftname){
          archive.push(r); //could pose problem if I want to create multiple records with same liftname
        }
      }
    })
  }

  addCRecord(record: CRecords){
    return this.storage.get(CRECORDS).then((records: CRecords[]) => {
      if(records){
        records.push(record);
        return this.storage.set(CRECORDS, records);
      }
      else{
        return this.storage.set(CRECORDS, [record]);
      }
    });
  }

  getCRecords(){
    return this.storage.get(CRECORDS);
  }

  updateCRecord(record: CRecords){
    return this.storage.get(CRECORDS).then((records: CRecords[]) => {
      if (!records || records.length === 0){
        return null;
      }

      let newRecord: CRecords[] = [];

      for(let r of records) {
        if (r.cardioType == record.cardioType){
          newRecord.push(record)
        }
        else{
          newRecord.push(r)
        }
      }

      return this.storage.set(CRECORDS, newRecord)
    });

  }
  deleteCRecord(record: CRecords){
    return this.storage.get(CRECORDS).then((records: CRecords[]) => {
      if (!records || records.length === 0){
        return null;
      }

      let archive: CRecords[] = [];

      for(let r of records){
        if(r.cardioType !== record.cardioType){
          archive.push(r); //could pose problem if I want to create multiple records with same liftname
        }
      }
    })
  }
}

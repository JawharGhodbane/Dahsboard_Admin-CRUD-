import { Component, OnInit } from '@angular/core';
import { EtabService } from '../services/etab.service';
import { Etablissement } from '../Interfaces/etablissement';
@Component({
  selector: 'app-etab',
  templateUrl: './etab.component.html',
  styleUrls: ['./etab.component.css']
})
export class EtabComponent implements OnInit {

  etabs: Etablissement[] = [];
  constructor(public etabService:EtabService) { }

  ngOnInit(): void {
    this.etabService.getAll().subscribe((data: Etablissement[])=>{
      this.etabs = data;
      console.log(this.etabs);
    })  
  }

  deleteEtab(_id:any){
    this.etabService.delete(_id).subscribe(res => {
         this.etabs = this.etabs.filter(item => item._id !== _id);
         console.log('Etab deleted successfully!');
    })
  }

}

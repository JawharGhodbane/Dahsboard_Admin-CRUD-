import { Component, OnInit } from '@angular/core';
import { FiliereService } from '../services/filiere.service';
import { Filiere } from '../Interfaces/filiere';
@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {
  filieres: Filiere[] = [];
  constructor(public filiereService:FiliereService) { }

  ngOnInit(): void {
    this.filiereService.getAll().subscribe((data: Filiere[])=>{
      this.filieres = data;
      console.log(this.filieres);
    })  
  }

  deleteFiliere(_id:any){
    this.filiereService.delete(_id).subscribe(res => {
         this.filieres = this.filieres.filter(item => item._id !== _id);
         console.log('Filiere deleted successfully!');
    })
  }

}

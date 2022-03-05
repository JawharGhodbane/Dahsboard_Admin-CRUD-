import { Component, OnInit } from '@angular/core';
import { Universite } from '../Interfaces/universite';
import { UnivService } from '../services/univ.service';
@Component({
  selector: 'app-univ',
  templateUrl: './univ.component.html',
  styleUrls: ['./univ.component.css']
})
export class UnivComponent implements OnInit {

  univs: Universite[] = [];
  constructor(public univService: UnivService) { }

  ngOnInit(): void {
    this.univService.getAll().subscribe((data: Universite[])=>{
      this.univs = data;
      console.log(this.univs);
    })  
  }

  deleteUniv(_id:any){
    this.univService.delete(_id).subscribe(res => {
         this.univs = this.univs.filter(item => item._id !== _id);
         console.log('Univ deleted successfully!');
    })
  }

}

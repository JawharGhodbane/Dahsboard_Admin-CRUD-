import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../services/candidat.service';
import { Candidat } from '../Interfaces/candidat';
@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {

  candidats: Candidat[] = [];
  constructor(public candidatService: CandidatService) { }

  ngOnInit(): void {
    this.candidatService.getAll().subscribe((data: Candidat[])=>{
      this.candidats = data;
      console.log(this.candidats);
    })  
  }

  deleteCandidat(_id:any){
    this.candidatService.delete(_id).subscribe(res => {
         this.candidats = this.candidats.filter(item => item._id !== _id);
         console.log('Candidat deleted successfully!');
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../services/candidat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../Interfaces/candidat';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-updatecandidat',
  templateUrl: './updatecandidat.component.html',
  styleUrls: ['./updatecandidat.component.css']
})
export class UpdatecandidatComponent implements OnInit {

  _id: any;
  candidat: Candidat;
  form: FormGroup;
   
  constructor(
    public candidatService: CandidatService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
   
  ngOnInit(): void {
    this._id = this.route.snapshot.params['candidatId'];
    this.candidatService.find(this._id).subscribe((data: Candidat)=>{
      this.candidat = data;
    });
     
    this.form = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      pays_origine: new FormControl('', Validators.required)
    });

  }

  get f(){
    return this.form.controls;
  }
      
  submit(){
    console.log(this.form.value);
    this.candidatService.update(this._id, this.form.value).subscribe(res => {
         console.log('Candidat updated successfully!');
         this.router.navigateByUrl('/admin/candidats/');
    })
  }

}

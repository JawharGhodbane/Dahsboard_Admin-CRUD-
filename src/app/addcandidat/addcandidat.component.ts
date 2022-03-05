import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../services/candidat.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-addcandidat',
  templateUrl: './addcandidat.component.html',
  styleUrls: ['./addcandidat.component.css']
})
export class AddcandidatComponent implements OnInit {
  form: FormGroup;
    
  constructor(
    public candidatService: CandidatService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      pays_origine: new FormControl('', Validators.required),
      mot_de_passe: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.candidatService.create(this.form.value).subscribe(res => {
         console.log('candidat created successfully!');
         this.router.navigateByUrl('/admin/candidats/');
    })
  }
}

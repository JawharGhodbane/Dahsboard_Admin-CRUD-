import { Component, OnInit } from '@angular/core';
import { FiliereService } from '../services/filiere.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Filiere } from '../Interfaces/filiere';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-update-filiere',
  templateUrl: './update-filiere.component.html',
  styleUrls: ['./update-filiere.component.css']
})
export class UpdateFiliereComponent implements OnInit {

  _id: any;
  filiere: Filiere;
  form: FormGroup;
   
  constructor(
    public filiereService:FiliereService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
   
  ngOnInit(): void {
    this._id = this.route.snapshot.params['filiereId'];
    this.filiereService.find(this._id).subscribe((data: Filiere)=>{
      this.filiere = data;
    });
     
    this.form = new FormGroup({
      code_filiere: new FormControl('', Validators.required),
      nom_filiere: new FormControl('', Validators.required),
      etablissement: new FormControl('', Validators.required),
    });
  }

  get f(){
    return this.form.controls;
  }
      
  submit(){
    console.log(this.form.value);
    this.filiereService.update(this._id, this.form.value).subscribe(res => {
         console.log('filiere updated successfully!');
         this.router.navigateByUrl('/admin/filieres/');
    })
  }
}

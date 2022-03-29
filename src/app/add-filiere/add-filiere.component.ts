import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FiliereService } from '../services/filiere.service';
@Component({
  selector: 'app-add-filiere',
  templateUrl: './add-filiere.component.html',
  styleUrls: ['./add-filiere.component.css']
})
export class AddFiliereComponent implements OnInit {

  form: FormGroup;
    
  constructor(
    public filiereService: FiliereService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      code_filiere: new FormControl('', [Validators.required]),
      nom_filiere: new FormControl('', Validators.required),
      etablissement: new FormControl('', Validators.required),
     
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.filiereService.create(this.form.value).subscribe(res => {
         console.log('Filiere created successfully!');
         this.router.navigateByUrl('/admin/etabs/');
    })
  }

}

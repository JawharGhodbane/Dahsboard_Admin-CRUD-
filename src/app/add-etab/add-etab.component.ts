import { Component, OnInit } from '@angular/core';
import { EtabService } from '../services/etab.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-etab',
  templateUrl: './add-etab.component.html',
  styleUrls: ['./add-etab.component.css']
})
export class AddEtabComponent implements OnInit {

  form: FormGroup;
    
  constructor(
    public etabService: EtabService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      code_etab: new FormControl('', [Validators.required]),
      nom_etab: new FormControl('', Validators.required),
      universite: new FormControl('', Validators.required),
     
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.etabService.create(this.form.value).subscribe(res => {
         console.log('etab created successfully!');
         this.router.navigateByUrl('/admin/etabs/');
    })
  }
}

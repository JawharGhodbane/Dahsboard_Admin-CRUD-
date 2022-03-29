import { Component, OnInit } from '@angular/core';
import { EtabService } from '../services/etab.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Etablissement } from '../Interfaces/etablissement';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-update-etab',
  templateUrl: './update-etab.component.html',
  styleUrls: ['./update-etab.component.css']
})
export class UpdateEtabComponent implements OnInit {

  _id: any;
  etab: Etablissement;
  form: FormGroup;
   
  constructor(
    public etabService:EtabService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
   
  ngOnInit(): void {
    this._id = this.route.snapshot.params['etabId'];
    this.etabService.find(this._id).subscribe((data: Etablissement)=>{
      this.etab = data;
    });
     
    this.form = new FormGroup({
      code_etab: new FormControl('', Validators.required),
      nom_etab: new FormControl('', Validators.required),
      universite: new FormControl('', Validators.required),
      
    });
  }

  get f(){
    return this.form.controls;
  }
      
  submit(){
    console.log(this.form.value);
    this.etabService.update(this._id, this.form.value).subscribe(res => {
         console.log('etab updated successfully!');
         this.router.navigateByUrl('/admin/etabs/');
    })
  }
}

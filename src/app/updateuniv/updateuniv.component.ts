import { Component, OnInit } from '@angular/core';
import { UnivService } from '../services/univ.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from '../Interfaces/universite';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-updateuniv',
  templateUrl: './updateuniv.component.html',
  styleUrls: ['./updateuniv.component.css']
})
export class UpdateunivComponent implements OnInit {

  _id: any;
  univ: Universite;
  form: FormGroup;
   
  constructor(
    public univService: UnivService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
   
  ngOnInit(): void {
    this._id = this.route.snapshot.params['univId'];
    this.univService.find(this._id).subscribe((data: Universite)=>{
      this.univ = data;
    });
     
    this.form = new FormGroup({
      _id: new FormControl('', [Validators.required]),
      code_univ: new FormControl('', [Validators.required]),
      nom_univ: new FormControl('', Validators.required),
    });

  }

  get f(){
    return this.form.controls;
  }
      
  submit(){
    console.log(this.form.value);
    this.univService.update(this._id, this.form.value).subscribe(res => {
         console.log('univ updated successfully!');
         this.router.navigateByUrl('/admin/univs/');
    })
  }

}

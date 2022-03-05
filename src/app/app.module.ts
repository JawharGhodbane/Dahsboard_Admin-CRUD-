import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UnivComponent } from './univ/univ.component';
import { EtabComponent } from './etab/etab.component';
import { FiliereComponent } from './filiere/filiere.component';
import { AddunivComponent } from './adduniv/adduniv.component';
import { UpdateunivComponent } from './updateuniv/updateuniv.component';
import { AddEtabComponent } from './add-etab/add-etab.component';
import { UpdateEtabComponent } from './update-etab/update-etab.component';
import { AddFiliereComponent } from './add-filiere/add-filiere.component';
import { UpdateFiliereComponent } from './update-filiere/update-filiere.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UnivComponent,
    EtabComponent,
    FiliereComponent,
    AddunivComponent,
    UpdateunivComponent,
    AddEtabComponent,
    UpdateEtabComponent,
    AddFiliereComponent,
    UpdateFiliereComponent,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

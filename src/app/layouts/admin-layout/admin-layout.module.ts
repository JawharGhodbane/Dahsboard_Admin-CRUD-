import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//my components
import { CandidatComponent } from '../../candidat/candidat.component';
import { CandidaturesComponent } from '../../candidatures/candidatures.component';
import { AddcandidatComponent } from '../../addcandidat/addcandidat.component';
import { UpdatecandidatComponent } from '../../updatecandidat/updatecandidat.component';
import { UnivComponent } from '../../univ/univ.component';
import { EtabComponent } from '../../etab/etab.component';
import { FiliereComponent } from '../../filiere/filiere.component';
import { AddunivComponent } from '../../adduniv/adduniv.component';
import { UpdateunivComponent } from '../../updateuniv/updateuniv.component';
import { AddEtabComponent } from '../../add-etab/add-etab.component';
import { UpdateEtabComponent } from '../../update-etab/update-etab.component';
import { AddFiliereComponent } from '../../add-filiere/add-filiere.component';
import { UpdateFiliereComponent } from '../../update-filiere/update-filiere.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    CandidatComponent,
    CandidaturesComponent,
    AddcandidatComponent,
    UpdatecandidatComponent,
    UnivComponent,
    EtabComponent,
    FiliereComponent,
    AddunivComponent,
    UpdateunivComponent,
    AddEtabComponent,
    UpdateEtabComponent,
    AddFiliereComponent,
    UpdateFiliereComponent,
   
    
  ]
})

export class AdminLayoutModule {}

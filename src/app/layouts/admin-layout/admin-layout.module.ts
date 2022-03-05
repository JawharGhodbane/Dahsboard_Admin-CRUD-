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
import { CandidatComponent } from '../../candidat/candidat.component';
import { CandidaturesComponent } from '../../candidatures/candidatures.component';
import { Candidat } from '../../Interfaces/candidat';
import { AddcandidatComponent } from '../../addcandidat/addcandidat.component';
import { UpdatecandidatComponent } from '../../updatecandidat/updatecandidat.component';

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
    UpdatecandidatComponent
  ]
})

export class AdminLayoutModule {}

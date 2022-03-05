import { Routes } from '@angular/router';
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
export const AdminLayoutRoutes: Routes = [

    //candidats
    { path: 'admin/candidats', component: CandidatComponent },
    { path: 'admin/candidats/add', component: AddcandidatComponent },
    { path: 'admin/candidats/update/:candidatId', component: UpdatecandidatComponent },
    //candidacy
    { path: 'admin/candidacy', component: CandidaturesComponent },
    
    //université
    { path: 'admin/univs', component: UnivComponent },
    { path: 'admin/univs/add', component: AddunivComponent },
    { path: 'admin/univs/update/:univId', component: UpdateunivComponent },

    //etab
    { path: 'admin/etabs', component: EtabComponent },
    { path: 'admin/etabs/add', component: AddEtabComponent },
    { path: 'admin/etabs/update/:etabId', component: UpdateEtabComponent },

    //filiere
    { path: 'admin/filieres', component: FiliereComponent },
    { path: 'admin/filieres/add', component: AddFiliereComponent },
    { path: 'admin/filieres/update/:filiereId', component: UpdateFiliereComponent },

];

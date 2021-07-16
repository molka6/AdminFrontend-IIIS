import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffreEmploiComponent } from './OffreEmploi-Folder/offre-emploi/offre-emploi.component';
import { EquipeComponent } from './equipe-Folder/equipe/equipe.component';
import { DashboardComponent } from './dashboard-folder/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { UpdateOffreComponent } from './OffreEmploi-Folder/update-offre/update-offre.component';
import { CreateOffreComponent } from './OffreEmploi-Folder/create-offre/create-offre.component';
import { PartenaireComponent } from './Partenaire-Folder/partenaire/partenaire.component';
import { CreatePartenaireComponent } from './Partenaire-Folder/create-partenaire/create-partenaire.component';
import { UpdatePartenaireComponent } from './Partenaire-Folder/update-partenaire/update-partenaire.component';
import { IlefServicesComponent } from './IIS-Services-Folder/ilef-services/ilef-services.component';
import { CreateServiceComponent } from './IIS-Services-Folder/create-service/create-service.component';
import { EquipeFormComponent } from './equipe-Folder/equipe-form/equipe-form.component';
import { UpdateEquipeComponent } from './equipe-Folder/update-equipe/update-equipe.component';
import { UpdateServiceComponent } from './IIS-Services-Folder/update-service/update-service.component';
import { ArticleComponent } from './ArticleFolder/article/article.component';
import { CreateArticleComponent } from './ArticleFolder/create-article/create-article.component';
import { MembreComponent } from './membre-Folder/membre/membre.component';
import { LoginComponent } from './Auth/login/login.component';
import{AuthGuardComponent} from './Auth/login/auth-guard/auth-guard.component' ; 
import { Page404Component } from './404-Folder/page404/page404.component';
const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent,canActivate: [AuthGuardComponent]  },
  { path: 'OffreEmploi', component: OffreEmploiComponent ,canActivate: [AuthGuardComponent]  },
  { path: 'OffreEmploi/:id', component: OffreEmploiComponent ,canActivate: [AuthGuardComponent]  },
  { path: 'CreateOffreEmploi', component: CreateOffreComponent,canActivate: [AuthGuardComponent]  },
  { path: 'UpdateOffre/:id', component: UpdateOffreComponent ,canActivate: [AuthGuardComponent] },
  { path: 'Partenaire', component: PartenaireComponent  ,canActivate: [AuthGuardComponent]},
  { path: 'CreatePartenaire', component: CreatePartenaireComponent  ,canActivate: [AuthGuardComponent]},
  { path: 'UpdatePartenaire/:id', component: UpdatePartenaireComponent ,canActivate: [AuthGuardComponent] },
  { path: 'Partenaire/:id', component: PartenaireComponent  ,canActivate: [AuthGuardComponent]},
  { path: 'Services', component: IlefServicesComponent ,canActivate: [AuthGuardComponent] },
  { path: 'CreateServiceIlef', component: CreateServiceComponent  ,canActivate: [AuthGuardComponent]},
  { path: 'UpdateOffre/:id', component: UpdateOffreComponent  ,canActivate: [AuthGuardComponent]},
  { path: 'UpdateEquipe/:id', component: UpdateEquipeComponent ,canActivate: [AuthGuardComponent] },
  { path: 'Equipe', component: EquipeComponent  ,canActivate: [AuthGuardComponent]},
  { path: 'createEquipe', component: EquipeFormComponent  ,canActivate: [AuthGuardComponent]},
  { path: 'UpdateService/:id', component: UpdateServiceComponent  ,canActivate: [AuthGuardComponent]},
  { path: 'Articles', component: ArticleComponent ,canActivate: [AuthGuardComponent] },
  { path: 'CreateArticle', component: CreateArticleComponent ,canActivate: [AuthGuardComponent] },
  { path: 'createEquipe', component:EquipeFormComponent  ,canActivate: [AuthGuardComponent]},
  { path: 'membre', component:MembreComponent ,canActivate: [AuthGuardComponent] },
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  { path: '', component:LoginComponent },
  { path: '**', component:Page404Component   }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }

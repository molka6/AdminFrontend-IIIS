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
import { UpdateArticleComponent } from './ArticleFolder/update-article/update-article.component'
import { MembreComponent } from './membre-Folder/membre/membre.component';
import { LoginComponent } from './Auth/login/login.component';
import { AuthGuardComponent } from './Auth/login/auth-guard/auth-guard.component';
import { ContactComponent } from './ContactFolder/contact/contact.component';
import { ContactDetaillsComponent } from './ContactFolder/contact-detaills/contact-detaills.component';
import { CommentairesComponent } from './ArticleFolder/commentaires/commentaires.component';
const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent  },
  { path: 'OffreEmploi', component: OffreEmploiComponent },
  { path: 'OffreEmploi/:id', component: OffreEmploiComponent },
  { path: 'CreateOffreEmploi', component: CreateOffreComponent, },
  { path: 'UpdateOffre/:id', component: UpdateOffreComponent, },
  { path: 'Partenaire', component: PartenaireComponent, },
  { path: 'CreatePartenaire', component: CreatePartenaireComponent, },
  { path: 'UpdatePartenaire/:id', component: UpdatePartenaireComponent, },
  { path: 'Partenaire/:id', component: PartenaireComponent, },
  { path: 'Services', component: IlefServicesComponent, },
  { path: 'CreateServiceIlef', component: CreateServiceComponent, },
  { path: 'UpdateOffre/:id', component: UpdateOffreComponent, },
  { path: 'UpdateEquipe/:id', component: UpdateEquipeComponent, },
  { path: 'Equipe', component: EquipeComponent, },
  { path: 'createEquipe', component: EquipeFormComponent, },
  { path: 'UpdateService/:id', component: UpdateServiceComponent, },
  { path: 'Articles', component: ArticleComponent, },
  { path: 'CreateArticle', component: CreateArticleComponent, },
  { path: 'createEquipe', component: EquipeFormComponent, },
  { path: 'membre', component: MembreComponent, },
  { path: 'UpdateArticle/:id', component: UpdateArticleComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Contactdetaills/:id', component: ContactDetaillsComponent },
  { path: 'listeCommentaire/:id', component: CommentairesComponent },
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  { path: '', component: LoginComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }

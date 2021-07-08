import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article-Folder/article/article.component';
import { OffreEmploiComponent } from './OffreEmploi-Folder/offre-emploi/offre-emploi.component';
import { EquipeComponent } from './equipe-Folder/equipe/equipe.component';
import { CreateArticleComponent } from './article-folder/create-article/create-article.component';
import { DashboardComponent } from './dashboard-folder/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { UpdateOffreComponent } from './OffreEmploi-Folder/update-offre/update-offre.component';
import { CreateOffreComponent } from './OffreEmploi-Folder/create-offre/create-offre.component';
import { PartenaireComponent } from './Partenaire-Folder/partenaire/partenaire.component';
import { CreatePartenaireComponent } from './Partenaire-Folder/create-partenaire/create-partenaire.component';
import { UpdatePartenaireComponent } from './Partenaire-Folder/update-partenaire/update-partenaire.component';
import { IlefServicesComponent } from './IIS-Services-Folder/ilef-services/ilef-services.component';
import { CreateServiceComponent } from './IIS-Services-Folder/create-service/create-service.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'OffreEmploi', component: OffreEmploiComponent },
  { path: 'OffreEmploi/:id', component: OffreEmploiComponent },
  { path: 'EquipeIIS', component: EquipeComponent },
  { path: 'CreateArticle', component: CreateArticleComponent },
  { path: 'CreateOffreEmploi', component: CreateOffreComponent },
  { path: 'UpdateOffre/:id', component: UpdateOffreComponent },
  { path: 'Partenaire', component: PartenaireComponent },
  { path: 'CreatePartenaire', component: CreatePartenaireComponent },
  { path: 'UpdatePartenaire/:id', component: UpdatePartenaireComponent },
  { path: 'Partenaire/:id', component: PartenaireComponent },
  { path: 'Services', component: IlefServicesComponent },
  { path: 'CreateService', component: CreateServiceComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }

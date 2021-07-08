import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { ArticleComponent } from './article-Folder/article/article.component';
import { OffreEmploiComponent } from './OffreEmploi-Folder/offre-emploi/offre-emploi.component';
import { EquipeComponent } from './equipe-Folder/equipe/equipe.component';
// import { CreateArticleComponent } from './article-folder/create-article/create-article.component';
import { DashboardComponent } from './dashboard-folder/dashboard/dashboard.component';
import { CreateOffreEmploiComponent } from './offreEmploi-folder/create-offre-emploi/create-offre-emploi.component';
import { EquipeFormComponent } from './Equipe-Folder/equipe-form/equipe-form.component';
import { UpdateFormComponent } from './Equipe-folder/update-form/update-form.component';



const routes: Routes = [
{ path: '', component:DashboardComponent},
{ path: 'OffreEmploi', component:OffreEmploiComponent},
{ path: 'EquipeIIS', component:EquipeComponent},
{ path: 'CreateOffreEmploi', component:CreateOffreEmploiComponent},
{ path: 'Equipe', component:EquipeFormComponent},
{path: 'UpdateEquipe/:id', component :UpdateFormComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

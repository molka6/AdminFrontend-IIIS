import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article-Folder/article/article.component';
import { OffreEmploiComponent } from './OffreEmploi-Folder/offre-emploi/offre-emploi.component';
import { EquipeComponent } from './equipe-Folder/equipe/equipe.component';
import { CreateArticleComponent } from './article-folder/create-article/create-article.component';
import { DashboardComponent } from './dashboard-folder/dashboard/dashboard.component';
import { CreateOffreEmploiComponent } from './offreEmploi-folder/create-offre-emploi/create-offre-emploi.component';


const routes: Routes = [
{ path: '', component:DashboardComponent},
{ path: 'Articles', component: ArticleComponent},
{ path: 'OffreEmploi', component:OffreEmploiComponent},
{ path: 'EquipeIIS', component:EquipeComponent},
{ path: 'CreateArticle', component:CreateArticleComponent},
{ path: 'CreateOffreEmploi', component:CreateOffreEmploiComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

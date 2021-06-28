import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeadComponent } from './menu-head-folder/menu-head/menu-head.component';
import { MenuLeftComponent } from './menu-left-folder/menu-left/menu-left.component';
import { ArticleComponent } from './article-Folder/article/article.component';
import { OffreEmploiComponent } from './OffreEmploi-Folder/offre-emploi/offre-emploi.component';
import { FooterComponent } from './footer-folder/footer/footer.component';
import { EquipeComponent } from './equipe-Folder/equipe/equipe.component';
import { CreateArticleComponent } from './article-folder/create-article/create-article.component';
import { DashboardComponent } from './dashboard-folder/dashboard/dashboard.component';
import { CreateOffreEmploiComponent } from './offreEmploi-folder/create-offre-emploi/create-offre-emploi.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuHeadComponent,
    MenuLeftComponent,
    ArticleComponent,
    OffreEmploiComponent,
    FooterComponent,
    EquipeComponent,
    CreateArticleComponent,
    DashboardComponent,
    CreateOffreEmploiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

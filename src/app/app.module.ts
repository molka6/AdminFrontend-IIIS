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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateOffreComponent } from './OffreEmploi-Folder/update-offre/update-offre.component';
import { CreateOffreComponent } from './OffreEmploi-Folder/create-offre/create-offre.component';
import { CreateArticlesComponent } from './Article-Folder/create-articles/create-articles.component';
import { PartenaireComponent } from './Partenaire-Folder/partenaire/partenaire.component';
import { CreatePartenaireComponent } from './Partenaire-Folder/create-partenaire/create-partenaire.component';
import { UpdatePartenaireComponent } from './Partenaire-Folder/update-partenaire/update-partenaire.component';
import { IlefServicesComponent } from './IIS-Services-Folder/ilef-services/ilef-services.component';
import { CreateServiceComponent } from './IIS-Services-Folder/create-service/create-service.component';

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
    UpdateOffreComponent,
    CreateOffreComponent,
    CreateArticlesComponent,
    PartenaireComponent,
    CreatePartenaireComponent,
    UpdatePartenaireComponent,
    IlefServicesComponent,
    CreateServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

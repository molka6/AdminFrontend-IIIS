import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeadComponent } from './menu-head-folder/menu-head/menu-head.component';
import { OffreEmploiComponent } from './OffreEmploi-Folder/offre-emploi/offre-emploi.component';
import { FooterComponent } from './footer-folder/footer/footer.component';
import { EquipeComponent } from './equipe-Folder/equipe/equipe.component';
import { DashboardComponent } from './dashboard-folder/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateOffreComponent } from './OffreEmploi-Folder/update-offre/update-offre.component';
import { CreateOffreComponent } from './OffreEmploi-Folder/create-offre/create-offre.component';
import { PartenaireComponent } from './Partenaire-Folder/partenaire/partenaire.component';
import { CreatePartenaireComponent } from './Partenaire-Folder/create-partenaire/create-partenaire.component';
import { UpdatePartenaireComponent } from './Partenaire-Folder/update-partenaire/update-partenaire.component';
import { IlefServicesComponent } from './IIS-Services-Folder/ilef-services/ilef-services.component';
import { CreateServiceComponent } from './IIS-Services-Folder/create-service/create-service.component';
import { HttpModule } from '@angular/http';
import { EquipeFormComponent } from './equipe-Folder/equipe-form/equipe-form.component';
import { UpdateEquipeComponent } from './equipe-Folder/update-equipe/update-equipe.component';
import { UpdateServiceComponent } from './IIS-Services-Folder/update-service/update-service.component';
import { ArticleComponent } from './ArticleFolder/article/article.component';
import { CreateArticleComponent } from './ArticleFolder/create-article/create-article.component';
import { MembreComponent } from './membre-Folder/membre/membre.component';
import { LoginComponent } from './Auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';
import { AuthGuardComponent } from './Auth/login/auth-guard/auth-guard.component';
import { UpdateArticleComponent } from './ArticleFolder/update-article/update-article.component';
import { ContactComponent } from './ContactFolder/contact/contact.component';
import { ContactDetaillsComponent } from './ContactFolder/contact-detaills/contact-detaills.component';
import { CommentairesComponent } from './ArticleFolder/commentaires/commentaires.component';

import {Page404Component} from './404-Folder/page404/page404.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuHeadComponent,
    OffreEmploiComponent,
    FooterComponent,
    EquipeComponent,
    EquipeFormComponent,
    DashboardComponent,
    UpdateOffreComponent,
    CreateOffreComponent,
    PartenaireComponent,
    CreatePartenaireComponent,
    UpdatePartenaireComponent,
    IlefServicesComponent,
    CreateServiceComponent,
    UpdateEquipeComponent,
    UpdateServiceComponent,
    ArticleComponent,
    CreateArticleComponent,
    MembreComponent,
    LoginComponent,
    AlertComponent,
    AuthGuardComponent,
    Page404Component,

    UpdateArticleComponent,
    ContactComponent,
    ContactDetaillsComponent,
    CommentairesComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule


  ],
  providers: [AuthGuardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

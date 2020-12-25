import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/group-main/sidebar/sidebar.component';
import { ContainerComponent } from './components/group-main/container/container.component';
import { MainPageComponent } from './components/group-main/main-page/main-page.component';
import { CharacterListingComponent } from './components/group-characters/character-listing/character-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterCardComponent } from './components/group-characters/character-card/character-card.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DetailContainerComponent } from './components/group-main/detail-container/detail-container.component';
import { ElementCardComponent } from './components/group-elements/element-card/element-card.component';
import { ElementsListingComponent } from './components/group-elements/elements-listing/elements-listing.component';
import { ElementsDetailComponent } from './components/group-elements/elements-detail/elements-detail.component';

const routes: Routes = [
  { path: 'characters', component: CharacterListingComponent },
  { path: 'elements', component: ElementsListingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContainerComponent,
    MainPageComponent,
    CharacterListingComponent,
    CharacterCardComponent,
    DetailContainerComponent,
    ElementCardComponent,
    ElementsListingComponent,
    ElementsDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

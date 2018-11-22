import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {RouterModule} from '@angular/router';
import {routes} from './app.router';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { ChatsComponent } from './home/pages/chats/chats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { UserDetailsModalComponent } from './home/modals/user-details-modal/user-details-modal.component';
import {MatButtonModule} from '@angular/material/button';
import { CommunitiesSelectionComponent } from './home/pages/communities-selection/communities-selection.component';
import {MatInputModule} from '@angular/material/input';
import { AuthPageComponent } from './home/pages/auth-page/auth-page.component';
import { FilterCommunitiesPipe } from './shared/pipes/filter-communities.pipe';
import {PolygonAreaService} from './core/services/polygon-area.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ChatsComponent,
    UserDetailsModalComponent,
    CommunitiesSelectionComponent,
    AuthPageComponent,
    FilterCommunitiesPipe
  ],
  entryComponents:[UserDetailsModalComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      {
        useHash: true
      }
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    PolygonAreaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

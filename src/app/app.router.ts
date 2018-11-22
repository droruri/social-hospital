
import {Routes} from '@angular/router';
import {HomePageComponent} from './home/pages/home-page/home-page.component';
import {ChatsComponent} from './home/pages/chats/chats.component';
import {CommunitiesSelectionComponent} from './home/pages/communities-selection/communities-selection.component';



const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'chats', component: ChatsComponent},
  { path: 'communities-selection', component: CommunitiesSelectionComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

export { routes };

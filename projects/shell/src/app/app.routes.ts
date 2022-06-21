import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'config',
      component: ConfigComponent
    },
    // {
    //   path: 'react',
    //   component: WebComponentWrapper,
    //   data: {
    //     type: 'script',
    //     remoteEntry:
    //       'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
    //     remoteName: 'react',
    //     exposedModule: './web-components',
    //     elementName: 'react-element',
    //   } as WebComponentWrapperOptions,
    // },
    // {
    //   path: 'flights',
    //   loadChildren: () => loadRemoteModule({
    //       type: 'manifest',
    //       remoteName: 'mfe1',
    //       exposedModule: './Module'
    //     })
    //     .then(m => m.FlightsModule)
    // },
    // {
    //   path: 'bookings',
    //   loadChildren: () => loadRemoteModule({
    //       type: 'manifest',
    //       remoteName: 'mfe2',
    //       exposedModule: './Module'
    //     })
    //     .then(m => m.BookingsModule)
    // },
];

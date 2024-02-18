import { Route } from '@angular/router';

export const appRoutes: Route[] = [
{
path: '',
loadComponent: () =>
    import('./Home-page.component').then((m) => m.HomePageComponent),

},

{
    path: 'settings',
    loadComponent: () =>
        import('./settings-page.component').then((m) => m.settingsPageComponent),
    
    },

    {
        path: '**',
        redirectTo: '',
        
        }

];

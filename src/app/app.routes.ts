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
        import('./Setting-section.component').then((m) => m.settingsPageComponent),
    
    },

    {
        path: '**',
        redirectTo: '',
        
        }

];

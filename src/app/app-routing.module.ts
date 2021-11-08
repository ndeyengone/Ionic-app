import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'mot-de-passe-oublie',
    loadChildren: () => import('./mot-de-passe-oublie/mot-de-passe-oublie.module').then( m => m.MotDePasseOubliePageModule)
  },
  {
    path: 'creer-reunion',
    loadChildren: () => import('./creer-reunion/creer-reunion.module').then( m => m.CreerReunionPageModule)
  },
  {
    path: 'modifier-profil',
    loadChildren: () => import('./modifier-profil/modifier-profil.module').then( m => m.ModifierProfilPageModule)
  },
  {
    path: 'creer-salle',
    loadChildren: () => import('./creer-salle/creer-salle.module').then( m => m.CreerSallePageModule)
  },
  {
    path: 'ajouter-employe',
    loadChildren: () => import('./ajouter-employe/ajouter-employe.module').then( m => m.AjouterEmployePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

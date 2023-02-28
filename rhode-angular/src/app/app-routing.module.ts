import { AuthGuard } from './guards/auth.guard'
import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'project-select',
    loadChildren: () => import('./pages/project-select/project-select.module').then( m => m.ProjectSelectPageModule)
  },
  {
    path: 'project-select/:projectid',
    loadChildren: () => 
      import('./pages/projects/projects.module').then((m) => m.ProjectsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1', 
        children: [
          {
            path: '', 
            loadChildren: '../lista/lista.module#ListaPageModule'
          }
        ]
      },
      {
        path: 'tab2', 
        children: [
          {
            path: '',
            loadChildren: '../favoritos/favoritos.module#FavoritosPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }, 
      {
        path: 'estadisticas/:id/:nombre',
        loadChildren: '../estadisticas/estadisticas.module#EstadisticasPageModule'
      },{// Añadimos la nueva ruta:
        path: 'estadisticas/:id',
        loadChildren: '../estadisticas/estadisticas.module#EstadisticasPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

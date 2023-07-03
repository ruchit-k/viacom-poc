import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridTableComponent } from './modules/grid-table/grid-table.component';
import { OverViewComponent } from './modules/over-view/over-view.component';

const routes: Routes = [
  { path: 'ag-grid-table', component: GridTableComponent },
  { path: 'sync-fusion', component: OverViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

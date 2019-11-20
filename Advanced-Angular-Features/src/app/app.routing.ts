import { Routes, RouterModule } from "@angular/router";
import {FormComponent} from "./core/form/form.component";
import {TableComponent} from "./core/table/table.component";

const routes: Routes = [
  { path: "form/:mode/:id", component: FormComponent },
  { path: "", component: TableComponent }];

export const routing = RouterModule.forRoot(routes);

import { Routes, RouterModule } from "@angular/router";
import {FormComponent} from "./core/form/form.component";
import {TableComponent} from "./core/table/table.component";

const routes: Routes = [
  { path: "form/edit", component: FormComponent },
  { path: "form/create", component: FormComponent },
  { path: "", component: TableComponent }];

export const routing = RouterModule.forRoot(routes);

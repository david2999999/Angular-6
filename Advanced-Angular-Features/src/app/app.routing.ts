import { Routes, RouterModule } from "@angular/router";
import {FormComponent} from "./core/form/form.component";
import {TableComponent} from "./core/table/table.component";
import {NotFoundComponent} from "./core/notFound.component";

const routes: Routes = [
  { path: "form/:mode/:id", component: FormComponent },
  { path: "form/:mode", component: FormComponent },
  { path: "", component: TableComponent },
  { path: "**", component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);

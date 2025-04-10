import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        loadChildren: ()=> import("./reusable/reusable.module").then((re)=>re.ReusableModule)
    }
];

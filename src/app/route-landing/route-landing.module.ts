import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RouteLandingComponent } from "./route-landing.component";


const routes: Routes = [{
    path: '',
    component: RouteLandingComponent,
    children: [
        {
            path: ':id', 
            loadChildren: () => import('./route-landing.module').then(m => m.RouteLandingModule)
        }
    ]
}];

@NgModule({
    declarations: [RouteLandingComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
    
})
export class RouteLandingModule
{

}
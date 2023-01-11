import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";

@Component({
    selector: "route-landing",
    template: `
        Route-Landing Component ==> 
        {{ activatedRoute.snapshot.params | json }}
        <p style="margin:10px">
             <router-outlet> </router-outlet>
        </p>
    `
})
export class RouteLandingComponent
{
    /**
     *
     */
    constructor(public activatedRoute : ActivatedRoute) {
            
    }

}
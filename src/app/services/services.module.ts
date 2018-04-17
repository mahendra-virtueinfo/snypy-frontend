import { ModuleWithProviders, NgModule } from '@angular/core';

import { UserResource } from './resources/user.resource';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [/* declare in `forRoot()` */],
})
export class ServicesModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ServicesModule,
            providers: [
                UserResource
            ]
        }
    }

}
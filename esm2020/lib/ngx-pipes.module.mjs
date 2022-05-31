import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnrollArrayPipe } from "./pipes/unroll-array.pipe";
import { SegmentsPipe } from "./pipes/segments.pipe";
import { ShortenFullpathPipe } from "./pipes/fullpath.pipe";
import { FileSizePipe } from "./pipes/file-size.pipe";
import { UnzipObjectPipe } from "./pipes/unzip-object.pipe";
import { ParentDirPipe } from "./pipes/parent-dir.pipe";
import { SafeDomPipe } from './pipes/safe-dom.pipe';
import * as i0 from "@angular/core";
export class PolpwareNgxPipesModule {
}
/** @nocollapse */ PolpwareNgxPipesModule.ɵfac = function PolpwareNgxPipesModule_Factory(t) { return new (t || PolpwareNgxPipesModule)(); };
/** @nocollapse */ PolpwareNgxPipesModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: PolpwareNgxPipesModule });
/** @nocollapse */ PolpwareNgxPipesModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolpwareNgxPipesModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    UnrollArrayPipe,
                    SegmentsPipe,
                    ShortenFullpathPipe,
                    FileSizePipe,
                    UnzipObjectPipe,
                    ParentDirPipe,
                    SafeDomPipe
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    UnrollArrayPipe,
                    SegmentsPipe,
                    ShortenFullpathPipe,
                    FileSizePipe,
                    UnzipObjectPipe,
                    ParentDirPipe,
                    SafeDomPipe
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpwareNgxPipesModule, { declarations: [UnrollArrayPipe,
        SegmentsPipe,
        ShortenFullpathPipe,
        FileSizePipe,
        UnzipObjectPipe,
        ParentDirPipe,
        SafeDomPipe], imports: [CommonModule], exports: [UnrollArrayPipe,
        SegmentsPipe,
        ShortenFullpathPipe,
        FileSizePipe,
        UnzipObjectPipe,
        ParentDirPipe,
        SafeDomPipe] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBpcGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL25neC1waXBlcy9zcmMvbGliL25neC1waXBlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBMEJwRCxNQUFNLE9BQU8sc0JBQXNCOzsrR0FBdEIsc0JBQXNCO3VHQUF0QixzQkFBc0I7MkdBYnRCO1lBQ0wsWUFBWTtTQUNmO3VGQVdRLHNCQUFzQjtjQXZCbEMsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixlQUFlO29CQUNmLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixXQUFXO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxlQUFlO29CQUNmLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixXQUFXO2lCQUNkO2FBQ0o7O3dGQUNZLHNCQUFzQixtQkFyQjNCLGVBQWU7UUFDZixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixlQUFlO1FBQ2YsYUFBYTtRQUNiLFdBQVcsYUFHWCxZQUFZLGFBR1osZUFBZTtRQUNmLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGVBQWU7UUFDZixhQUFhO1FBQ2IsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBVbnJvbGxBcnJheVBpcGUgfSBmcm9tIFwiLi9waXBlcy91bnJvbGwtYXJyYXkucGlwZVwiO1xuaW1wb3J0IHsgU2VnbWVudHNQaXBlIH0gZnJvbSBcIi4vcGlwZXMvc2VnbWVudHMucGlwZVwiO1xuaW1wb3J0IHsgU2hvcnRlbkZ1bGxwYXRoUGlwZSB9IGZyb20gXCIuL3BpcGVzL2Z1bGxwYXRoLnBpcGVcIjtcbmltcG9ydCB7IEZpbGVTaXplUGlwZSB9IGZyb20gXCIuL3BpcGVzL2ZpbGUtc2l6ZS5waXBlXCI7XG5pbXBvcnQgeyBVbnppcE9iamVjdFBpcGUgfSBmcm9tIFwiLi9waXBlcy91bnppcC1vYmplY3QucGlwZVwiO1xuaW1wb3J0IHsgUGFyZW50RGlyUGlwZSB9IGZyb20gXCIuL3BpcGVzL3BhcmVudC1kaXIucGlwZVwiO1xuaW1wb3J0IHsgU2FmZURvbVBpcGUgfSBmcm9tICcuL3BpcGVzL3NhZmUtZG9tLnBpcGUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFVucm9sbEFycmF5UGlwZSxcbiAgICAgICAgU2VnbWVudHNQaXBlLFxuICAgICAgICBTaG9ydGVuRnVsbHBhdGhQaXBlLFxuICAgICAgICBGaWxlU2l6ZVBpcGUsXG4gICAgICAgIFVuemlwT2JqZWN0UGlwZSxcbiAgICAgICAgUGFyZW50RGlyUGlwZSxcbiAgICAgICAgU2FmZURvbVBpcGVcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFVucm9sbEFycmF5UGlwZSxcbiAgICAgICAgU2VnbWVudHNQaXBlLFxuICAgICAgICBTaG9ydGVuRnVsbHBhdGhQaXBlLFxuICAgICAgICBGaWxlU2l6ZVBpcGUsXG4gICAgICAgIFVuemlwT2JqZWN0UGlwZSxcbiAgICAgICAgUGFyZW50RGlyUGlwZSxcbiAgICAgICAgU2FmZURvbVBpcGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvbHB3YXJlTmd4UGlwZXNNb2R1bGUgeyB9XG4iXX0=
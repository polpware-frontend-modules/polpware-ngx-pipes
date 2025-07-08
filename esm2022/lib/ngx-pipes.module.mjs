import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnrollArrayPipe } from "./pipes/unroll-array.pipe";
import { SegmentsPipe } from "./pipes/segments.pipe";
import { ShortenFullpathPipe } from "./pipes/fullpath.pipe";
import { FileSizePipe } from "./pipes/file-size.pipe";
import { UnzipObjectPipe } from "./pipes/unzip-object.pipe";
import { ParentDirPipe } from "./pipes/parent-dir.pipe";
import { SafeDomPipe } from './pipes/safe-dom.pipe';
import { TrimEndPipe } from './pipes/trim-end.pipe';
import { TrimStartPipe } from './pipes/trim-start.pipe';
import * as i0 from "@angular/core";
export class PolpwareNgxPipesModule {
    /** @nocollapse */ static { this.ɵfac = function PolpwareNgxPipesModule_Factory(t) { return new (t || PolpwareNgxPipesModule)(); }; }
    /** @nocollapse */ static { this.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: PolpwareNgxPipesModule }); }
    /** @nocollapse */ static { this.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolpwareNgxPipesModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    UnrollArrayPipe,
                    SegmentsPipe,
                    ShortenFullpathPipe,
                    FileSizePipe,
                    UnzipObjectPipe,
                    ParentDirPipe,
                    SafeDomPipe,
                    TrimEndPipe,
                    TrimStartPipe
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
                    SafeDomPipe,
                    TrimEndPipe,
                    TrimStartPipe
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpwareNgxPipesModule, { declarations: [UnrollArrayPipe,
        SegmentsPipe,
        ShortenFullpathPipe,
        FileSizePipe,
        UnzipObjectPipe,
        ParentDirPipe,
        SafeDomPipe,
        TrimEndPipe,
        TrimStartPipe], imports: [CommonModule], exports: [UnrollArrayPipe,
        SegmentsPipe,
        ShortenFullpathPipe,
        FileSizePipe,
        UnzipObjectPipe,
        ParentDirPipe,
        SafeDomPipe,
        TrimEndPipe,
        TrimStartPipe] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBpcGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL25neC1waXBlcy9zcmMvbGliL25neC1waXBlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUE4QnhELE1BQU0sT0FBTyxzQkFBc0I7MEdBQXRCLHNCQUFzQjtrR0FBdEIsc0JBQXNCO3NHQWQzQixZQUFZOztpRkFjUCxzQkFBc0I7Y0EzQmxDLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsZUFBZTtvQkFDZixZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsWUFBWTtvQkFDWixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxXQUFXO29CQUNYLGFBQWE7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxlQUFlO29CQUNmLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsYUFBYTtpQkFDaEI7YUFDSjs7d0ZBQ1ksc0JBQXNCLG1CQXpCM0IsZUFBZTtRQUNmLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGVBQWU7UUFDZixhQUFhO1FBQ2IsV0FBVztRQUNYLFdBQVc7UUFDWCxhQUFhLGFBR2IsWUFBWSxhQUdaLGVBQWU7UUFDZixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixlQUFlO1FBQ2YsYUFBYTtRQUNiLFdBQVc7UUFDWCxXQUFXO1FBQ1gsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBVbnJvbGxBcnJheVBpcGUgfSBmcm9tIFwiLi9waXBlcy91bnJvbGwtYXJyYXkucGlwZVwiO1xuaW1wb3J0IHsgU2VnbWVudHNQaXBlIH0gZnJvbSBcIi4vcGlwZXMvc2VnbWVudHMucGlwZVwiO1xuaW1wb3J0IHsgU2hvcnRlbkZ1bGxwYXRoUGlwZSB9IGZyb20gXCIuL3BpcGVzL2Z1bGxwYXRoLnBpcGVcIjtcbmltcG9ydCB7IEZpbGVTaXplUGlwZSB9IGZyb20gXCIuL3BpcGVzL2ZpbGUtc2l6ZS5waXBlXCI7XG5pbXBvcnQgeyBVbnppcE9iamVjdFBpcGUgfSBmcm9tIFwiLi9waXBlcy91bnppcC1vYmplY3QucGlwZVwiO1xuaW1wb3J0IHsgUGFyZW50RGlyUGlwZSB9IGZyb20gXCIuL3BpcGVzL3BhcmVudC1kaXIucGlwZVwiO1xuaW1wb3J0IHsgU2FmZURvbVBpcGUgfSBmcm9tICcuL3BpcGVzL3NhZmUtZG9tLnBpcGUnO1xuaW1wb3J0IHsgVHJpbUVuZFBpcGUgfSBmcm9tICcuL3BpcGVzL3RyaW0tZW5kLnBpcGUnO1xuaW1wb3J0IHsgVHJpbVN0YXJ0UGlwZSB9IGZyb20gJy4vcGlwZXMvdHJpbS1zdGFydC5waXBlJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBVbnJvbGxBcnJheVBpcGUsXG4gICAgICAgIFNlZ21lbnRzUGlwZSxcbiAgICAgICAgU2hvcnRlbkZ1bGxwYXRoUGlwZSxcbiAgICAgICAgRmlsZVNpemVQaXBlLFxuICAgICAgICBVbnppcE9iamVjdFBpcGUsXG4gICAgICAgIFBhcmVudERpclBpcGUsXG4gICAgICAgIFNhZmVEb21QaXBlLFxuICAgICAgICBUcmltRW5kUGlwZSxcbiAgICAgICAgVHJpbVN0YXJ0UGlwZVxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVW5yb2xsQXJyYXlQaXBlLFxuICAgICAgICBTZWdtZW50c1BpcGUsXG4gICAgICAgIFNob3J0ZW5GdWxscGF0aFBpcGUsXG4gICAgICAgIEZpbGVTaXplUGlwZSxcbiAgICAgICAgVW56aXBPYmplY3RQaXBlLFxuICAgICAgICBQYXJlbnREaXJQaXBlLFxuICAgICAgICBTYWZlRG9tUGlwZSxcbiAgICAgICAgVHJpbUVuZFBpcGUsXG4gICAgICAgIFRyaW1TdGFydFBpcGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvbHB3YXJlTmd4UGlwZXNNb2R1bGUgeyB9XG4iXX0=
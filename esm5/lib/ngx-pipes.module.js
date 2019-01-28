/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnrollArrayPipe } from "./pipes/unroll-array.pipe";
import { SegmentsPipe } from "./pipes/segments.pipe";
import { ShortenFullpathPipe } from "./pipes/fullpath.pipe";
import { FileSizePipe } from "./pipes/file-size.pipe";
import { UnzipObjectPipe } from "./pipes/unzip-object.pipe";
import { ParentDirPipe } from "./pipes/parent-dir.pipe";
var PolpwareNgxPipesModule = /** @class */ (function () {
    function PolpwareNgxPipesModule() {
    }
    PolpwareNgxPipesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        UnrollArrayPipe,
                        SegmentsPipe,
                        ShortenFullpathPipe,
                        FileSizePipe,
                        UnzipObjectPipe,
                        ParentDirPipe
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
                        ParentDirPipe
                    ]
                },] }
    ];
    return PolpwareNgxPipesModule;
}());
export { PolpwareNgxPipesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBpcGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcGlwZXMvIiwic291cmNlcyI6WyJsaWIvbmd4LXBpcGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUd4RDtJQUFBO0lBcUJzQyxDQUFDOztnQkFyQnRDLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsZUFBZTt3QkFDZixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGFBQWE7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDTCxlQUFlO3dCQUNmLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsYUFBYTtxQkFDaEI7aUJBQ0o7O0lBQ3FDLDZCQUFDO0NBQUEsQUFyQnZDLElBcUJ1QztTQUExQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVW5yb2xsQXJyYXlQaXBlIH0gZnJvbSBcIi4vcGlwZXMvdW5yb2xsLWFycmF5LnBpcGVcIjtcbmltcG9ydCB7IFNlZ21lbnRzUGlwZSB9IGZyb20gXCIuL3BpcGVzL3NlZ21lbnRzLnBpcGVcIjtcbmltcG9ydCB7IFNob3J0ZW5GdWxscGF0aFBpcGUgfSBmcm9tIFwiLi9waXBlcy9mdWxscGF0aC5waXBlXCI7XG5pbXBvcnQgeyBGaWxlU2l6ZVBpcGUgfSBmcm9tIFwiLi9waXBlcy9maWxlLXNpemUucGlwZVwiO1xuaW1wb3J0IHsgVW56aXBPYmplY3RQaXBlIH0gZnJvbSBcIi4vcGlwZXMvdW56aXAtb2JqZWN0LnBpcGVcIjtcbmltcG9ydCB7IFBhcmVudERpclBpcGUgfSBmcm9tIFwiLi9waXBlcy9wYXJlbnQtZGlyLnBpcGVcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBVbnJvbGxBcnJheVBpcGUsXG4gICAgICAgIFNlZ21lbnRzUGlwZSxcbiAgICAgICAgU2hvcnRlbkZ1bGxwYXRoUGlwZSxcbiAgICAgICAgRmlsZVNpemVQaXBlLFxuICAgICAgICBVbnppcE9iamVjdFBpcGUsXG4gICAgICAgIFBhcmVudERpclBpcGVcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFVucm9sbEFycmF5UGlwZSxcbiAgICAgICAgU2VnbWVudHNQaXBlLFxuICAgICAgICBTaG9ydGVuRnVsbHBhdGhQaXBlLFxuICAgICAgICBGaWxlU2l6ZVBpcGUsXG4gICAgICAgIFVuemlwT2JqZWN0UGlwZSxcbiAgICAgICAgUGFyZW50RGlyUGlwZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUG9scHdhcmVOZ3hQaXBlc01vZHVsZSB7IH1cbiJdfQ==
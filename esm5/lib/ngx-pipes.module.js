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
var PolpwareNgxPipesModule = /** @class */ (function () {
    function PolpwareNgxPipesModule() {
    }
    /** @nocollapse */ PolpwareNgxPipesModule.ɵmod = i0.ɵɵdefineNgModule({ type: PolpwareNgxPipesModule });
    /** @nocollapse */ PolpwareNgxPipesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PolpwareNgxPipesModule_Factory(t) { return new (t || PolpwareNgxPipesModule)(); }, imports: [[
                CommonModule
            ]] });
    return PolpwareNgxPipesModule;
}());
export { PolpwareNgxPipesModule };
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PolpwareNgxPipesModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBpcGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcGlwZXMvIiwic291cmNlcyI6WyJsaWIvbmd4LXBpcGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHcEQ7SUFBQTtLQXVCdUM7aUZBQTFCLHNCQUFzQjtrSkFBdEIsc0JBQXNCLGtCQWJ0QjtnQkFDTCxZQUFZO2FBQ2Y7aUNBeEJMO0NBbUN1QyxBQXZCdkMsSUF1QnVDO1NBQTFCLHNCQUFzQjt3RkFBdEIsc0JBQXNCLG1CQXJCM0IsZUFBZTtRQUNmLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGVBQWU7UUFDZixhQUFhO1FBQ2IsV0FBVyxhQUdYLFlBQVksYUFHWixlQUFlO1FBQ2YsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZUFBZTtRQUNmLGFBQWE7UUFDYixXQUFXO2tEQUdOLHNCQUFzQjtjQXZCbEMsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixlQUFlO29CQUNmLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixXQUFXO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxlQUFlO29CQUNmLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixXQUFXO2lCQUNkO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVW5yb2xsQXJyYXlQaXBlIH0gZnJvbSBcIi4vcGlwZXMvdW5yb2xsLWFycmF5LnBpcGVcIjtcbmltcG9ydCB7IFNlZ21lbnRzUGlwZSB9IGZyb20gXCIuL3BpcGVzL3NlZ21lbnRzLnBpcGVcIjtcbmltcG9ydCB7IFNob3J0ZW5GdWxscGF0aFBpcGUgfSBmcm9tIFwiLi9waXBlcy9mdWxscGF0aC5waXBlXCI7XG5pbXBvcnQgeyBGaWxlU2l6ZVBpcGUgfSBmcm9tIFwiLi9waXBlcy9maWxlLXNpemUucGlwZVwiO1xuaW1wb3J0IHsgVW56aXBPYmplY3RQaXBlIH0gZnJvbSBcIi4vcGlwZXMvdW56aXAtb2JqZWN0LnBpcGVcIjtcbmltcG9ydCB7IFBhcmVudERpclBpcGUgfSBmcm9tIFwiLi9waXBlcy9wYXJlbnQtZGlyLnBpcGVcIjtcbmltcG9ydCB7IFNhZmVEb21QaXBlIH0gZnJvbSAnLi9waXBlcy9zYWZlLWRvbS5waXBlJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBVbnJvbGxBcnJheVBpcGUsXG4gICAgICAgIFNlZ21lbnRzUGlwZSxcbiAgICAgICAgU2hvcnRlbkZ1bGxwYXRoUGlwZSxcbiAgICAgICAgRmlsZVNpemVQaXBlLFxuICAgICAgICBVbnppcE9iamVjdFBpcGUsXG4gICAgICAgIFBhcmVudERpclBpcGUsXG4gICAgICAgIFNhZmVEb21QaXBlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBVbnJvbGxBcnJheVBpcGUsXG4gICAgICAgIFNlZ21lbnRzUGlwZSxcbiAgICAgICAgU2hvcnRlbkZ1bGxwYXRoUGlwZSxcbiAgICAgICAgRmlsZVNpemVQaXBlLFxuICAgICAgICBVbnppcE9iamVjdFBpcGUsXG4gICAgICAgIFBhcmVudERpclBpcGUsXG4gICAgICAgIFNhZmVEb21QaXBlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb2xwd2FyZU5neFBpcGVzTW9kdWxlIHsgfVxuIl19
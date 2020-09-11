import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
var ParentDirPipe = /** @class */ (function () {
    function ParentDirPipe() {
    }
    // Remove the last part of a path.
    ParentDirPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        var index = value.lastIndexOf('\\');
        if (index === -1) {
            return '';
        }
        else {
            return value.substring(0, index);
        }
    };
    /** @nocollapse */ ParentDirPipe.ɵfac = function ParentDirPipe_Factory(t) { return new (t || ParentDirPipe)(); };
    /** @nocollapse */ ParentDirPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "parentDir", type: ParentDirPipe, pure: true });
    return ParentDirPipe;
}());
export { ParentDirPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ParentDirPipe, [{
        type: Pipe,
        args: [{ name: 'parentDir' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LWRpci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9wYXJlbnQtZGlyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRXBEO0lBQUE7S0FpQkM7SUFkRyxrQ0FBa0M7SUFDbEMsaUNBQVMsR0FBVCxVQUFVLEtBQWE7UUFFbkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDYjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7aUdBZlEsYUFBYTt3RkFBYixhQUFhO3dCQUgxQjtDQW1CQyxBQWpCRCxJQWlCQztTQWhCWSxhQUFhO2tEQUFiLGFBQWE7Y0FEekIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3BhcmVudERpcicgfSlcclxuZXhwb3J0IGNsYXNzIFBhcmVudERpclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICAvLyBSZW1vdmUgdGhlIGxhc3QgcGFydCBvZiBhIHBhdGguXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZS5sYXN0SW5kZXhPZignXFxcXCcpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMCwgaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
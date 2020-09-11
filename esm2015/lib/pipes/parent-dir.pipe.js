import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ParentDirPipe {
    // Remove the last part of a path.
    transform(value) {
        if (!value) {
            return '';
        }
        const index = value.lastIndexOf('\\');
        if (index === -1) {
            return '';
        }
        else {
            return value.substring(0, index);
        }
    }
}
/** @nocollapse */ ParentDirPipe.ɵfac = function ParentDirPipe_Factory(t) { return new (t || ParentDirPipe)(); };
/** @nocollapse */ ParentDirPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "parentDir", type: ParentDirPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ParentDirPipe, [{
        type: Pipe,
        args: [{ name: 'parentDir' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LWRpci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9wYXJlbnQtZGlyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR3BELE1BQU0sT0FBTyxhQUFhO0lBRXRCLGtDQUFrQztJQUNsQyxTQUFTLENBQUMsS0FBYTtRQUVuQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUVELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQztTQUNiO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQzs7NkZBZlEsYUFBYTtvRkFBYixhQUFhO2tEQUFiLGFBQWE7Y0FEekIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3BhcmVudERpcicgfSlcclxuZXhwb3J0IGNsYXNzIFBhcmVudERpclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICAvLyBSZW1vdmUgdGhlIGxhc3QgcGFydCBvZiBhIHBhdGguXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZS5sYXN0SW5kZXhPZignXFxcXCcpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMCwgaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class UnzipObjectPipe {
    transform(value, ...args) {
        const keys = [];
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    }
    /** @nocollapse */ static { this.ɵfac = function UnzipObjectPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UnzipObjectPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "unzipObject", type: UnzipObjectPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnzipObjectPipe, [{
        type: Pipe,
        args: [{ name: 'unzipObject' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW56aXAtb2JqZWN0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtcGlwZXMvc3JjL2xpYi9waXBlcy91bnppcC1vYmplY3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHcEQsTUFBTSxPQUFPLGVBQWU7SUFDeEIsU0FBUyxDQUFDLEtBQWEsRUFBRSxHQUFHLElBQWM7UUFDdEMsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFDdEIsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9DLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzttSUFUUSxlQUFlO29IQUFmLGVBQWU7O2lGQUFmLGVBQWU7Y0FEM0IsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3VuemlwT2JqZWN0JyB9KVxyXG5leHBvcnQgY2xhc3MgVW56aXBPYmplY3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IE9iamVjdCwgLi4uYXJnczogc3RyaW5nW10pOiBhbnlbXSB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goeyBrZXk6IGtleSwgdmFsdWU6IHZhbHVlW2tleV0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICB9XHJcbn1cclxuIl19
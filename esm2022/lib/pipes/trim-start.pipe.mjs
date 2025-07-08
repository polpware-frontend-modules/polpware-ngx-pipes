import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TrimStartPipe {
    transform(value, maxLen, appendEllipsis = true) {
        if (!value) {
            return '';
        }
        if (value.length <= maxLen) {
            return value;
        }
        return (appendEllipsis ? '...' : '') + value.substring(value.length - maxLen, value.length - 1);
    }
    /** @nocollapse */ static { this.ɵfac = function TrimStartPipe_Factory(t) { return new (t || TrimStartPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "trimStart", type: TrimStartPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrimStartPipe, [{
        type: Pipe,
        args: [{
                name: 'trimStart'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpbS1zdGFydC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvbmd4LXBpcGVzL3NyYy9saWIvcGlwZXMvdHJpbS1zdGFydC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sYUFBYTtJQUV0QixTQUFTLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxpQkFBMEIsSUFBSTtRQUNuRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFDRCxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFFLENBQUM7WUFDekIsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUNELE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7aUdBVlEsYUFBYTtrSEFBYixhQUFhOztpRkFBYixhQUFhO2NBSHpCLElBQUk7ZUFBQztnQkFDRixJQUFJLEVBQUUsV0FBVzthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICd0cmltU3RhcnQnXG59KVxuZXhwb3J0IGNsYXNzIFRyaW1TdGFydFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBtYXhMZW46IG51bWJlciwgYXBwZW5kRWxsaXBzaXM6IGJvb2xlYW4gPSB0cnVlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gbWF4TGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChhcHBlbmRFbGxpcHNpcyA/ICcuLi4nIDogJycpICsgdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmxlbmd0aCAtIG1heExlbiwgdmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG59XG4iXX0=
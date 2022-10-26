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
}
/** @nocollapse */ TrimStartPipe.ɵfac = function TrimStartPipe_Factory(t) { return new (t || TrimStartPipe)(); };
/** @nocollapse */ TrimStartPipe.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "trimStart", type: TrimStartPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrimStartPipe, [{
        type: Pipe,
        args: [{
                name: 'trimStart'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpbS1zdGFydC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvbmd4LXBpcGVzL3NyYy9saWIvcGlwZXMvdHJpbS1zdGFydC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sYUFBYTtJQUV0QixTQUFTLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxpQkFBMEIsSUFBSTtRQUNuRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUNELElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUU7WUFDeEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRyxDQUFDOzs2RkFWUSxhQUFhOzhHQUFiLGFBQWE7dUZBQWIsYUFBYTtjQUh6QixJQUFJO2VBQUM7Z0JBQ0YsSUFBSSxFQUFFLFdBQVc7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAndHJpbVN0YXJ0J1xufSlcbmV4cG9ydCBjbGFzcyBUcmltU3RhcnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgbWF4TGVuOiBudW1iZXIsIGFwcGVuZEVsbGlwc2lzOiBib29sZWFuID0gdHJ1ZSk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDw9IG1heExlbikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYXBwZW5kRWxsaXBzaXMgPyAnLi4uJyA6ICcnKSArIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5sZW5ndGggLSBtYXhMZW4sIHZhbHVlLmxlbmd0aCAtIDEpO1xuICAgIH1cblxufVxuIl19
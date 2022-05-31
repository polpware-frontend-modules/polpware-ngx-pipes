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
/** @nocollapse */ ParentDirPipe.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "parentDir", type: ParentDirPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParentDirPipe, [{
        type: Pipe,
        args: [{ name: 'parentDir' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LWRpci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvbmd4LXBpcGVzL3NyYy9saWIvcGlwZXMvcGFyZW50LWRpci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8sYUFBYTtJQUV0QixrQ0FBa0M7SUFDbEMsU0FBUyxDQUFDLEtBQWE7UUFFbkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDYjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7OzZGQWZRLGFBQWE7OEdBQWIsYUFBYTt1RkFBYixhQUFhO2NBRHpCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdwYXJlbnREaXInIH0pXHJcbmV4cG9ydCBjbGFzcyBQYXJlbnREaXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBsYXN0IHBhcnQgb2YgYSBwYXRoLlxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWUubGFzdEluZGV4T2YoJ1xcXFwnKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKDAsIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
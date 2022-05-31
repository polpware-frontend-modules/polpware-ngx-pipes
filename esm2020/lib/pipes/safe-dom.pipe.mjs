import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class SafeDomPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
/** @nocollapse */ SafeDomPipe.ɵfac = function SafeDomPipe_Factory(t) { return new (t || SafeDomPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer, 16)); };
/** @nocollapse */ SafeDomPipe.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "safeDom", type: SafeDomPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeDomPipe, [{
        type: Pipe,
        args: [{
                name: 'safeDom'
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1kb20ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL25neC1waXBlcy9zcmMvbGliL3BpcGVzL3NhZmUtZG9tLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7OztBQU1wRCxNQUFNLE9BQU8sV0FBVztJQUVwQixZQUFzQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUksQ0FBQztJQUUzQyxTQUFTLENBQUMsS0FBVSxFQUFFLElBQVk7UUFDckMsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLE1BQU0sQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsRSxLQUFLLE9BQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRSxLQUFLLFFBQVEsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RSxLQUFLLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRSxLQUFLLGFBQWEsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRixPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0wsQ0FBQzs7eUZBYlEsV0FBVzswR0FBWCxXQUFXO3VGQUFYLFdBQVc7Y0FIdkIsSUFBSTtlQUFDO2dCQUNGLElBQUksRUFBRSxTQUFTO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCwgU2FmZVN0eWxlLCBTYWZlU2NyaXB0LCBTYWZlVXJsLCBTYWZlUmVzb3VyY2VVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdzYWZlRG9tJ1xufSlcbmV4cG9ydCBjbGFzcyBTYWZlRG9tUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IGFueSwgdHlwZTogc3RyaW5nKTogU2FmZUh0bWwgfCBTYWZlU3R5bGUgfCBTYWZlU2NyaXB0IHwgU2FmZVVybCB8IFNhZmVSZXNvdXJjZVVybCB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaHRtbCc6IHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdzdHlsZSc6IHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnc2NyaXB0JzogcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTY3JpcHQodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAndXJsJzogcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAncmVzb3VyY2VVcmwnOiByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHZhbHVlKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzYWZlIHR5cGUgc3BlY2lmaWVkOiAke3R5cGV9YCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==
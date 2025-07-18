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
    /** @nocollapse */ static { this.ɵfac = function SafeDomPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SafeDomPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer, 16)); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "safeDom", type: SafeDomPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeDomPipe, [{
        type: Pipe,
        args: [{
                name: 'safeDom'
            }]
    }], () => [{ type: i1.DomSanitizer }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1kb20ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL25neC1waXBlcy9zcmMvbGliL3BpcGVzL3NhZmUtZG9tLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7OztBQU1wRCxNQUFNLE9BQU8sV0FBVztJQUVwQixZQUFzQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUksQ0FBQztJQUUzQyxTQUFTLENBQUMsS0FBVSxFQUFFLElBQVk7UUFDckMsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUNYLEtBQUssTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xFLEtBQUssT0FBTyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BFLEtBQUssUUFBUSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RFLEtBQUssS0FBSyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLEtBQUssYUFBYSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hGLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckUsQ0FBQztJQUNMLENBQUM7K0hBYlEsV0FBVztnSEFBWCxXQUFXOztpRkFBWCxXQUFXO2NBSHZCLElBQUk7ZUFBQztnQkFDRixJQUFJLEVBQUUsU0FBUzthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwsIFNhZmVTdHlsZSwgU2FmZVNjcmlwdCwgU2FmZVVybCwgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnc2FmZURvbSdcbn0pXG5leHBvcnQgY2xhc3MgU2FmZURvbVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBhbnksIHR5cGU6IHN0cmluZyk6IFNhZmVIdG1sIHwgU2FmZVN0eWxlIHwgU2FmZVNjcmlwdCB8IFNhZmVVcmwgfCBTYWZlUmVzb3VyY2VVcmwge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2h0bWwnOiByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnc3R5bGUnOiByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ3NjcmlwdCc6IHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U2NyaXB0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ3VybCc6IHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ3Jlc291cmNlVXJsJzogcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh2YWx1ZSk7XG4gICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2FmZSB0eXBlIHNwZWNpZmllZDogJHt0eXBlfWApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=
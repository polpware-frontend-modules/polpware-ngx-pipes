import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TrimEndPipe {
    transform(value, maxLen, appendEllipsis = true) {
        if (!value) {
            return '';
        }
        if (value.length <= maxLen) {
            return value;
        }
        return value.substring(0, maxLen - 1) + (appendEllipsis ? '...' : '');
    }
    /** @nocollapse */ static { this.ɵfac = function TrimEndPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrimEndPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "trimEnd", type: TrimEndPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrimEndPipe, [{
        type: Pipe,
        args: [{
                name: 'trimEnd'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpbS1lbmQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL25neC1waXBlcy9zcmMvbGliL3BpcGVzL3RyaW0tZW5kLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxXQUFXO0lBRXBCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLGlCQUEwQixJQUFJO1FBQ25FLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUN6QixPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUUsQ0FBQzsrSEFWUSxXQUFXO2dIQUFYLFdBQVc7O2lGQUFYLFdBQVc7Y0FIdkIsSUFBSTtlQUFDO2dCQUNGLElBQUksRUFBRSxTQUFTO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ3RyaW1FbmQnXG59KVxuZXhwb3J0IGNsYXNzIFRyaW1FbmRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgbWF4TGVuOiBudW1iZXIsIGFwcGVuZEVsbGlwc2lzOiBib29sZWFuID0gdHJ1ZSk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDw9IG1heExlbikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMCwgbWF4TGVuIC0gMSkgKyAoYXBwZW5kRWxsaXBzaXMgPyAnLi4uJyA6ICcnKTtcbiAgICB9XG5cbn1cbiJdfQ==
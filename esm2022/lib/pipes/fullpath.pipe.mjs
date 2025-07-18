import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ShortenFullpathPipe {
    shortJustName(value, left, right) {
        if (value.length <= left + right) {
            return value;
        }
        const index = value.lastIndexOf('.');
        if (index === -1) {
            // no extension
            return value.substring(0, left) + '...' + value.substring(value.length - right);
        }
        // has extension
        const ext = value.substring(index);
        if (ext.length >= left + right) {
            return '...' + ext;
        }
        return value.substring(0, left + right - ext.length) + '...' + ext;
    }
    transform(value, maxlen) {
        if (value.length <= maxlen) {
            return value;
        }
        const leftLen = Math.trunc(maxlen / 2);
        const rightLen = maxlen - leftLen;
        const index = value.lastIndexOf('\\');
        if (index === -1) {
            return this.shortJustName(value, leftLen, rightLen);
        }
        else {
            const r = this.shortJustName(value.substring(index + 1), leftLen, rightLen);
            return '...\\' + r;
        }
    }
    /** @nocollapse */ static { this.ɵfac = function ShortenFullpathPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ShortenFullpathPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "shortenFullpath", type: ShortenFullpathPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShortenFullpathPipe, [{
        type: Pipe,
        args: [{ name: 'shortenFullpath' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhdGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL25neC1waXBlcy9zcmMvbGliL3BpcGVzL2Z1bGxwYXRoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR3BELE1BQU0sT0FBTyxtQkFBbUI7SUFFcEIsYUFBYSxDQUFDLEtBQWEsRUFBRSxJQUFZLEVBQUUsS0FBYTtRQUU1RCxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFDO1lBQy9CLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDZixlQUFlO1lBQ2YsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3BGLENBQUM7UUFFRCxnQkFBZ0I7UUFDaEIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFDO1lBQzdCLE9BQU8sS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN2QixDQUFDO1FBRUQsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYSxFQUFFLE1BQWM7UUFDbkMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxNQUFNLFFBQVEsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRWxDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELENBQUM7YUFBTSxDQUFDO1lBQ0osTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDNUUsT0FBTyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7SUFDTCxDQUFDO3VJQXRDUSxtQkFBbUI7d0hBQW5CLG1CQUFtQjs7aUZBQW5CLG1CQUFtQjtjQUQvQixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdzaG9ydGVuRnVsbHBhdGgnIH0pXHJcbmV4cG9ydCBjbGFzcyBTaG9ydGVuRnVsbHBhdGhQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzaG9ydEp1c3ROYW1lKHZhbHVlOiBzdHJpbmcsIGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlcik6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gbGVmdCArIHJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWUubGFzdEluZGV4T2YoJy4nKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIG5vIGV4dGVuc2lvblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKDAsIGxlZnQpICsgJy4uLicgKyB2YWx1ZS5zdWJzdHJpbmcodmFsdWUubGVuZ3RoIC0gcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaGFzIGV4dGVuc2lvblxyXG4gICAgICAgIGNvbnN0IGV4dCA9IHZhbHVlLnN1YnN0cmluZyhpbmRleCk7XHJcbiAgICAgICAgaWYgKGV4dC5sZW5ndGggPj0gbGVmdCArIHJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnLi4uJyArIGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMCwgbGVmdCArIHJpZ2h0IC0gZXh0Lmxlbmd0aCkgKyAnLi4uJyArIGV4dDtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgbWF4bGVuOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gbWF4bGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnRMZW4gPSBNYXRoLnRydW5jKG1heGxlbiAvIDIpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0TGVuID0gbWF4bGVuIC0gbGVmdExlbjtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZS5sYXN0SW5kZXhPZignXFxcXCcpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvcnRKdXN0TmFtZSh2YWx1ZSwgbGVmdExlbiwgcmlnaHRMZW4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnNob3J0SnVzdE5hbWUodmFsdWUuc3Vic3RyaW5nKGluZGV4ICsgMSksIGxlZnRMZW4sIHJpZ2h0TGVuKTtcclxuICAgICAgICAgICAgcmV0dXJuICcuLi5cXFxcJyArIHI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
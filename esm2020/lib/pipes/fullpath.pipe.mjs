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
}
/** @nocollapse */ ShortenFullpathPipe.ɵfac = function ShortenFullpathPipe_Factory(t) { return new (t || ShortenFullpathPipe)(); };
/** @nocollapse */ ShortenFullpathPipe.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "shortenFullpath", type: ShortenFullpathPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShortenFullpathPipe, [{
        type: Pipe,
        args: [{ name: 'shortenFullpath' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhdGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL25neC1waXBlcy9zcmMvbGliL3BpcGVzL2Z1bGxwYXRoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR3BELE1BQU0sT0FBTyxtQkFBbUI7SUFFcEIsYUFBYSxDQUFDLEtBQWEsRUFBRSxJQUFZLEVBQUUsS0FBYTtRQUU1RCxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxHQUFHLEtBQUssRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDZCxlQUFlO1lBQ2YsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ25GO1FBRUQsZ0JBQWdCO1FBQ2hCLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUU7WUFDNUIsT0FBTyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ3RCO1FBRUQsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYSxFQUFFLE1BQWM7UUFDbkMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUN4QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sUUFBUSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFFbEMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZEO2FBQU07WUFDSCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM1RSxPQUFPLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDOzt5R0F0Q1EsbUJBQW1COzBIQUFuQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUQvQixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdzaG9ydGVuRnVsbHBhdGgnIH0pXHJcbmV4cG9ydCBjbGFzcyBTaG9ydGVuRnVsbHBhdGhQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzaG9ydEp1c3ROYW1lKHZhbHVlOiBzdHJpbmcsIGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlcik6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gbGVmdCArIHJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWUubGFzdEluZGV4T2YoJy4nKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIG5vIGV4dGVuc2lvblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKDAsIGxlZnQpICsgJy4uLicgKyB2YWx1ZS5zdWJzdHJpbmcodmFsdWUubGVuZ3RoIC0gcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaGFzIGV4dGVuc2lvblxyXG4gICAgICAgIGNvbnN0IGV4dCA9IHZhbHVlLnN1YnN0cmluZyhpbmRleCk7XHJcbiAgICAgICAgaWYgKGV4dC5sZW5ndGggPj0gbGVmdCArIHJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnLi4uJyArIGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMCwgbGVmdCArIHJpZ2h0IC0gZXh0Lmxlbmd0aCkgKyAnLi4uJyArIGV4dDtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgbWF4bGVuOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gbWF4bGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnRMZW4gPSBNYXRoLnRydW5jKG1heGxlbiAvIDIpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0TGVuID0gbWF4bGVuIC0gbGVmdExlbjtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZS5sYXN0SW5kZXhPZignXFxcXCcpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvcnRKdXN0TmFtZSh2YWx1ZSwgbGVmdExlbiwgcmlnaHRMZW4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnNob3J0SnVzdE5hbWUodmFsdWUuc3Vic3RyaW5nKGluZGV4ICsgMSksIGxlZnRMZW4sIHJpZ2h0TGVuKTtcclxuICAgICAgICAgICAgcmV0dXJuICcuLi5cXFxcJyArIHI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
var UnrollArrayPipe = /** @class */ (function () {
    function UnrollArrayPipe() {
    }
    UnrollArrayPipe.prototype.transform = function (value) {
        var len = value.length;
        var half = Math.floor(len / 2);
        var index = 0;
        var groups = [];
        for (var i = 0; i < half; i++) {
            groups.push({
                first: value[index],
                second: value[index + 1]
            });
            index += 2;
        }
        var last = null;
        if (index < len) {
            last = value[index];
        }
        return {
            pairs: groups,
            last: last
        };
    };
    /** @nocollapse */ UnrollArrayPipe.ɵfac = function UnrollArrayPipe_Factory(t) { return new (t || UnrollArrayPipe)(); };
    /** @nocollapse */ UnrollArrayPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "unrollArray", type: UnrollArrayPipe, pure: true });
    return UnrollArrayPipe;
}());
export { UnrollArrayPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UnrollArrayPipe, [{
        type: Pipe,
        args: [{ name: 'unrollArray' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5yb2xsLWFycmF5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXBpcGVzLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3Vucm9sbC1hcnJheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQVlwRDtJQUFBO0tBMkJDO0lBeEJHLG1DQUFTLEdBQVQsVUFBVSxLQUFpQjtRQUN2QixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUMzQixDQUFDLENBQUM7WUFDSCxLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ2IsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtRQUVELE9BQU87WUFDSCxLQUFLLEVBQUUsTUFBTTtZQUNiLElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQztJQUNOLENBQUM7cUdBekJRLGVBQWU7NEZBQWYsZUFBZTswQkFiNUI7Q0F1Q0MsQUEzQkQsSUEyQkM7U0ExQlksZUFBZTtrREFBZixlQUFlO2NBRDNCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbnRlcmZhY2UgSVBhaXIge1xyXG4gICAgZmlyc3Q6IGFueTtcclxuICAgIHNlY29uZDogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSVVucm9sbFJlc3VsdCB7XHJcbiAgICBwYWlyczogQXJyYXk8SVBhaXI+O1xyXG4gICAgbGFzdDogYW55O1xyXG59XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd1bnJvbGxBcnJheScgfSlcclxuZXhwb3J0IGNsYXNzIFVucm9sbEFycmF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogQXJyYXk8YW55Pik6IElVbnJvbGxSZXN1bHQge1xyXG4gICAgICAgIGNvbnN0IGxlbiA9IHZhbHVlLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBoYWxmID0gTWF0aC5mbG9vcihsZW4gLyAyKTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFsZjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpcnN0OiB2YWx1ZVtpbmRleF0sXHJcbiAgICAgICAgICAgICAgICBzZWNvbmQ6IHZhbHVlW2luZGV4ICsgMV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGluZGV4ICs9IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGFzdCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA8IGxlbikge1xyXG4gICAgICAgICAgICBsYXN0ID0gdmFsdWVbaW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFpcnM6IGdyb3VwcyxcclxuICAgICAgICAgICAgbGFzdDogbGFzdFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl19
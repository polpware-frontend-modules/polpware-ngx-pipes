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
}
/** @nocollapse */ UnzipObjectPipe.ɵfac = function UnzipObjectPipe_Factory(t) { return new (t || UnzipObjectPipe)(); };
/** @nocollapse */ UnzipObjectPipe.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "unzipObject", type: UnzipObjectPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnzipObjectPipe, [{
        type: Pipe,
        args: [{ name: 'unzipObject' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW56aXAtb2JqZWN0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtcGlwZXMvc3JjL2xpYi9waXBlcy91bnppcC1vYmplY3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHcEQsTUFBTSxPQUFPLGVBQWU7SUFDeEIsU0FBUyxDQUFDLEtBQWEsRUFBRSxHQUFHLElBQWM7UUFDdEMsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1lBQ3JCLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDOUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7O2lHQVRRLGVBQWU7a0hBQWYsZUFBZTt1RkFBZixlQUFlO2NBRDNCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd1bnppcE9iamVjdCcgfSlcclxuZXhwb3J0IGNsYXNzIFVuemlwT2JqZWN0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBPYmplY3QsIC4uLmFyZ3M6IHN0cmluZ1tdKTogYW55W10ge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKHsga2V5OiBrZXksIHZhbHVlOiB2YWx1ZVtrZXldIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
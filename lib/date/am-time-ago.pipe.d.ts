import { PipeTransform, ChangeDetectorRef, OnDestroy, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AmTimeAgoPipe implements PipeTransform, OnDestroy {
    private changeDetector;
    private ngZone;
    private timer;
    private lastValue;
    private lastResult;
    constructor(changeDetector: ChangeDetectorRef, ngZone: NgZone);
    transform(value: any): string;
    ngOnDestroy(): void;
    private calculateValue;
    private setupTimer;
    private removeTimer;
    static ɵfac: i0.ɵɵFactoryDeclaration<AmTimeAgoPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<AmTimeAgoPipe, "amTimeAgo", true>;
}

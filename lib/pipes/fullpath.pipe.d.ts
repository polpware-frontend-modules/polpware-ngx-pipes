import { PipeTransform } from '@angular/core';
export declare class ShortenFullpathPipe implements PipeTransform {
    private shortJustName;
    transform(value: string, maxlen: number): string;
}

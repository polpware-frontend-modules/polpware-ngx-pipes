import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A pipe that formats a date with calendar-like, relative time strings,
 * similar to the `amCalendar` pipe from `ngx-moment`, but using `date-fns`.
 *
 * @usage
 * `{{ myDate | amCalendar }}`
 *
 * @example
 * // If today is 2025-09-29
 * '2025-09-29T14:00:00' | amCalendar -> 'Today at 2:00 PM'
 * '2025-09-28T10:00:00' | amCalendar -> 'Yesterday at 10:00 AM'
 * '2025-09-30T09:00:00' | amCalendar -> 'Tomorrow at 9:00 AM'
 * '2025-10-02T11:00:00' | amCalendar -> 'Thursday at 11:00 AM'
 * '2025-09-25T11:00:00' | amCalendar -> 'Last Thursday at 11:00 AM'
 * '2025-01-01T12:00:00' | amCalendar -> '01/01/2025'
 */
export declare class CalendarDatePipe implements PipeTransform {
    transform(value: Date | string | number | null | undefined): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarDatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CalendarDatePipe, "amCalendar", true>;
}

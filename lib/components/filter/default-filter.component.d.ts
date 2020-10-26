import { EventEmitter } from '@angular/core';
import { FilterDefault } from "./filter-default";
export declare class DefaultFilterComponent extends FilterDefault {
    query: string;
    filter: EventEmitter<any>;
    formControl: any;
    onSFormControl($event: any): void;
    onFilter(query: string): void;
}

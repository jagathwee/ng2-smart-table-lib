import { OnChanges, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
export declare class InputFilterComponent extends DefaultFilter implements OnInit, OnChanges {
    sFormControl: EventEmitter<any>;
    inputControl: FormControl;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    resetFilter(): void;
}

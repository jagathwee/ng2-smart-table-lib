import { OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { FilterDefault } from './filter-default';
import { Subscription } from 'rxjs';
import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';
export declare class FilterComponent extends FilterDefault implements OnChanges {
    column: Column;
    source: DataSource;
    inputClass: string;
    filter: EventEmitter<any>;
    query: string;
    protected dataChangedSub: Subscription;
    ngOnChanges(changes: SimpleChanges): void;
    onFilter($event: any): void;
}

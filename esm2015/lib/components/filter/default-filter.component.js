import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterDefault } from "./filter-default";
export class DefaultFilterComponent extends FilterDefault {
    constructor() {
        super(...arguments);
        this.filter = new EventEmitter();
    }
    onSFormControl($event) {
        this.formControl = $event.control;
    }
    onFilter(query) {
        this.filter.emit({
            search: query,
            field: this.column.id,
            control: this.formControl,
        });
    }
}
DefaultFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-table-filter',
                template: `
    <ng-container [ngSwitch]="column.getFilterType()">
      <select-filter *ngSwitchCase="'list'"
                     [query]="query"
                     [ngClass]="inputClass"
                     [column]="column"
                     (filter)="onFilter($event)">
      </select-filter>
      <checkbox-filter *ngSwitchCase="'checkbox'"
                       [query]="query"
                       [ngClass]="inputClass"
                       [column]="column"
                       (filter)="onFilter($event)"
                       (sFormControl)="onSFormControl($event)">
      </checkbox-filter>
      <completer-filter *ngSwitchCase="'completer'"
                        [query]="query"
                        [ngClass]="inputClass"
                        [column]="column"
                        (filter)="onFilter($event)">
      </completer-filter>
      <input-filter *ngSwitchDefault
                    [query]="query"
                    [ngClass]="inputClass"
                    [column]="column"
                    (filter)="onFilter($event)"
                    (sFormControl)="onSFormControl($event)">
      </input-filter>
    </ng-container>
  `
            },] }
];
DefaultFilterComponent.propDecorators = {
    query: [{ type: Input }],
    filter: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93ZWUvV29yay9zb2xpZHVzL25nMi1tb2UtdG1wL25nMi1zbWFydC10YWJsZS1zcmMvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9kZWZhdWx0LWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFtQy9DLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxhQUFhO0lBakN6RDs7UUFtQ1ksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFlN0MsQ0FBQztJQVhDLGNBQWMsQ0FBQyxNQUFXO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNwQyxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWpERCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZCVDthQUNGOzs7b0JBRUUsS0FBSztxQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpbHRlckRlZmF1bHR9IGZyb20gXCIuL2ZpbHRlci1kZWZhdWx0XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RlZmF1bHQtdGFibGUtZmlsdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb2x1bW4uZ2V0RmlsdGVyVHlwZSgpXCI+XG4gICAgICA8c2VsZWN0LWZpbHRlciAqbmdTd2l0Y2hDYXNlPVwiJ2xpc3QnXCJcbiAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxuICAgICAgPC9zZWxlY3QtZmlsdGVyPlxuICAgICAgPGNoZWNrYm94LWZpbHRlciAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgIChzRm9ybUNvbnRyb2wpPVwib25TRm9ybUNvbnRyb2woJGV2ZW50KVwiPlxuICAgICAgPC9jaGVja2JveC1maWx0ZXI+XG4gICAgICA8Y29tcGxldGVyLWZpbHRlciAqbmdTd2l0Y2hDYXNlPVwiJ2NvbXBsZXRlcidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCI+XG4gICAgICA8L2NvbXBsZXRlci1maWx0ZXI+XG4gICAgICA8aW5wdXQtZmlsdGVyICpuZ1N3aXRjaERlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgKHNGb3JtQ29udHJvbCk9XCJvblNGb3JtQ29udHJvbCgkZXZlbnQpXCI+XG4gICAgICA8L2lucHV0LWZpbHRlcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZpbHRlckNvbXBvbmVudCBleHRlbmRzIEZpbHRlckRlZmF1bHQge1xuICBASW5wdXQoKSBxdWVyeTogc3RyaW5nO1xuICBAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgZm9ybUNvbnRyb2w6IGFueTtcblxuICBvblNGb3JtQ29udHJvbCgkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuZm9ybUNvbnRyb2wgPSAkZXZlbnQuY29udHJvbDtcbiAgfVxuXG4gIG9uRmlsdGVyKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmZpbHRlci5lbWl0KHtcbiAgICAgIHNlYXJjaDogcXVlcnksXG4gICAgICBmaWVsZDogdGhpcy5jb2x1bW4uaWQsXG4gICAgICBjb250cm9sOiB0aGlzLmZvcm1Db250cm9sLFxuICAgfSk7XG4gfVxufVxuIl19
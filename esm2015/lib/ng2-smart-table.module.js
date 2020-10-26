import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CellModule } from './components/cell/cell.module';
import { FilterModule } from './components/filter/filter.module';
import { PagerModule } from './components/pager/pager.module';
import { TBodyModule } from './components/tbody/tbody.module';
import { THeadModule } from './components/thead/thead.module';
import { Ng2SmartTableComponent } from './ng2-smart-table.component';
import { Ng2SmartTableSolComponent } from './ng2-smart-table-sol.component';
export class Ng2SmartTableModule {
}
Ng2SmartTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CellModule,
                    FilterModule,
                    PagerModule,
                    TBodyModule,
                    THeadModule,
                ],
                declarations: [
                    Ng2SmartTableSolComponent,
                    Ng2SmartTableComponent,
                ],
                exports: [
                    Ng2SmartTableSolComponent,
                    Ng2SmartTableComponent,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd2VlL1dvcmsvc29saWR1cy9uZzItbW9lLXRtcC9uZzItc21hcnQtdGFibGUtc3JjL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvIiwic291cmNlcyI6WyJsaWIvbmcyLXNtYXJ0LXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQXNCNUUsTUFBTSxPQUFPLG1CQUFtQjs7O1lBcEIvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFVBQVU7b0JBQ1YsWUFBWTtvQkFDWixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsV0FBVztpQkFDWjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1oseUJBQXlCO29CQUN6QixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx5QkFBeUI7b0JBQ3pCLHNCQUFzQjtpQkFDdkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENlbGxNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2VsbC9jZWxsLm1vZHVsZSc7XG5pbXBvcnQgeyBGaWx0ZXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnZXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZXIvcGFnZXIubW9kdWxlJztcbmltcG9ydCB7IFRCb2R5TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Rib2R5L3Rib2R5Lm1vZHVsZSc7XG5pbXBvcnQgeyBUSGVhZE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy90aGVhZC90aGVhZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE5nMlNtYXJ0VGFibGVTb2xDb21wb25lbnQgfSBmcm9tICcuL25nMi1zbWFydC10YWJsZS1zb2wuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENlbGxNb2R1bGUsXG4gICAgRmlsdGVyTW9kdWxlLFxuICAgIFBhZ2VyTW9kdWxlLFxuICAgIFRCb2R5TW9kdWxlLFxuICAgIFRIZWFkTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZzJTbWFydFRhYmxlU29sQ29tcG9uZW50LFxuICAgIE5nMlNtYXJ0VGFibGVDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZzJTbWFydFRhYmxlU29sQ29tcG9uZW50LFxuICAgIE5nMlNtYXJ0VGFibGVDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5nMlNtYXJ0VGFibGVNb2R1bGUge1xufVxuIl19
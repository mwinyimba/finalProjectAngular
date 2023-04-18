import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input'
import {MatTableModule} from '@angular/material/table'
import {MatSelectModule} from '@angular/material/select'
import {MatCardModule} from '@angular/material/card'
import {MatDialogModule} from '@angular/material/dialog'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatSortModule} from '@angular/material/sort'
import {MatRadioModule} from '@angular/material/radio'


@NgModule({
    exports:[
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatRadioModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule
    ]
       
    

})
export class MaterialModule{}
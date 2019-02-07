import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import {MatTabsModule,MatSidenavModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { MatIconModule} from '@angular/material';
import {MatListModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TableComponent } from './table/table.component';
import { StructureComponent } from './structure/structure.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { BoxComponent } from './box/box.component';
import {MatInputModule} from '@angular/material/input';
import { FuseprojectComponent } from './fuseproject/fuseproject.component';
import { ZenepoleinterfaceComponent } from './zenepoleinterface/zenepoleinterface.component';
import { LeadbarComponent } from './leadbar/leadbar.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { GridlayoutComponent } from './gridlayout/gridlayout.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ResponsivelayoutComponent } from './responsivelayout/responsivelayout.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    TableComponent,
    StructureComponent,
    BoxComponent,
    FuseprojectComponent,
    ZenepoleinterfaceComponent,
    LeadbarComponent,
    GridlayoutComponent,
    DataTableComponent,
    ResponsivelayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatTableModule,
    MatFormFieldModule,
    PerfectScrollbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],

  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';

const modules = [
  CommonModule,
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  FlexLayoutModule,
  MatMenuModule,
  MatListModule,
  HighchartsChartModule,
  MatDividerModule,
  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
];

const declaration = [
  CardComponent
];

@NgModule({
  declarations: [
    ...declaration
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules, ...declaration
  ]
})
export class SharedModule { }

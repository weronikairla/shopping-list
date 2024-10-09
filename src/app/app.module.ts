import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ButtonComponent } from './button/button.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { UiService } from './services/ui.service';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ButtonComponent,
    ItemsComponent,
    ItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [UiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

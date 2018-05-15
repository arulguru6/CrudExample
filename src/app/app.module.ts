import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { appRoutes } from './routerConfig';
import { CoinService } from './service/coin.service';


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    IndexComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }

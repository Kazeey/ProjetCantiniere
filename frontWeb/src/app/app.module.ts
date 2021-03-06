import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule} from './menu/menu.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { ParametersComponent } from './parameters/parameters.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule  } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { IconsProviderModule } from './icons-provider.module';
import { DailyOrderComponent } from './daily-order/daily-order.component';
import { HistoricComponent } from './historic/historic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import {DatePipe} from '@angular/common';
import { CookieService } from 'ngx-cookie-service';


registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    ParametersComponent,
    PreferencesComponent,
    ManageMenuComponent,
    ManageUserComponent,
    ManageProductComponent,
    DailyOrderComponent,
    HistoricComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMenuModule,
    NzLayoutModule,
    NzButtonModule,
    IconsProviderModule,
    NgbModule,
    MenuModule,
    NzModalModule

  ],
  exports: [
    ParametersComponent,
    PreferencesComponent,
    ManageMenuComponent,
    ManageUserComponent,
    ManageProductComponent,
    DailyOrderComponent,
    HistoricComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }, DatePipe, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ManageUserComponent } from './manage-user.component';

import { ManageUserPageRoutingModule } from './manage-user-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageUserPageRoutingModule
  ],
  declarations: [ManageUserComponent]
})
export class ManageUserPageModule {}

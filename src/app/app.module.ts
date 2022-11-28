import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';

const myRoute: Routes=[
  {path:"",
  component:AdminLoginComponent
  },
  {path:"userlogin",
  component:UserLoginComponent
  },
  {path:"userregistration",
  component:UserRegistrationComponent
  },
  {path:"entry",
  component:BookEntryComponent
  },
  {path:"search",
  component:BookSearchComponent
  },  
  {path:"edit",
  component:BookEditComponent
  },  
  {path:"delete",
  component:BookDeleteComponent
  },
  {path:"viewall",
  component:ViewAllComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    BookEntryComponent,
    BookSearchComponent,
    BookDeleteComponent,
    BookEditComponent,
    ViewAllComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

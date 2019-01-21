import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],                                /* 模块内部Components/Directives/Pipes的列表，声明一下这个模块内部成员。*/
  imports: [
    BrowserModule,
    AppRoutingModule
  ],                                /* 导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。*/
  providers: [],                    /* 指定应用程序的根级别需要使用的service。*/
  bootstrap: [AppComponent]         /* 通常是app启动的根组件，一般只有一个component。 */
  // exports:[]                     /* 用来控制将哪些内部成员暴露给外部使用。*/
})
export class AppModule {}

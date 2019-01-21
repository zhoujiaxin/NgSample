import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                           /* index中组件加载位置<app-root>。 */
  templateUrl: './app.component.html',            /* index中展示页面。 */
  styleUrls: ['./app.component.sass']             /* index中展示页面样式。 */
})
export class AppComponent {
  title = 'NgSample';                             /* 为app.component.html中要显示的动态绑定的值{{title}}。 */
}

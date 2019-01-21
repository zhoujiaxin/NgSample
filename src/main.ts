import { enableProdMode } from '@angular/core';               /* 导入enableProdMode用来关闭angular开发者模式。 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';                 /* 导入应用主模块。 */
import { environment } from './environments/environment';     /* 导入环境配置模块支持。 */

if (environment.production) {
  enableProdMode();                                           /* 控制切换开发模式和生产模式。 */
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));                          /* 引导程序启动。 */

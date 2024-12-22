import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';


//ApplicationConfig Набор опций конфигурации, доступных во время работы начальной загрузки приложения.
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    //Настраиваем поставщики, необходимые для включения функциональности рендеринга сервера для приложения
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
//mergeApplicationConfig Объедените несколько конфигураций приложения слева направо.(appConfig, serverConfig)
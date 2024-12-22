import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
  provideHttpClient()
]
};


//ApplicationConfig - Набор опций конфигурации, досупныз во время работы начальной загрузки приложенияж

//provideZoneChangeDetection - Обспечивает обнаружение изменений на основе -based для приложения, загруженного с помощью /NgZone

//provideRouter - Настраиваем поставщики, необходимые для обеспечения функциональности приложения.

//provideClientHydration - Настраиваем поставщиков, необходимых для включения функции гидрации для приложения.

//provideHttpClient - Настраиваем сервис Angular так, чтобы он был доступен для внедрения .Httpclient

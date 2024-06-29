# CasoAngularBooks

## Summary
Caso Angular books and videos on O'Reilly.
La Universidad Peruana de Ciencias Aplicadas (UPC) a través de su membresía oficial de O'Reilly
brinda a sus estudiantes acceso a una amplia gama de recursos educativos, incluyendo libros
electrónicos y videos educativos.
Con el fin de promover el uso de la plataforma O'Reilly en el curso de Desarrollo de Aplicaciones
Open Source de la carrera de Ingeniería de Software le solicitan elaborar una aplicación web que
obtenga datos sobre libros y videos del Framework Angular, accediendo al endpoint:
https://learning.oreilly.com/api/v2/search/?query=angular&formats=book&formats=video
Para el desarrollo web de lado web frontend, se ha seleccionado TypeScript como lenguaje de
programación y Angular como Frontend Framework.

Se le encarga el desarrollo de una aplicación web que implemente las siguientes características:

- [X] La aplicación debe presentar en la parte superior un Toolbar, con el título “Angular books
and videos on O'Reilly”.
- [X] La aplicación debe presentar debajo una vi**sta con cards para los books y videos.**
- [X] Para cada card, la información del book o video a mostrar incluye: title, isbn, cover_url, format, description y web_url. Asegurarse de presentar adecuadamente la imagen de
web_url en el card. Usar el link de web_url en una acción del card con la etiqueta "More".
- [X] La aplicación debe presentar en la parte inferior, una sección de footer con la información
“Copyright © 2024 O'Reilly. All rights reserved.” en la primera línea. Además debe incluir en
la segunda línea del footer la información “Developed by” y los datos del Developer
(considérese a usted como autor, indicando código, nombre y apellido.).
- [X] Implementar internationalization i18n para la sección de footer.

El equipo de IT de su cliente tomará en cuenta no sólo el cumplimiento de las características
funcionales, sino el diseño de interfaz de usuario, así como la estructura del proyecto, aplicación de
convenciones de nomenclatura de objetos de programación en inglés, convenciones de
nomenclatura de Angular, organización y eficiencia del código. Igualmente se tomará en cuenta la
aplicación de patrones de diseño. Se toma en cuenta accessibility (imágenes con texto alternativo,
uso de ARIA attributes) y usability.

Restricciones técnicas: El equipo requiere que la interfaz de usuario esté basada en Angular
Material, mientras que para la comunicación con el backend debe apoyarse en HttpClient (incluido
en @angular/common/http). Debe incluir ARIA atributes en las vistas. La interfaz de usuario debe
mostrar los textos en inglés. El proyecto de aplicación debe poder aperturarse sin problemas en
JetBrains WebStorm.

La organización del proyecto debe ser domain-driven aplicando layered architecture, considerando
los sub-dominios public para elementos genéricos y elearning para componentes o elementos
relacionados con los books y videos. Aplique buenas prácticas para nomenclatura lógica y física de
clases y componentes. Comente los archivos de código fuente elaborados por usted, incluyendo
summary con el propósito y author con su nombre y apellido.
Incluya en el archivo README.md, la información de la aplicación, descripción y su información
como autor.

Fuera del alcance:
Sidebar
Routing

Referencias:
https://www.oreilly.com/online-learning/integration-docs/search.html
https://angular.io/guide/http
https://material.angular.io/components/toolbar/overview
https://material.angular.io/components/toolbar/overview#accessibility
https://material.angular.io/components/grid-list/overview
https://material.angular.io/components/grid-list/overview#accessibility
https://material.angular.io/components/card/overview
https://material.angular.io/components/card/overview#accessibility
https://www.w3.org/TR/wai-aria/#usage

## Documentation:

- For [i18n](https://github.com/ngx-translate/core?tab=readme-ov-file)

## Solution steps:

- Primero hay que instalar las dependencias basicas por lo tanto ejecutaremos los siguientes comandos

```typescript
MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatButtonToggleModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  NgOptimizedImage
```

```bash
ng add @angular/material
```

- Ahora hay que crear los archivo para el soporte i18n, los cuales se crean en la ruta

```bash
npm install @ngx-translate/core --save
npm install @ngx-translate/http-loader --save
mkdir src/assets/i18n
echo "{\n}" > src/assets/i18n/en.json
echo "{\n}" > src/assets/i18n/es.json
```

- Toco importar el modulo en app.module.ts

```typescript
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

TranslateModule.forRoot({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  }
})
```

- Ahora en app.components.ts

```typescript
constructor(translate: TranslateService) {
  translate.setDefaultLang('en');
  translate.use('en');
}
```

- OJO ESO ES EN CASO USES i18n, no creo que venga eso en el examen.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## en espanol

- para clase `ng g cl 'nombre de la clase'` **_OJO NO TE OLVIDES DDD_ -> ejemplo jokes -> jokes/model
- para componente `ng g c 'nombre del componente'` **_OJO NO TE OLVIDES DDD_ -> ejemplo jokes -> jokes/components -> jokes/model -> jokes/service**
- para servicio `ng g s 'nombre del servicio'`  **_OJO NO TE OLVIDES shared/services_ -> lo que shared funciona siempre y cuando sea _compartido_ si no, se enfermo y crea tu servicio por cada componetne usando DDD it's on you XD**
- en public van los componentes OJOO PTMR usa buena nomeclatura ejemplo hello-world.component,
- OJO X3 si en caso uses routing acuerdate de SPA por lo tanto las "rutas" van en plugin/pages -> ejemplo plugin/pages/home -> en home seria donde rendedizar **(NO CREO QUE ANGELITO META ROUTING SO NP)**

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

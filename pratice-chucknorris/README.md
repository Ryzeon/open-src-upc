# Pratice Chucknorris

## Summary

**Caso ChuckNorris.io**

Su cliente, ChuckNorris.io. Desea promover el uso de su plataforma ChuckNorris (ver la
documentacién en https://api.chucknorris.io), un RESTful API de alcance mundial, facil de usar para
desarrolladores que chistes (jokes) sobre el artista Chuck Norris.

Para ello, le solicita elaborar una aplicacidn web que obtenga la informacion de un joke aleatorio por
cada categoria disponible, accediendo a los endpoints:

https://api.chucknorris.io/jokes/categories
<br>
https://api.chucknorris.io/jokes/random?category={category}

Para el desarrollo web de lado web frontend, se ha seleccionado TypeScript como lenguaje de
programacion y Angular como Frontend Framework.

Se le encarga el desarrollo de una aplicacidn web que implemente las siguientes caracteristicas:

® lLaaplicacién debe presentar en la parte superior un Toolbar, con el logo de la marca y el
titulo “ChuckNorris”

* Laaplicacidn debe presentar dentro de la vista principal, una vista con titulo “All jokes
  information”, canteniendo un conjunto de cards que presenten la informacion de cada uno
  de los jokes obtenidos, incluyende en cada card el joke id, value y category.

® La aplicaci6n debe presentar en la parte inferior, una seccion de footer con la informacion
“Copyright © 2023 ChuckNorris.io, All rights reserved.” en la primera linea. Ademas debe
incluir en la segunda linea del footer la informacion “Developed by” y los datos del
Developer (considérese a usted como autor, indicando cédigo, nombre y apellido.)El equipo de IT de su cliente tomara en cuenta no solo el cumplimiento de las caracteristicas
funcionales, sino el disefio de interfaz de usuario, asi como la estructura del proyecto, aplicacion de
convenciones de nomenclatura de objetos de programacion en inglés, convenciones de
nomenclatura de Angular, organizacion y eficiencia del codigo. |Igualmente se tomara en cuenta la
aplicacion de patrones de disefio. Se toma en cuenta accessibility (imagenes con texto alternativo,
uso de ARIA attributes) y usability.

Restricciones técnicas: El equipo requiere que la interfaz de usuario esté basada en Angular
Material, mientras que para la comunicacidn con el backend debe apoyarse en HttpClient (incluido
en @angular/common/http). Debe incluir ARIA atributes en las vistas. La interfaz de usuario debe
mostrar los textos en inglés. El proyecto de aplicacidn debe poder aperturarse sin problemas en
JetBrains WebStorm.

La organizacion del proyecto debe ser damain-driven aplicando layered architecture, considerando
los sub-dominios public para elementos geneéricos y norris para Componentes o elementos
relacionados con los jokes, como ail jokes information. Aplique buenas practicas para nomenclatura
logica y fisica de clases y componentes. Comente los archivos de codigo fuente elaborados por
usted, incluyendo summary con el propdsito y author con su nombre y apellido.

Incluya en el archivo README.md, la informacion de la aplicacion, descripcidn y su informacion
como autor.

Fuera del alcance:
Sidebar
Internationalization
Routing

Referencias:

https://api.chucknorris.io/
<br>
https://angular.io/guide/http
<br>
https://material.angular.io/components/toolbar/overview
<br>
https://material.angular.io/components/toolbar/overview#accessibility
<br>
https://material.angular.io/components/grid-list/overview
<br>
https://material.angular.io/components/grid-list/overview#accessibility
<br>
https://material.angular.io/components/card/overview
<br>
https://material.angular.io/components/card/overview#accessibility
<br>
https://www.w3.org/TR/wai-aria/tusage

## Todo
- [x] Agregar toolbar
- [x] Agregar titulo al toolbar
- [x] Poner logo al toolbar
- [ ] Laaplicacidn debe presentar dentro de la vista principal, una vista con titulo “All jokes
  information”
- [ ] canteniendo un conjunto de cards que presenten la informacion de cada uno
  de los jokes obtenidos, incluyende en cada card el joke id, value y category.
- [x] La aplicaci6n debe presentar en la parte inferior, una seccion de footer

## Documentation:

- For [i18n](https://github.com/ngx-translate/core?tab=readme-ov-file)

## Solution steps:

- Primero hay que instalar las dependencias basicas por lo tanto ejecutaremos los siguientes comandos

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
constructor(translate: TranslateServiced) {
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

## Ejercicio

- El ejercicio constará de 3 colecciones totales. Dos de ellas serán de solo lectura y la restante será también de escritura.

TODO: Agregar las rutas de la api con la correspondiente
TODO: Agregar los body de las peticiones que se me olvidó

    1. GET para obtener nombre y masa de todos aquellos meteoritos cuya masa sea igual o superior a una masa (gr) dada (con query parameters)
    - Ejemplo: `/astronomy/landings?minimum_mass=200000`
    - http://localhost:3000/api/astronomy/landings/mass?minimum_mass=200
    -

    2. GET para obtener nombre y masa de uno o más meteoritos cuya masa sea la especificada (route params)
    - Ejemplo: `/astronomy/landings/mass/200000`
    - http://localhost:3000/api/astronomy/landings/mass/2000
    - 

    3. GET para obtener los nombres y clase de aquellos meteoritos cuya clase sea la registrada (route params)
    - Ejemplo: `/astronomy/landings/class/L6`
    - http://localhost:3000/api/astronomy/landings/class/L6
    - 

    4. GET para obtener nombre, masa y fecha de todos los meteoritos caídos en determinadas fechas de la siguiente manera:
      * `/astronomy/landings?from=1960&to=1990`  http://localhost:3000/api/astronomy/landings/date?from=1960&to=1990
      * `/astronomy/landings?from=1960` http://localhost:3000/api/astronomy/landings/date?from=1960
      * `/astronomy/landings?to=1990` http://localhost:3000/api/astronomy/landings/date?to=1990
      * El mismo endpoint deberá ser compatible con las 3 formas

  2. GET para obtener nombre y masa de uno o más meteoritos cuya masa sea la especificada (route params)

  - Ejemplo: `/astronomy/landings/mass/200000`

  3. GET para obtener los nombres y clase de aquellos meteoritos cuya clase sea la registrada (route params)

    1. GET para obtener la designación y el período anual en base a la clase orbital del asteroide (con query params)
    - Ejemplo: `/astronomy/neas?class=aten`
    - http://localhost:3000/api/astronomy/neas/class?orbit_class=apollo
    - 

    2. GET para obtener designación, fecha y período anual de todos los asteroides que cumplan el filtro de fechas dadas
      * `/astronomy/neas?from=2010&to=2015` http://localhost:3000/api/astronomy/neas/date?from=2010&to=2015
      * `/astronomy/neas?from=2010` http://localhost:3000/api/astronomy/neas/date?from=2010
      * `/astronomy/neas?to=2015` http://localhost:3000/api/astronomy/neas/date?to=2015
      * En este caso, además, podremos poner la fecha más específica si quisiéramos:
        - `YYYY-MM-DD`
        - `YYYY-MM`
        - `YYYY`
      * El endpoint debe ser compatible con los 3 casos (No sé esto por qué, porque lo tira bien sin cambios)

    3. GET para obtener designación, fecha y período anual de todos aquellos asteroides que sean potencialmente peligrosos
    - Ejemplo: `/astronomy/neas?pha=1`
    - http://localhost:3000/api/astronomy/neas/danger?pha=1
### Colección NEAs

- Ruta base: `http://localhost:3000/astronomy/neas`

    4. GET para obtener designación, fecha y período anual de todos aquellos asteroides que no sean considerados potencialmente peligrosos. Las fórmulas son las mismas, pero el caso contrario, lógicamente
    - Ejemplo: `/astronomy/neas?pha=0`
    - http://localhost:3000/api/astronomy/neas/danger?pha=0
    - 
    5. GET para obtener designación, fecha y período anual de todos aquellos asteroides cuya potencial peligrosidad (pha) no sea conocida todavía
    - Ejemplo: `/astronomy/neas?pha=-1`
    - http://localhost:3000/api/astronomy/neas/danger?pha=-1
    - 
    6. GET para obtener designación, fecha y período anual de todos aquellos asteroides que cumplan la condición del período anual especificado
      * `/astronomy/neas/periods?from=36&to=900` http://localhost:3000/api/astronomy/neas/periods?from=36&to=900
      * `/astronomy/neas/periods?from=36` http://localhost:3000/api/astronomy/neas/periods?from=36
      * `/astronomy/neas/periods?to=900` http://localhost:3000/api/astronomy/neas/periods?to=900
      * El endpoint debe ser compatible con las 3 formas

  - `/astronomy/neas?from=2010&to=2015`
  - `/astronomy/neas?from=2010`
  - `/astronomy/neas?to=2015`
  - En este caso, además, podremos poner la fecha más específica si quisiéramos:
    - `YYYY-MM-DD`
    - `YYYY-MM`
    - `YYYY`
  - El endpoint debe ser compatible con los 3 casos

  3. GET para obtener designación, fecha y período anual de todos aquellos asteroides que sean potencialmente peligrosos

  - Ejemplo: `/astronomy/neas?pha=1`

  * Esto se calcula de dos maneras distintas:

    1. POST para poder unirte a la asociación de astronomía
    - Ejemplo: `/astronomy/guild`
    - http://localhost:3000/api/astronomy/guild/
    - 

    2. GET para obtener nombre, edad (*sí, edad, no fecha de nacimiento*), ocupación, número de afiliado, puntos y fecha de afiliación de un usuario dado su número de afiliación
    - Ejemplo: `/astronomy/guild/123-23-45-33Y`
    - http://localhost:3000/api/astronomy/guild/2
    - 

    3. GET para obtener la información de todos los badges de un usuario dado a partir de su número de afiliación
    - Ejemplo: `/astronomy/guild/123-23-45-33Y/badges`
    - http://localhost:3000/api/astronomy/guild/2/badges (en un cambio de última hora he puesto que de solo los que tiene como given)
    - 

    4. GET para obtener la lista de todos los NEAs descubiertos por un usuario dado a partir de su número de afiliación
    - Ejemplo: `/astronomy/guild/123-23-45-33Y/neas`
    - http://localhost:3000/api/astronomy/guild/2/neas
    - 

    5. GET para obtener la lista de todos los NECs descubiertos por un usuario dado a partir de su número de afiliación
    - Ejemplo: `/astronomy/guild/123-23-45-33Y/necs`
    - http://localhost:3000/api/astronomy/guild/2/necs
    - 

    6. GET para obtener cuántos puntos tiene ese usuario
    - Ejemplo: `/astronomy/guild/123-23-45-33Y/points`
    - http://localhost:3000/api/astronomy/guild/2/points
    - 

    7. PUT para que un usuario pueda modificar su nickname y su ocupación
    - Ejemplo: `/astronomy/guild/123-23-45-33Y`
    - http://localhost:3000/api/astronomy/guild/2/edit
    - 

    8. PUT para que cada vez que un usuario descubra un NEA se añada el nombre del asteroide al array de asteroides descubiertos. Además, si llega a 5 la suma entre neas y necs deberá pasar a true el campo “given” del badge correspondiente. Recuerda también que si es su primer NEA, hay otro badge relativo a dicho logro!
    - Ejemplo: `/astronomy/guild/123-23-45-33Y/neas`
    - http://localhost:3000/api/astronomy/guild/2/neas
    - 

    9. PUT para que cada vez que un usuario descubra un NEC se añada el nombre del asteroide al array de asteroides descubiertos. Además si llega a 5 la suma entre neas y necs deberá pasar a true el campo “given” del badge correspondiente. Recuerda también que si es su primer NEC, hay otro badge relativo a dicho logro!
    - Ejemplo: `/astronomy/guild/123-23-45-33Y/necs
    - http://localhost:3000/api/astronomy/guild/2/necs
    - 
      * Ten en cuenta también que está el logro de haber descubierto 10 objetos entre NEAs y NECs. Deberás tenerlo en cuenta para cuando se añada el NEA o el NEC correspondiente.
      * Si todos los logros anteriores han sido obtenidos se deberá desbloquear, para ese usuario, el último de todos los logros
      * Recuerda también ir sumándole los puntos correspondientes al logro cada vez que el usuario desbloquee uno!

    10. PUT para modificar el campo deleted a true cuando el usuario quiera darse de baja de la asociación
    - Ejemplo: `/astronomy/guild/123-23-45-33Y/delete`
    - http://localhost:3000/api/astronomy/guild/1/delete
    - 

    11. DELETE para eliminar definitivamente a un usuario si de verdad no quiere volver a la asociación
    - Ejemplo: `/astronomy/guild/123-23-45-33Y`
    - http://localhost:3000/api/astronomy/users/1

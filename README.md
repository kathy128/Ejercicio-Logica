# Ejercicio-Logica
# Prueba Tecnica Script. Katherine Hidalgo
:hammer_and_wrench: Desarrollar un script que se ejecute con la línea de comandos (tipo “ts-node-dev script.ts” o “ts-node script.ts” o el que considere mejor), que lea el archivo Excel dentro del proyecto (una ruta relativa al script) e imprima en consola (console.log) los resultados a las preguntas:
1.	Estado con mayor acumulado a la fecha
2.	Estado con menor acumulado a la fecha
3.	El porcentaje de muertes vs el total de población por estado
4.	Cual fue el estado más afectado (explicar por qué)
Dar una breve explicación de los resultados.

# Para correr, ejecutar
:runner: node index.ts

# Dependencias
"dependencies": {
        "csv-parser": "^3.0.0"
      },
      "devDependencies": {
        "@types/node": "^18.7.18"
      }
# Librerias 
:books: Node fs

# Captura de resultados
:framed_picture:
Img1: https://firebasestorage.googleapis.com/v0/b/foto-1cb7e.appspot.com/o/Captura1.PNG?alt=media&token=ddde2549-2e76-4322-a481-388ab400131d
Img2: https://firebasestorage.googleapis.com/v0/b/foto-1cb7e.appspot.com/o/Captura2.PNG?alt=media&token=c5388b03-2599-430b-8ec2-f3c64ded9021

# Explicacion respuestas.
:nerd_face:
1. Para saber que el estado de California es el estado con mayor muertes acumuladas, se sumaron las muertes en todas las pueblos/ciudades del estado y se compara con los demas estados. 
2. Similar a la respuesta anterior, se halla que American Samoa es el estado con menos muertes acumuladas porque no tiene pueblos/ciudades y no tiene muertes, es decir, esta en 0.
3. Para esta pregunta se dividio las muertes de cada estado entre la poblacion total de cada estado y se multiplico por 100 para tener el porcentaje de las muertes por estado, en la imagen 1 y 2 se ve la lista de los porcentajes por estado. 
4. El estado mas afectado segun el csv, fue el de New Jersey. Esta conclusion resulta de hacer la relacion entre el numero de habitantes y las muertes en este estado, las cuales fueron muy altas en comparacion con los otros estados. 
Este estado tal vez no posee una gran poblacion pero si se vio altamente afectado por la cantidad de muertes.

:smile:

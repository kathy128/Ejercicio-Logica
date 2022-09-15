const csv = require('csv-parser');
const fs = require('fs');
var acumulados = new Array;
var estadosArray = new Array;
var poblacionArray = new Array;
var porcentajes = new Array;
let sumMuertes = 0;
let sumPoblacion = 0;
let estado = 'Alabama';
//Leo el archivo csv con libreria fs.
const data = fs.createReadStream('time_series_covid19_deaths_US.csv')
    .pipe(csv())
    //Itero por fila el csv
    .on('data', (row) => {
    let muertes = row['4/27/21'];
    let poblacion = row.Population;
    //Acumulo las muertes por estados en un array.
    if(estado == row.Province_State){
        //console.log("Estado: "+ row.Province_State)
        sumMuertes += parseInt(muertes);
        sumPoblacion += parseInt(poblacion);
    }else{
        acumulados.push(sumMuertes);
        estadosArray.push(estado);
        poblacionArray.push(sumPoblacion);
        sumPoblacion = parseInt(poblacion);
        sumMuertes = parseInt(muertes);
        estado = row.Province_State;
    }
 })
    //Cuando termina de leer el csv
    .on('end', () => {
        
        
    let worst = acumulados.indexOf(Math.max(...acumulados));
    let best = acumulados.indexOf(Math.min(...acumulados));
    console.log("----- RESPUESTAS A LAS PREGUNTAS ---------")
    console.log("1. Estado con mayor acumulado a la fecha es: " + estadosArray[worst]);
    console.log("2. Estado con mayor acumulado a la fecha es: " + estadosArray[best]);
    console.log("3. Porcentajes de muerte por estado: ")
    for (let index = 0; index < acumulados.length; index++) {
        if(poblacionArray[index] === 0){
            porcentajes[index] = 0;
        }else{
        porcentajes[index] = ((acumulados[index]/poblacionArray[index])*100);
    }
        console.log(". Porcentajes de muerte del estado " + estadosArray[index] + " VS la poblacion, es: "+ porcentajes[index]);
       
    }
    let masAfectado = porcentajes.indexOf(Math.max(...porcentajes));
    console.log("4. EL estado mas afectado fue: " + estadosArray[masAfectado] + " puesto que \n el porcentaje de muertes VS poblacion fue mayor que las demas.");
});


 

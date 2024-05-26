import { readFile } from 'fs/promises'
import topojson from "topojson-client";
const file = await readFile('./assets/topo.json', 'utf-8');
const data = JSON.parse(file);
const { feature } = topojson;

// Función para obtener los municipios de un departamento
export const getMunicipios = (query, whatIs) => {
    // whatIs solo puede ser 'departamento' o 'municipio' o 'distrito'
    if (!whatIs || (whatIs !== 'D' && whatIs !== 'M' && whatIs !== 'NAM')) {
        throw new Error('El segundo parámetro debe ser "M" o "D" o "NAM"');
    }

    if (!data?.objects?.collection) {
        throw new Error('No se encontraron datos válidos');
    }

    const geojson = feature(data, data.objects.collection);
  
    // Filtrar los municipios correspondientes al departamento especificado
    const municipios = geojson.features.filter (item => { 
        return item.properties[whatIs] === query;
    });

    return municipios;
}


// función para obtener un objeto con nombres de { departamentos[], municipios[], distritos[] }
export const getGeoData = () => {
    if (!data?.objects?.collection) {
        throw new Error('No se encontraron datos válidos');
    }

    const geojson = feature(data, data.objects.collection);
    const departamentos = [...new Set(geojson.features.map(item => item.properties.D))];
    const municipios = [...new Set(geojson.features.map(item => item.properties.M))];
    const distritos = [...new Set(geojson.features.map(item => item.properties.NAM))];

    return { departamentos, municipios, distritos };
}
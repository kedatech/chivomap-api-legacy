import { readFile } from 'fs/promises'
import topojson from "topojson-client";
const file = await readFile('./assets/topo.json', 'utf-8');
const data = JSON.parse(file);
const { feature } = topojson;

// Función para obtener los municipios de un departamento
export const getMunicipios = (departamento) => {

    console.log('departamento', departamento)
    const departamentoUpper = departamento.toUpperCase();

    if (!data || !data.objects || !data.objects.collection) {
        throw new Error('No se encontraron datos válidos');
    }

    const geojson = feature(data, data.objects.collection);
  
    // Filtrar los municipios correspondientes al departamento especificado
    const municipios = geojson.features.filter (item => { 
        return item.properties.D == departamentoUpper;
    });

    return municipios;
}


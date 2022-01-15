//creamos el arreglo 
import pokemonapi from "../api/pokemonapi"

const getpokemons  = ()=>{

    const pokemonsarr = Array.from(Array(650))
    return pokemonsarr.map((_ , index)=> index + 1)
}

//recibe un array desestructurado y lo muestra en consola
const getpokemonnames = async ([a,b,c,d] = [])=>{
   
    //const respuesta  = await pokemonapi.get(`/1`)
   //console.log(respuesta.data.name)
   const pormesarr = [
    pokemonapi.get(`/${a}`),
    pokemonapi.get(`/${b}`),
    pokemonapi.get(`/${c}`),
    pokemonapi.get(`/${d}`),

   ]
   const [p1,p2,p3,p4]  = await Promise.all(pormesarr)
   return[
       {name:p1.data.name,id:p1.data.id},
       {name:p2.data.name,id:p2.data.id},
       {name:p3.data.name,id:p3.data.id},
       {name:p4.data.name,id:p4.data.id},
   ]

}


const getpokemonoptions = async()=>{
//creamos una variable que recibe el arreglo lo mezcla y coje al azar 
    const mixpokemons = getpokemons().sort(()=>Math.random() - 0.5)
    //le enviamos el array cortado del primer al 4 puesto 
    const pokemons = await getpokemonnames(mixpokemons.splice(0,4))
    return pokemons
    
}

export default getpokemonoptions
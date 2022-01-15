<template>

  <h1 v-if="!pokemon">espera por favor </h1>

  <div v-else>

    <div v-if="record" class="record">
      <h2>{{mess2}}</h2>
      <h2>{{mess}}</h2>
    </div>

    <h3 class="aciertos">aciertos: {{aciertos}}</h3>
    
  <h1>quien es el pokemon ?</h1>

  <!--pokemon img-->
  <pokemonimage  :pokemonid="pokemon.id" :showpokemon="show"/>
  <!--pokemon op-->
  <pokemonoption :pokemons="pokemonarr"
    @selection="check"/>

  <template v-if="show">
    <h2  class="fade-in">{{message}}</h2>

    <button class="boton" @click="newGame">
      nuevo juego
    </button>
    </template>
  </div>


</template>

<script>
import Pokemonimage from '../components/pokemonimage.vue'
import Pokemonoption from '../components/pokemonoption.vue'
import getpokemonoptions from "../helpers/getpokemonoptions"



export default {

    components:{
       
        Pokemonoption,
        Pokemonimage,

    },
    data(){
      return{
        pokemonarr:[],
        pokemon:false,
        show: false,
        showanwer:false,
        message:"",
        mess:"",
        mess2:"",
        aciertos: 0,
        record:false,
        rec:0
      }

    },
    methods:{
      async mixpokemonarray(){
        this.pokemonarr = await getpokemonoptions()

        const numero = Math.floor(Math.random() * 4 )
        this.pokemon = this.pokemonarr[numero]
        
        
      },
      check(pokemonid){
        this.show = true
        this.showanwer = true

        if(pokemonid === this.pokemon.id){
          this.message = `correcto,${this.pokemon.name}`
          
          this.aciertos +=1
          this.rec = this.aciertos

          
        }else{
          this.message=`Capullo era ${this.pokemon.name}`
              this.record = true

              this.mess = `has acertado ${this.aciertos} preguntas`
              this.mess2 = `tu record es de  ${this.rec} aciertos`

              this.aciertos = 0
              
            
          
         
        }
        

      },

      newGame(){
         this.record = false
        this.show = false
        this.mixpokemonarray()
        this.pokemon = false

      }
     
    },

    mounted(){
     this.mixpokemonarray()
    }


}
</script>

<style scoped>
.boton{
  background-color: green;
  padding: 7px 30px;
  border: none;
  color: white;
  cursor: pointer;
}
.record{
  padding: 4px 30px;
  background-color: green;
  color: white;
  border-radius: 5px;
  width: 50%;
  position: absolute;
  top: 58%;
  left: 150px;
  z-index: 1;
  height: 20%;
}



@media   (min-width: 1024px){
  
.aciertos{
  position: absolute;
  top: 50px;
  left: 100px;
}

.record{
  left:320px;
  top: 320px;
}


}
</style>
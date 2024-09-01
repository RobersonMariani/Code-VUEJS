<template>
  <div class="container">
    <div class="row mt-2">

      <!-- início lado esquerdo -->
      <div class="col mb-2">
        <div class="card palco">
          <div class="card-header"></div>

          <div class="card-body bg-pokebola bg-normal">
            <div class="pokemon">
              <!--  <transition
                enter-from-class="entrada-estado-inicial"
                enter-active-class="transicao"
                enter-to-class="entrada-estado-final"
                leave-from-class="saida-estado-inicial"
                leave-active-class="transicao"
                leave-to-class="saida-estado-final"
              > --> <!-- :duration="{enter: 500, leave: 500}" -->
              <transition @after-enter="displayShowEvolutionEnter" @after-leave="displayShowEvolutionLeave"
                enter-active-class="animate__animated animate__bounceIn"
                leave-active-class="animate__animated animate__bounceOut">
                <img :src="`/img/pokemons/${pokemon.imagem}`" v-if="exibir">
              </transition>

              <div class="evolutions">
                <transition name="fade" v-for="evolution in pokemon.evolucoes" :key="evolution">
                  <img :src="`/img/pokemons/${evolution.toString().padStart(3, '0')}.png`" v-if="showEvolution">
                </transition>
              </div>
            </div>
          </div>

          <div class="card-footer">

            <nav class="nav nav-pills nav-fill">
              <router-link class="nav-item nav-link text-white" :to="{ path: '/sobre' }"
                exact-active-class="active">Sobre</router-link>
              <router-link class="nav-item nav-link text-white" :to="{ path: '/status' }"
                exact-active-class="active">Status</router-link>
              <router-link class="nav-item nav-link text-white" :to="{ path: '/habilidades' }"
                exact-active-class="active">Habilidades</router-link>
            </nav>

            <div class="detalhes">
              <router-view v-slot="{ Component }" :pokemon="pokemon" @addSkill="addSkill" @removeSkill="removeSkill">
                <transition enter-active-class="animate__animated animate__zoomInDown">
                  <component :is="Component" />
                </transition>
              </router-view>
            </div>

          </div>
        </div>
      </div>
      <!-- fim lado esquerdo -->

      <!-- início lado direito -->
      <div class="col mb-2 pokedex">
        <div class="row">
          <div class="col">
            <h1>Pokédex</h1>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <select class="form-select" v-model="sorting">
              <option value="">Ordenar Pokémon</option>
              <option value="1">Id crescente</option>
              <option value="2">Id decrescrente</option>
              <option value="3">De A - Z</option>
              <option value="4">De Z - A</option>
            </select>
          </div>

          <div class="col">
            <input type="text" class="form-control" placeholder="Pesquisar pokémon" v-model="namePokemon">
          </div>
        </div>

        <div class="row">
          <div class="pokedex-catalogo">

            <!-- início listagem dinâmica -->
            <transition-group name="sorting">
              <div v-for="pokemon in pokemons" :key="pokemon.id" :class="`cartao-pokemon bg-${pokemon.tipo}`"
                @click="analyzePokemon(pokemon)">
                <h1>{{ pokemon.id }} {{ pokemon.nome }}</h1>
                <span>{{ pokemon.tipo }}</span>
                <div class="cartao-pokemon-img">
                  <transition appear enter-active-class="animate__animated animate__fadeInDown">
                    <img :src="`/img/pokemons/${pokemon.imagem}`">
                  </transition>
                </div>
              </div>
            </transition-group>
            <!-- fim listagem dinâmica -->

          </div>
        </div>
      </div>
      <!-- fim lado direito -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    exibir: false,
    showEvolution: false,
    pokemon: {},
    pokemons: [],
    sorting: '',
    namePokemon: '',
  }),
  watch: {
    sorting(to) {
      if (to == 1) {
        this.pokemons.sort((a, b) => a.id - b.id);
      } else if (to == 2) {
        this.pokemons.sort((a, b) => b.id - a.id);
      } else if (to == 3) {
        this.pokemons.sort((a, b) => a.nome.localeCompare(b.nome));
      } else {
        this.pokemons.sort((a, b) => b.nome.localeCompare(a.nome));
      }
    },
    namePokemon() {
      fetch(`http://localhost:3000/pokemons?nome_like=${this.namePokemon}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.pokemons = data;
        })
    }
  },
  created() {
    fetch('http://localhost:3000/pokemons')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.pokemons = data;
      })
  },
  methods: {
    displayShowEvolutionEnter() {
      this.showEvolution = true
    },
    displayShowEvolutionLeave() {
      this.showEvolution = false
    },
    analyzePokemon(pokemon) {
      let changeAnalyzePokemon = false

      if ((this.pokemon.id != pokemon.id) && this.exibir) {
        setTimeout(() => {
          this.analyzePokemon(pokemon)
        }, 1000)

        changeAnalyzePokemon = true
      }

      this.pokemon = pokemon
      this.exibir = !this.exibir
      this.showEvolution = !this.showEvolution

      if (!this.exibir && !changeAnalyzePokemon) {
        this.pokemon = {}
      }
    },
    addSkill(skill) {
      if (this.pokemon.habilidades) {
        this.pokemon.habilidades.push(skill)
      }
    },
    removeSkill(index) {
      if (this.pokemon.habilidades[index]) {
        this.pokemon.habilidades.splice(index, 1)
      }
    },
    /* @before-enter="beforeEnter"
    @enter="duringEntry"
    @after-enter="afterEnter"
    @enter-cancelled="entryCancel"

    @before-leave="beforeLeave"
    @leave="duringLeave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancel" */
  }
}
</script>

<style>
body {
  background-color: #dee3eb;
}
</style>

<style scoped>
.pokedex {
  padding: 20px;
  background-color: #ffffff;
  -webkit-box-shadow: 2px 2px 10px rgba(200, 200, 200, 0.77);
  -moz-box-shadow: 2px 2px 10px rgba(200, 200, 200, 0.77);
  box-shadow: 2px 2px 10px rgba(200, 200, 200, 0.77);
  border-radius: 10px;
}

.pokedex-catalogo {
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  width: 98%;
  margin-top: 10px;
}

.cartao-pokemon {
  position: relative;
  margin: 5px;
  width: 150px;
  height: 115px;
  cursor: pointer;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 2px rgba(200, 200, 200, 0.77);
  -moz-box-shadow: 2px 2px 2px rgba(200, 200, 200, 0.77);
  box-shadow: 2px 2px 2px rgba(200, 200, 200, 0.77);
}

.cartao-pokemon h1 {
  color: #fff;
  font-size: 14px;
  margin: 5px 0px 0px 5px;
  padding: 0px;
}

.cartao-pokemon span {
  color: #fff;
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  font-size: 12px;
  margin: 10px 0px 0px 5px;
  padding: 5px 10px 5px 10px;
  border-radius: 25px;
}

.cartao-pokemon img {
  max-width: 60%;
  max-height: 60%;
  float: right;
}

.bg-grama {
  background-color: #2d8f78;
}

.bg-fogo {
  background-color: #e47373
}

.bg-agua {
  background-color: #5a9ed2
}

.bg-inseto {
  background-color: #26d3ab
}

.bg-normal {
  background-color: #cecece
}

.bg-pokebola {
  background-image: url("@/assets/img/pokebola.png");
  background-repeat: no-repeat;
  background-position: bottom right;
}

.palco {
  color: #fff;
  background-color: #333;
  -webkit-box-shadow: 2px 2px 10px rgba(230, 223, 223, 0.77);
  -moz-box-shadow: 2px 2px 10px rgba(230, 223, 223, 0.77);
  box-shadow: 2px 2px 10px rgba(230, 223, 223, 0.77);
  border-radius: 10px;
}

.pokemon {
  display: block;
  text-align: center;
  height: 215px;
}

.detalhes {
  margin: 20px 30px 20px 30px;
}

.evolutions {
  position: absolute;
  top: 10px;
  right: 0;
  height: 70px;
}

.evolutions img {
  cursor: pointer;
  max-width: 100%;
  max-height: 100%;
}
</style>

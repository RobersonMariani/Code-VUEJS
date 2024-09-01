<template>
    <div>
        <div v-if="!pokemon.id">
            Selecione um Pokémon
        </div>
        <div v-else>
            <table class="table text-white">
                <tbody>
                    <transition-group name="list">
                        <tr v-for="(habilidade, index) in orderedSkills" :key="habilidade">
                            <td>{{ habilidade }}</td>
                            <td class="d-flex justify-content-end">
                                <button type="button" class="btn btn-danger btn-sm"
                                    @click="$emit('removeSkill', index)">x</button>
                            </td>
                        </tr>
                    </transition-group>
                </tbody>
            </table>
            <input type="text" class="form-control" placeholder="Adicionar habilidade" v-model="skill"
                @keyup.enter="addSkill()">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Habilidades',
    props: {
        pokemon: Object
    },
    data: () => ({
        skill: ''
    }),
    methods: {
        addSkill() {
            this.$emit('addSkill', this.skill)
            this.skill = ''
        }
    },
    computed: {
        orderedSkills() {
            let skills = this.pokemon.habilidades
            return skills.sort()
        }
    }
}
</script>

<style scoped>
.table td {
    border: none;
}
</style>
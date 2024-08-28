<template>
    <div class="card">
        <div class="card-header bg-primary text-white">{{ data.servico }}</div>
        <div class="card-body">
            <p class="card-text">{{ data.descricao }}</p>
        </div>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin';
export default {
    name: 'Servico',
    mixins: [ApiMixin],
    props: ['id'],
    data: () => ({
        url: 'http://localhost:3000/servicos/'
    }),
    created() {
        this.getData(`${this.url}/${this.id}`)
    },
    /* watch: {
        $route(to) {
            this.getData(`${this.url}/${to.params.id}`)
        }
    }, */
    beforeRouteUpdate(to) {
        this.getData(`${this.url}/${to.params.id}`)
    }
}
</script>
<template>
    <div>
        <div class="card mb-4">
            <div class="card-header">Contratos</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <label class="form-label">ID Contrato:</label>
                        <input type="text" class="form-control" v-model="formSearch.id_like">
                    </div>
                    <div class="col-6">
                        <label class="form-label">Data início:</label>
                        <div class="input-group">
                            <input type="date" class="form-control" v-model="formSearch.data_inicio_gte">
                            <input type="date" class="form-control" v-model="formSearch.data_inicio_lte">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary" @click="search()">Pesquisar</button>
            </div>
        </div>

        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Lead</th>
                    <th>Servico</th>
                    <th>Data início</th>
                    <th>Data fim</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contract in data" :key="contract.id">
                    <td>{{ contract.id }}</td>
                    <td>{{ contract.lead.nome }}</td>
                    <td>{{ contract.servico.servico }}</td>
                    <td>{{ contract.data_inicio }}</td>
                    <td>{{ contract.data_fim }}</td>
                    <td>
                        <!-- <router-link :to="{ name: 'contrato', params: { id: contract.id } }" class="btn btn-info">
                            <i class="bi bi-pencil-square"></i>
                        </router-link> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin';
export default {
    name: 'Contratos',
    mixins: [ApiMixin],
    data: () => ({
        urlBase: 'http://localhost:3000/contratos?',
        paramsRelacional: '_expand=lead&_expand=servico',
        formSearch: {
            id_like: '',
            data_inicio_gte: '',
            data_inicio_lte: ''
        }
    }),
    methods: {
        search() {
            let url = `${this.urlBase}${this.paramsRelacional}`

            this.getData(url, this.formSearch)
        }
    },
    created() {
        let url = `${this.urlBase}${this.paramsRelacional}`

        this.getData(url, this.$route.query)
    },
    beforeRouteUpdate(to) {
        let url = `${this.urlBase}${this.paramsRelacional}`

        this.getData(url, to.query)

        this.getData(url)
    }
}
</script>
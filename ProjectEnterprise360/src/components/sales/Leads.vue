<template>
    <div>
        <h3>Leads</h3>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="lead in data" :key="lead.id">
                    <td>{{ lead.id }}</td>
                    <td>{{ lead.nome }}</td>
                    <td>{{ lead.telefone }}</td>
                    <td>
                        <router-link :to="{ name: 'lead', params: { id: lead.id } }" class="btn btn-info">
                            <i class="bi bi-pencil-square"></i>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin';
export default {
    name: 'Leads',
    mixins: [ApiMixin],
    created() {
        let url = 'http://localhost:3000/leads'
        this.getData(url)
    }
}
</script>
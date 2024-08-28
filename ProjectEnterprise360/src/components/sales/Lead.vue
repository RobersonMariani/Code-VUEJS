<template>
    <div>
        <h3>{{ data.id }} - {{ data.nome }}</h3>
        <div class="mb-3 rwo">
            <label class="col-sm-2 col-from-label">Nome</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="data.nome">
            </div>
        </div>

        <div class="mb-3 rwo">
            <label class="col-sm-2 col-from-label">Telefone</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="data.telefone">
            </div>
        </div>

        <div class="col-auto">
            <button class="btn btn-warning" type="button" @click="$router.push({ name: 'leads' })">Voltar</button>
            <button class="btn btn-primary" type="button" style="margin-left: 10px">Atualizar</button>
        </div>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin';
export default {
    name: 'Lead',
    mixins: [ApiMixin],
    props: ['id'],
    created() {
        let url = `http://localhost:3000/leads/${this.id}`
        this.getData(url)
    }
}
</script>
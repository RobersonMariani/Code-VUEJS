<template>
    <div class="container">
        <div class="row">
            <div class="col-6 bg-light">
                <span class="fs-4">ENTRADA DE DADOS</span>
                <hr>
                <!-- <form @submit.prevent="send($event)"> -->
                <form @reset.prevent="reset()">
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Nome:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.trim="form.name">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">E-mail:</label>
                        <div class="col">
                            <input type="email" class="form-control" v-model.trim="form.email">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Senha:</label>
                        <div class="col">
                            <input type="password" class="form-control" v-model.trim="form.password">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Idade:</label>
                        <div class="col">
                            <input type="number" class="form-control" v-model.number="form.age">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Gênero:</label>
                        <div class="col">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" v-model="form.gender" value="Feminino">
                                <label class="form-check-label">
                                    Feminino
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" v-model="form.gender" value="Masculino">
                                <label class="form-check-label">
                                    Masculino
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Licença:</label>
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" v-model="form.license" true-value="SIM"
                                    false-value="NÃO">
                                <label class="form-check-label">Li e aceito os termos</label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Interesses:</label>
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" value="JavaScript" type="checkbox"
                                    v-model="form.interests">
                                <label class="form-check-label">
                                    JavaScript
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" value="VueJS" type="checkbox" v-model="form.interests">
                                <label class="form-check-label">
                                    VueJS
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" value="Angular" type="checkbox"
                                    v-model="form.interests">
                                <label class="form-check-label">
                                    Angular
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" value="NodeJS" type="checkbox" v-model="form.interests">
                                <label class="form-check-label">
                                    NodeJS
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Telefone:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.phone" v-maska="'(##) #####-####'">
                            <small class="text-muted">Formato: 11 97777-5555</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CEP:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.cep" v-maska="'#####-###'">
                            <small class="text-muted">Formato: 00000-000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CPF:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.cpf" v-maska="'###.###.###-##'">
                            <small class="text-muted">Formato: 000.000.000-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CNPJ:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.cnpj" v-maska="'##.###.###/####-##'">
                            <small class="text-muted">Formato: 00.000.000/0000-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cartão de Crédito:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.creditCard"
                                v-maska="'#### #### #### ####'">
                            <small class="text-muted">Formato: 0000 0000 0000 0000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa veículo:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.licensePlate"
                                v-maska="maskOptions.licensePlate" tokens="token">
                            <small class="text-muted">Formato: AAA-0000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa veículo Mercosul:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.mercosurLicensePlate"
                                v-maska="maskOptions.mercosurLicensePlate">
                            <small class="text-muted">Formato: AAA0A00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">RG:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.rg" v-maska="maskOptions.rg">
                            <small class="text-muted">Formato: Depende o estado</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data:</label>
                        <div class="col">
                            <input type="date" class="form-control" v-model="form.date">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data/hora local:</label>
                        <div class="col">
                            <input type="datetime-local" class="form-control" v-model="form.localDateTime">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Mês:</label>
                        <div class="col">
                            <input type="month" class="form-control" v-model="form.month">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Semana:</label>
                        <div class="col">
                            <input type="week" class="form-control" v-model="form.week">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Hora:</label>
                        <div class="col">
                            <input type="time" class="form-control" v-model="form.hour">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cor:</label>
                        <div class="col">
                            <input type="color" class="form-color" v-model="form.color">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Valor limite:</label>
                        <div class="col">
                            <input type="range" class="form-range" min="0" max="100" step="1" v-model="form.range">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Escondido:</label>
                        <div class="col">
                            <input type="hidden" class="form-control" v-model="form.hidden">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Upload:</label>
                        <div class="col">
                            <input type="file" class="form-control" multiple @change="selectFiles($event)">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Descrição:</label>
                        <div class="col">
                            <textarea class="form-control" rows="3" v-model="form.description"></textarea>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cursos:</label>
                        <div class="col">
                            <select class="form-select" v-model="form.course">
                                <option value="">Selecione</option>
                                <option v-for="course in courses" :key="course.id" :value="course.id">{{ course.course
                                    }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Avaliação:</label>
                        <div class="col">
                            <!-- <input-star :number-stars="5" @rate="form.rating = $event"></input-star> -->
                            <input-star :number-stars="5" v-model:rate="form.rating"></input-star>
                        </div>
                    </div>
                    <hr>
                    <div class="mb-3 row">
                        <div class="col d-flex justify-content-between">
                            <button class="btn btn-secondary" type="reset">Limpar</button>
                            <button class="btn btn-success" type="button" @click="send($event)">Enviar (btn)</button>
                            <button class="btn btn-success" type="submit">Enviar (submit)</button>
                        </div>
                    </div>

                </form>
            </div>


            <div class="col-6 text-white bg-secondary" :style="`background-color: ${form.color} !important`">
                <span class="fs-4">ESTADO DO OBJETO</span>
                <hr>
                <div class="mb-5 row">
                    <span>{{ form }}</span>
                </div>

                <span class="fs-4">SAÍDA DE DADOS</span>
                <hr>
                <div class="mb-3 row">
                    <span>Nome: {{ form.name }}</span>
                </div>
                <div class="mb-3 row">
                    <span>E-mail: {{ form.email }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Senha: {{ form.password }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Idade: {{ form.age }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Gênero: {{ form.gender }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Licença: {{ form.license }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Interesses:</span>
                    <ul>
                        <li v-for="(interest, index) in form.interests" :key="index">{{ interest }}</li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Telefone: {{ form.phone }}</span>
                </div>
                <div class="mb-3 row">
                    <span>CEP: {{ form.cep }}</span>
                </div>
                <div class="mb-3 row">
                    <span>CPF: {{ form.cpf }}</span>
                </div>
                <div class="mb-3 row">
                    <span>CNPJ: {{ form.cnpj }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cartão de crédito: {{ form.creditCard }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Placa veículo: {{ form.licensePlate }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Placa veículo Mercosul: {{ form.mercosurLicensePlate }}</span>
                </div>
                <div class="mb-3 row">
                    <span>RG: {{ form.rg }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data: {{ $moment(form.date).format('DD/MM/YYYY') }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data/hora local: {{ $moment(form.localDateTime).format('DD/MM/YYYY hh:mm:ss') }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Mês: {{ $moment(form.month).format('MM/YYYY') }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Semana: {{ $moment(form.week).format('Do/YYYY') }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Hora: {{ form.hour }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cor: {{ form.color }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Valor limite: {{ form.range }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Escondido: {{ form.hidden }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Upload:</span>
                    <ul>
                        <template v-for="(file, index) in form.file" :key="index">
                            <li>Nome: {{ file.name }}</li>
                            <li>Tamanho em bytes: {{ file.size }}</li>
                            <li>Mime type: {{ file.type }}</li>
                        </template>

                    </ul>
                </div>
                <div class="mb-3 row">
                    <div style="white-space: pre">Descrição: {{ form.description }}</div>
                </div>
                <div class="mb-3 row">
                    <span>Curso: {{ form.course }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Avaliação: {{ form.rating }}</span>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import InputStar from '@/components/InputStar.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Formulario',
    components: { InputStar },
    data: () => ({
        maskOptions: {
            licensePlate: {
                mask: 'AAA-####',
                tokens: {
                    'A': {
                        pattern: /[a-zA-Z]/,
                        transform: (chr) => chr.toUpperCase()  // Converte para maiúscula
                    },
                    '#': {
                        pattern: /[0-9]/  // Aceita apenas dígitos
                    }
                }
            },
            mercosurLicensePlate: {
                mask: 'AAA#A##',
                tokens: {
                    'A': {
                        pattern: /[a-zA-Z]/,
                        transform: (chr) => chr.toUpperCase()  // Converte para maiúscula
                    },
                    '#': {
                        pattern: /[0-9]/  // Aceita apenas dígitos
                    }
                }
            },
            rg: {
                mask: '*********0',  // 9 caracteres alfanuméricos obrigatórios, 1 opcional
                tokens: {
                    '*': {
                        pattern: /[a-zA-Z0-9]/  // Aceita letras e números
                    },
                    '0': {
                        pattern: /[a-zA-Z0-9]/,
                        optional: true  // O último caractere é opcional
                    }
                }
            }
        },
        courses: [
            { id: 1, course: 'Banco de dados relacionais' },
            { id: 2, course: 'Curso de VueJS' },
            { id: 3, course: 'Curso de JavaScriptp' },
            { id: 4, course: 'Curso de PHP' },
            { id: 5, course: 'Curso de Laravel' },
        ],
        form: {},
        formBegin: {
            name: '',
            email: '',
            password: '',
            age: '',
            license: 'SIM',
            interests: [],
            gender: '',
            phone: '',
            cep: '',
            cpf: '',
            cnpj: '',
            creditCard: '',
            licensePlate: '',
            mercosurLicensePlate: '',
            rg: '',
            date: '',
            localDateTime: '',
            month: '',
            week: '',
            hour: '',
            color: '#6c757d',
            range: 5,
            hidden: 'Este input está escondido',
            file: {},
            description: '',
            course: '',
            rating: 0,
        }
    }),
    created() {
        this.reset()
    },
    methods: {
        selectFiles(event) {
            this.form.file = event.target.files
        },
        send() {
            const form = Object.assign({}, this.form)
            console.log(form)
        },
        reset() {
            this.form = Object.assign({}, this.formBegin)
        }
    },
}
</script>

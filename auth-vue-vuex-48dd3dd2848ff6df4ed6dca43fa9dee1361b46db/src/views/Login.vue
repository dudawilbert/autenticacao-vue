<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="efetuarLogin">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input class="form-control" type="email" id="email" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input class="form-control" type="password" id="senha" v-model="usuario.senha">
            </div>
            <p class="alert alert-danger" v-if="mensagemErro">
                {{mensagemErro}}
            </p>
            <button type="submit" class="btn btn-primary">Logar</button>
        </form>
        <router-link :to="{name: 'novo.usuario'}">
            Não possuiu um cadastro, cadastre-se aqui !
        </router-link>
    </div>
</template>
<script>
export default {
    data () {
        return {
            usuario: {
                email: '',
                senha: ''
            },
            mensagemErro: ''
        }
    },
    methods: {
        efetuarLogin () {
            this.$store.dispatch('efetuarLogin', this.usuario)
                .then(() => {
                    this.$router.push({name: 'gerentes'})
                    this.mensagemErro = ''
                })
                .catch(erro => {
                    if (erro.request.status === 401) {
                        this.mensagemErro = 'Login ou senha invalidos'
                    }
                })
        }
    }
}
</script>
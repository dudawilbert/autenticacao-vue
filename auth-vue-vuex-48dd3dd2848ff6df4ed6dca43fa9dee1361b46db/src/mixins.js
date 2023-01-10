export const logoutMixin = {
    methods: {
        efeturarLogout () {
            this.$store.commit('DESLOGAR_USUARIO')
            this.$router.push({name: 'login'})
        }
    }
}
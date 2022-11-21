

const goodsItem = {
    state: { 
        product: null,
        mounted() {
            fetch(`http://localhost:3000/${this.$route.name}/${this.$route.params.id}`)
                .then(res => res.json())
                .then(data => {
                    this.product = data
                })
        },
        destroyed() {
            this.product = null
        },
        
    }
}
export default goodsItem
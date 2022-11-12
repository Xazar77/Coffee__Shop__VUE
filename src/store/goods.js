

const goods = {
    state: {
        goods: [
            {
                id: 0,
                name: 'Solimo Coffee Beans 2kg',
                country: 'Brazil',
                price: 10.73,
                image: 'good-1.jpg'
            },
            {
                id: 1,
                name: 'Presto Coffee Beans 1kg',
                country: 'Brazil',
                price: 15.99,
                image: 'good-1.jpg'
            },
            {
                id: 2,
                name: 'AROMISTICO Coffee 1kg',
                country: 'Brazil',
                price: 6.99,
                image: 'good-1.jpg'
            },
            {
                id: 3,
                name: 'Solimo Coffee Beans 2kg',
                country: 'Brazil',
                price: 10.73,
                image: 'good-1.jpg'
            },
            {
                id: 4,
                name: 'Presto Coffee Beans 1kg',
                country: 'Brazil',
                price: 15.99,
                image: 'good-1.jpg'
            },
            {
                id: 5,
                name: 'AROMISTICO Coffee 1kg',
                country: 'Brazil',
                price: 6.99,
                image: 'good-1.jpg'
            }
        ]
    },
    getters: {
        getGoodsCard(state) {
            return state.goods
        },
    }
}
export default goods
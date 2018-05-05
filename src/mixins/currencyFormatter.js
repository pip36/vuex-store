export default {
    methods: {
        toGBP: (n) => {
            return `£${n.toFixed(2)}`
        },

        toUSD: (n) => {
            let exchangeRate = 1.32
            return `$${(n*exchangeRate).toFixed(2)}`
        },

        toCurrency (n, currency) {
            const acceptedCurrencies = {
                'GBP': this.toGBP,
                'USD': this.toUSD
            }

            if(!acceptedCurrencies[currency]) {
                return 'NOT AN ACCEPTED CURRENCY'
            }
            return acceptedCurrencies[currency](n)
        }
    }
}
<template>
  <div class="order-summmary">
    <h2> Order Total: {{toCurrency(orderTotal, 'GBP')}} </h2>
  </div>
</template>

<script>
import currencyFormatter from '@/mixins/currencyFormatter.js'

export default {
  name: 'orderSummary',
  mixins: [currencyFormatter],
  computed: {
    orderTotal () {
      return this.$store.state.cart.items
        .map((item) => item.price * item.quantity)
        .reduce((x,y) => x+y, 0)
    }
  }
}
</script>


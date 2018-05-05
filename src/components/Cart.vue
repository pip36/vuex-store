<template>
  <div class="cart">
    <ProductsFeed :products="cartItems" :isCart="true"/>
    <OrderSummary/>
  </div>
</template>

<script>
import ProductsFeed from '@/components/ProductsFeed.vue'
import OrderSummary from '@/components/OrderSummary.vue'

export default {
  name: 'cart',
  components: {
    ProductsFeed,
    OrderSummary
  },
  computed: {
    cartItems () {
      return this.$store.state.cart.items
    }
  }
}
</script>



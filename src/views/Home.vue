<template>
  <div class="home">
    <h1>Shopping Cart</h1>
    <Cart/>
    <h1>All Products</h1>
    <ProductsFeed :products="allProducts"/>
  </div>
</template>

<script>
import Cart from '@/components/Cart.vue'
import ProductsFeed from '@/components/ProductsFeed.vue'

export default {
  name: 'home',
  components: {
    Cart,
    ProductsFeed
  },
  computed: {
    allProducts () {
      return this.$store.state.products
    }
  },
  created() {
    this.$store.dispatch('SET_ALL_PRODUCTS')
  }
}
</script>

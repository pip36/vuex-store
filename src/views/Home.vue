<template>
  <div class="home">
    <user-preferences/>
    <h1>Shopping Cart</h1>
    <Cart/>
    <h1>All Products</h1>
    <ProductsFeed :products="allProducts"/>
  </div>
</template>

<script>
import Cart from '@/components/Cart.vue'
import ProductsFeed from '@/components/ProductsFeed.vue'
import UserPreferences from '@/components/UserPreferences.vue'

export default {
  name: 'home',
  components: {
    Cart,
    ProductsFeed,
    UserPreferences
  },
  computed: {
    allProducts () {
      return this.$store.state.shop.products
    }
  },
  created() {
    this.$store.dispatch('SET_ALL_PRODUCTS')
  }
}
</script>

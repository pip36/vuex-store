<template>
  <div class="product">
    <h3> {{item.name}} </h3>
    <p> {{item.description}} </p>
    <h4> {{toCurrency(item.price, preferedCurrency)}} </h4>
    <h4 v-if="isCartItem"> Quantity: {{item.quantity}} </h4>
    <button v-if="!isCartItem" @click="add(item)"> Add To Cart </button>
    <button v-else @click="remove(item)"> Remove Item </button>
  </div>
</template>

<script>
import currencyFormatter from '@/mixins/currencyFormatter.js'

export default {
  name: 'product',
  mixins: [currencyFormatter],
  props: {
    item: {
        default: [], 
    }, 
    isCartItem: {
        default: false,
        type: Boolean
    }
  },
  computed: {
      preferedCurrency () {
          return this.$store.state.user.preferences.currency
      }
  },
  methods: {
      add (item) {
          this.$store.dispatch('ADD_ITEM_TO_CART', item)
      },

      remove () {
          this.$emit('remove');
      },


  }
}
</script>

<style scoped>
.product {
    padding: 10px;
}
</style>


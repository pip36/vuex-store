<template>
  <div class="products-feed">
    <ul>
      <li v-for="(item, index) in products" :key="index"> 
        <product :item="item" :isCartItem="isCart" @remove="removeItem(index)"/> 
      </li> 
    </ul>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'

export default {
  name: 'productsFeed',
  props: ['products', 'isCart'],
  components: {
    Product
  },
  methods: {
    removeItem (index) {
      this.$store.dispatch('REMOVE_ITEM_FROM_CART', index)
    }
  }
}
</script>

<style lang="scss" scoped>
  .products-feed {
    ul {
      list-style: none;
      display: flex;          
      li {
        border: 1px solid #d3d3d3;
        margin-left: 10px;
        margin-right: 10px;
      } 
    }
  }
</style>


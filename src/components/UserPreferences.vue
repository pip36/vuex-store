<template>
  <div class="user-preferences">
    <label> currency </label>
    <select  v-model="currentCurrency" @change="setNewCurrency">
  
      <option v-for="currency in availableCurrencies" 
        :key="currency" :value="currency" 
       >
          {{currency}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
    name: 'userPreferences',
    created () {
        this.currentCurrency = this.userPreferences.currency
    },
    data () {
        return {     
            currentCurrency: ''           
        }
    },
    computed: {
        availableCurrencies () {
            return this.$store.state.shop.availableCurrencies
        },
        userPreferences () {
            return this.$store.state.user.preferences
        }
    },
    methods: {
        setNewCurrency() {
            this.$store.dispatch('SET_PREFERENCE', {preference: 'currency', value: this.currentCurrency})
        }
    }
}
</script>

<style lang="scss" scoped>
.user-preferences {
    position: fixed;
    right:0;
    width: 300px;
}
</style>



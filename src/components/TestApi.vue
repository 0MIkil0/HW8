<template>
  <div>
    <NavPage style="margin-top: -21px;"></NavPage>
    <div class="all-content">
      <h1>Bitcoin Price Index</h1>
      <div v-for="currency in info" class="currency">
        {{ currency.description }}:
        <span class="lighten">
          <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
        </span>
      </div>
    </div>
  </div>
</template>  
  
<script>
import NavPage from './NavPage.vue'
import axios from 'axios';

export default {
  components: {
    NavPage
  },
  data() {
    return {
      info: []
    }
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2)
    }
  },
  created() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      });
  }
}  
</script>

<style scoped></style>
  
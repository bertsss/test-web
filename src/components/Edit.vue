<template>
  <div class="hello">
	<h1>Product Show Page</h1>
	<div>
	  <table style="width:100%">
		<tr>
			<th>Name</th>
            <input type="text" v-model="product.name">
        </tr>
        <tr>
			<th>Price</th>
            <input type="number" v-model="product.price">
        </tr>
        <tr>
			<th>Quantity</th>
            <input type="number" v-model="product.quantity">
        </tr>
        <tr>
			<th>Size</th>
            <input type="text" v-model="product.size">
        </tr>
        <tr>
			<th>Code</th>
            <input type="number" v-model="product.code">
        </tr>
		<td><button v-on:click="update(product.id)">Save</button></td>
	 </table>
	</div>
  </div>
</template>
<script>
import axios from 'axios';
import config from '../../config/env.js';

export default {
	data () {
		return {
            product: {},
		}
	},
  	methods: {
		read() {
			axios.get(config.url + 'products/'+ this.$route.params.id).then(({ data }) => {
				this.product = data;
			});
        },
        update() {
            axios.put(config.url + 'products/'+ this.$route.params.id, this.product).then(({ data }) => {
				this.product = data;
				alert("Successfully updated, back to listing page to see changes");
			}).catch(function (error) {
    			alert("Fields cannot be blank");
  			});
        },
	},
	beforeMount() {
		this.read();
	},
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
	list-style-position: inside;
}
a {
  color: #42b983;
}
</style>

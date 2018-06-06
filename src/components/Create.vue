<template>
  <div class="hello">
	<h1>Add Product</h1>
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
		<td><button v-on:click="create()">Save</button></td>
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
        create() {
			console.log(this.product);
            axios.post(config.url + 'products', this.product).then(() => {
				this.$router.push('/');
			}).catch(function (error) {
    			alert("Fields cannot be blank");
  			});
        },
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

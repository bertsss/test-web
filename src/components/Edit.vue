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

export default {
	data () {
		return {
            product: {},
		}
	},
  	methods: {
		read() {
			axios.get('http://localhost:8000/api/products/'+ this.$route.params.id).then(({ data }) => {
				this.product = data;
			});
        },
        update() {
            console.log(this.product);
            axios.put('http://localhost:8000/api/products/'+ this.$route.params.id, this.product, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).then(({ data }) => {
				this.product = data;
			});
        },
	},
	beforeMount() {

        // var itemId = this.$route.params.id;
        // console.log();
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
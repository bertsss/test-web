<template>
  <div class="hello">
	<h1>List of products</h1>
	<div>
	  <table style="width:100%">
		<tr>
			<th>Name</th>
			<th>Price</th>
			<th>Quantity</th>
			<th>Size</th>
			<th>Unique Code</th>
			<th>Actions</th>
		</tr>
		<tr v-for="product in products">
			<td>{{ product.name }}</td>
			<td>{{ product.price }}</td>
			<td>{{ product.quantity }}</td>
			<td>{{ product.size }}</td>
			<td>{{ product.code }}</td>
			<td><router-link :to="'/edit/' + product.id">Edit</router-link></td>
		</tr>
	 </table>
	</div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  	name: 'hello',
	data () {
		return {
			products: [],
		}
	},
  	methods: {
		read() {
			axios.get('http://localhost:8000/api/products').then(({ data }) => {
				this.products = data;
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
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
</style>
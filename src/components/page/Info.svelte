<script>
	import Button from "./../parts/Button.svelte";
	console.log("On Menu");
</script>

<main>
	<div class="bg-image"></div>

	<div class="bg-text">
		<h1>Fan de chat ?</h1>
		<h2>Voici quelques informations qui pourraient vous être utile...</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, numquam ullam consequuntur quaerat debitis modi explicabo quis odit iure, autem et dicta culpa officia iste aspernatur? Facilis commodi perspiciatis atque laudantium, suscipit iusto quia non quae ea architecto odit at ipsum veritatis necessitatibus maxime. Dignissimos vero itaque rem adipisci veniam!</p>
		
		<div class="center">
			<Button url='/#/menu' text='CONTINUER'/>
		</div>
	</div>
</main>

<style>

main {
  height: 100%;
}

* {
  box-sizing: border-box;
}

.bg-image {
  /* The image used */
  background-image: url("https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg");

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

/* Position text in the middle of the page/image */
.bg-text {
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.2); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 20px;
  text-align: center;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
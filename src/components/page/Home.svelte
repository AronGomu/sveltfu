<script>
import Button from "./../parts/Button.svelte";

console.log("On Home");

let animalChecked = null;

let gotoMenu = () => {
	console.log(animalChecked);
}
</script>

<main>
	<div class="bg-image"></div>

	<div class="bg-text">
		<h2>CLINIQUE VERNAIS</h2>
		<h1>BIENVENUE</h1>
		<h4>Quel animal qui vous interesse ?</h4>
		<div>
			<div class="form">
				<div class='grid1'>
					Chien <input type="radio" bind:group={animalChecked} name="animal" value={'Chien'}>
				</div>
				<div class='grid2'>
					Chat <input type="radio" bind:group={animalChecked} name="animal" value={'Chat'}>
				</div>
				<div class='grid3'>
					Rongeur <input type="radio" bind:group={animalChecked} name="animal" value={'Rongeur'}>
				</div>
				<div class='grid4'>
					Reptile <input type="radio" bind:group={animalChecked} name="animal" value={'Reptile'}>
				</div>
			</div>
		</div>
		<div>
			Oiseau <input type="radio" bind:group={animalChecked} name="animal" value={'Oiseau'}>
		</div>
		<div class="gotoMenuButton center">
			<Button url='/#/info' text='CONTINUER' />
		</div>
		<div class="gotoMenuButton center">
			<Button url='/#/login' text='Se connecter' />
		</div>
	</div>
</main>

<style>

	main {
		width: 100%;
		height: 100%;
	}

	.bg-image {
  /* The image used */
  background-image: url("https://images.pexels.com/photos/5487070/pexels-photo-5487070.jpeg");

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
	
h1 {
	color: #ff3e00;
	text-transform: uppercase;
	font-size: 3em;
	font-weight: 100;
}

h2 {
	color: #771605;
}

.form {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1px;
	/*grid-auto-rows: minmax(100px, auto);*/
}

.gotoMenuButton {
	margin-top: 30px;
}

.grid1 {
	grid-column: 1;
	grid-row: 1;
}

.grid2 {
	grid-column: 2;
	grid-row: 1;
}

.grid3 {
	grid-column: 1;
	grid-row: 2;
}

.grid4 {
	grid-column: 2;
	grid-row: 2;
}

@media (min-width: 640px) {
	main {
		max-width: none;
	}
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
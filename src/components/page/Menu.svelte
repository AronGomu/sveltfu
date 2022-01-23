<script>
import Button from "../parts/Button.svelte";

console.log("On Menu");
</script>

<div>
  <Button text="New Game" url="#/new-game" />
  <Button text="Continue" url="#/new-game" disabled={true}/>
  <Button text="Options" url="#/options"/>
  <Button text="Game" url="#/game"/>

</div>

<style></style>
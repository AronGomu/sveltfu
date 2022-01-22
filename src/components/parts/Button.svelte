<script>
export let url = null;
export let text = null;
export let username = null;
export let password = null;

</script>

<a href="{url}">
	<button>{text}</button>
</a>


<style>
* {
  box-sizing: border-box;
}

:root {
  --light: #92DE34;
  --dark: #69BC22;
  --text: #025600;
}


button {
  display: block;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: var(--light);
  width: 250px;
  height: 50px;
  border-radius: 30px;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  background-size: 100% 100%;
  box-shadow: 0 0 0 7px var(--light) inset;
  margin-bottom: 15px;
}

button:hover {
  background-image: linear-gradient(
    145deg,
    transparent 10%,
    var(--dark) 10% 20%,
    transparent 20% 30%,
    var(--dark) 30% 40%,
    transparent 40% 50%,
    var(--dark) 50% 60%,
    transparent 60% 70%,
    var(--dark) 70% 80%,
    transparent 80% 90%,
    var(--dark) 90% 100%
  );
  animation: background 3s linear infinite;
}

@keyframes background {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 400px 0;
  }
}
</style>
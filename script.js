const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const apiUrl = "https://icanhazdadjoke.com";

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
	const config = {
		headers: {
			Accept: "application/json",
		},
	};

	const res = await fetch(apiUrl, config);
	const data = await res.json();

	jokeEl.textContent = data.joke;
}

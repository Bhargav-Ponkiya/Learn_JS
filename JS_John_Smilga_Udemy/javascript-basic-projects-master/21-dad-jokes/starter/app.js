const url = "https://icanhazdadjoke.com/";

// select elements
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", function () {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = "Loading...";

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "user-agent": "learning-app",
      },
    });

    if (!response.ok) {
      throw new Error(`Error code: ${response.status}`);
    }

    const data = await response.json();
    result.textContent = data.joke;
  } catch (err) {
    result.textContent = `There was an error: ${err}`;
  }
};

fetchDadJoke();

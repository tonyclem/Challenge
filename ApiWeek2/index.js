function requestData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

function renderImage(data) {
  const elementImg = document.createElement("img");
  elementImg.src = data.img;
  document.body.appendChild(elementImg);
  console.log(data);
}

function renderError(error) {
  const h1 = document.createElement("h1");
  h1.textContent = error.message;
  h1.style.backgroundColor = "red";
  document.body.appendChild(h1);
  console.log(error);
}

async function main() {
  try {
    const data = await requestData("https://xkcd.now.sh/?comic=latest");
    renderImage(data);
  } catch (err) {
    renderError(err);
  }
}

window.addEventListener("load", main);

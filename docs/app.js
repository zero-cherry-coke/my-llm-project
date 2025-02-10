async function main() {
  async function handleRecommend(event) {
    event.preventDefault(); // form의 기본 submit 막아줘야하고

    const url = "http://127.0.0.1:3000";
    const formData = new FormData(document.querySelector("#ccForm"));
    const text = formData.get("text");
    // console.log(text);
    const response = await await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
      // Content-Type 꼭!!!
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    document.querySelector("#box").textContent = JSON.stringify(json);
  }

  //   document
  //     .querySelector("#recommendBtn")
  //     .addEventListener("click", handleRecommend);
  document.querySelector("#ccForm").addEventListener("submit", handleRecommend);
}

document.addEventListener("DOMContentLoaded", main);

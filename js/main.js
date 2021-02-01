async function kanye() {
  const res = await fetch('https://api.kanye.rest/')
  const json = await res.json()

  document.querySelector('#display-quote').innerText = json.quote
}

document.querySelector('#get-quote').addEventListener('click', kanye)

kanye()
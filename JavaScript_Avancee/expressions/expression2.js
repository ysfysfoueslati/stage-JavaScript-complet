const textarea = document.querySelector('textarea')
const ul = document.querySelector('ul')

const sommaireRegex = /^(\d{2}):(\d{2}) (.*)$/gm

function buildSommaire() {
  ul.innerHTML = ''
  for (const match of textarea.value.matchAll(sommaireRegex)) {
    const [_, min, seconds, title] = match
    const li = document.createElement('li')
    li.innerHTML = `<a href="https://youtu.be/_VKVBxXmY8M?t=${min * 60 + seconds * 1}" target="_blank">${title}</a>`
    ul.appendChild(li)
  }
}

textarea.addEventListener('input', buildSommaire)

buildSommaire()
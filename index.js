let selected = 0
let list = document.getElementsByTagName('span')

list[0].style.backgroundColor = '#a00'

document.addEventListener('keydown', keydown)

function keydown(e) {
  switch (e.keyCode) {
    case 37: {
      if (selected > 6) selector(selected - 7)
      break
    }
    case 38: {
      selector(selected - 1)
      break
    }
    case 39: {
      if (selected < 7) selector(selected + 7)
      break
    }
    case 40: {
      selector(selected + 1)
      break
    }
  }
}

function selector(num) {
  if (num > Array.from(list).length - 1) {
    selected = 0
  } else if (num < 0) {
    selected = Array.from(list).length - 1
  } else {
    selected = num
  }

  Array.from(list).forEach((el) => {
    el.style.backgroundColor = ''
  })

  list[selected].style.backgroundColor = '#a00'
}

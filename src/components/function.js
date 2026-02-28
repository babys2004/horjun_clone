import { inject, ref } from 'vue'
const customNav = inject('change')
let lineTime = setInterval(slideMovie, 2000)
export const i1 = ref(200)
export const i2 = ref(200)
function slideMovie() {
  i1.value += 100
  i2.value += 100
  if (i1.value > 601) {
    i1.value = -100
  }
  if (i2.value > 901) {
    i2.value = 200
  }
}
export function nextPg() {
  i1.value += 100
  i2.value += 100
  if (i1.value > 601) {
    i1.value = -100
  }
  if (i2.value > 901) {
    i2.value = 200
  }
}
export function prevPg() {
  i1.value -= 100
  i2.value -= 100
  if (i1.value < -399) {
    i1.value = 400
  }
  if (i2.value < 101) {
    i2.value = 900
  }
}
export function goLine() {
  if (!lineTime) {
    lineTime = setInterval(slideMovie, 2000)
  }
}
export function stopLine() {
  clearInterval(lineTime)
  lineTime = null
}
export function movieMain() {
  if (customNav == 'main') {
    goLine
  } else {
    stopLine
    i1.value = 200
    i2.value = 200
  }
}

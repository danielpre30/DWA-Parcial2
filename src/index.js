import './scss/styles.scss'
import { createElement } from './js/utils'

const el = document.createElement('div')
const objAttr = { class: 'inn-container home' }

const children = [
    createElement('div', { class: 'header' }
        , ["<h1>Sign language<h1/>"]),
    createElement('div', { class: 'img-container'}, [
        createElement('button', {id:'button-x'},['X']),
        createElement('img', { class: 'img-sign', id: 'img-sign'})
    ]),
    createElement('div', { class: 'letters-container' }, ['V', 'T', 'R', 'E', 'W', 'O', 'L', 'I'].map((val, i) =>
        createElement('button', { class: 'letter', id: `${val.toLowerCase()}` }, [val])
    ))
]

const app = createElement(el, objAttr, children)

const root = document.getElementById('root')
root.appendChild(app)

const btns = document.getElementsByClassName('letter');
const imgContainer = document.getElementById('img-sign');
const btnX = document.getElementById('button-x');

Array.from(btns).forEach(val => val.addEventListener('click', () => {
    imgContainer.src = `/src/letters/${val.id}.png`
}
));

btnX.addEventListener('click', () => {
    imgContainer.src = ``
})
const arrowBtns = document.querySelectorAll('.arrow-btn')
const cardBtns = document.querySelectorAll('.card')

let currentCard = 0;
let dir = 1;

  moveCards();


let id_ = 1;

arrowBtns.forEach((btn, i) => {
  btn.onpointerenter = (e) => gsap.to(btn, {
    ease: 'expo',
    'box-shadow': '0 3px 4px #00000050'
  })

  btn.onpointerleave = (e) => gsap.to(btn, {
    ease: 'expo',
    'box-shadow': '0 6px 8px #00000030'
  })

  btn.onclick = (e) => {
    dir = (i == 0) ? 1 : -1
    if (i == 0) {
      currentCard--;
      id_--;
      id_ = Math.max(1, id_);
      currentCard = Math.max(0, currentCard);
    }
    else {
      currentCard++
      id_++;
      id_ = Math.min(5, id_)
      currentCard = Math.min(4, currentCard)
    }

    console.log(id_)
    document.getElementById('idCard').textContent = id_;
    moveCards(0.75)
  }
})



cardBtns.forEach((btn, i) => {
  btn.onpointerenter = (e) => gsap.to(btn, {
    ease: 'power3',
    overwrite: 'auto',
    'box-shadow': () => (i == currentCard) ? '0 6px 11px #00000030' : '0 6px 11px #00000030'
  })

  btn.onpointerleave = (e) => gsap.to(btn, {
    ease: 'power3',
    overwrite: 'auto',
    'box-shadow': () => (i == currentCard) ? '0 6px 11px #00000030' : '0 0px 0px #00000030'
  })

  btn.onclick = (e) => {
    dir = (i < currentCard) ? 1 : -1
    currentCard = i
    moveCards(0.75)
  }
})



function moveCards(dur = 0) {

  gsap.timeline({ defaults: { duration: dur, ease: 'power3', stagger: { each: -0.03 * dir } } })
  .to('.card', {
    x: -600 * currentCard,
    y: (i) => (i == currentCard) ? 0 : 15,
    height: (i) => (i == currentCard) ? 600 : 600,
    ease: 'elastic.out(0.4)'
  }, 0)

    .to('.card', {
      cursor: (i) => (i == currentCard) ? 'default' : 'pointer',
      'box-shadow': (i) => (i == currentCard) ? '0 6px 11px #000' : '0 0px 0px #0001',
      border: (i) => (i == currentCard) ? '2px solid #000' : '0px solid #000',
      background: (i) => (i == currentCard) ? '#000' : 'radial-gradient(100% 100% at top, #fff 20%, #eee 175%)',
      ease: 'expo'
    }, 0)
    .to('.icon svg', {
      attr: {
        stroke: (i) => (i == currentCard) ? '#000' : '#fff',
        fill: (i) => (i == currentCard) ? '#fff' : '#000'
      }

    }, 0)
    .to('.arrow-btn-prev', {
      autoAlpha: (currentCard == 0) ? 0 : 1

    }, 0)
    .to('.arrow-btn-next', {
      autoAlpha: (currentCard == 4) ? 0 : 1
    }, 0)
    .to('.card h2', {
      color: (i) => (i == currentCard) ? '#fff' : '#000',
    }, 0)


}



//Tutorial is on YouTube(https://www.youtube.com/@moinsite)

function handleOrientation(event) {
  let alpha = event.alpha
  let beta = event.beta
  let gamma = event.gamma

  let cube = document.querySelector('.cube');
  cube.style.transform = 'rotateX(' + beta + 'deg) rotateY(' + gamma + 'deg) rotateZ(' + alpha + 'deg)';

}


async function requestDeviceOrientation() {
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    //iOS 13+ devices
    try {
      const permissionState = await DeviceOrientationEvent.requestPermission()
      if (permissionState === 'granted') {
        window.addEventListener('deviceorientation', handleOrientation)
      } else {
        alert('Permission was denied')
      }
    } catch (error) {
      alert(error)
    }
  } else if ('DeviceOrientationEvent' in window) {
    //non iOS 13+ devices
    console.log("not iOS");
    window.addEventListener('deviceorientation', handleOrientation)
  } else {
    //not supported
    alert('nicht unterstützt')
  }
}



// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Hello?
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

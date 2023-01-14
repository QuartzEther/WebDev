const log = document.getElementById("log");

// Lock button: Lock the screen to the other orientation (rotated by 90 degrees)
const rotate_btn = document.querySelector('#lock_button');
rotate_btn.addEventListener('click', () => {
  log.textContent+=`Lock pressed \n`;

  const oppositeOrientation = screen.orientation.type.startsWith("portrait") ? "landscape" : "portrait";
  screen.orientation.lock("portrait")
    .then(() => {
      log.textContent = `Locked to ${oppositeOrientation}\n`
      }
    )
    .catch((error) => {
      log.textContent += `${error}\n`;
    });
});


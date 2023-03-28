const isOrange = (p) => {
  return (p.color === 'rgb(250,130,0)');
};

const isPurple = (p) => {
  return (p.color === 'rgb(200,0,200)');
};

const checkOranges = (pens) => {
  return pens.filter(isOrange).every((pen)=>!pen.hit);
};

const checkPurple = (pens) => {
  return pens.filter(isPurple).every((pen)=>pen.hit);
};

const modalMsg = document.querySelector('.modal-msg');
const modal = document.querySelector('.modal');

const checkForWin = (pens, ready) => {
  if (ready) {
    if (!checkOranges(pens)) {
      modalMsg.textContent = 'Close! Try again.';
      modal.style.display = 'block';
      return false;
    }
    if (checkPurple(pens)) {
      setTimeout(()=>{
        if (checkOranges(pens)) {
          modalMsg.textContent = 'Nice work!';
          modal.style.display = 'block';
          ready = false;  // eslint-disable-line
          return true;
        }
        return null;
      }, 2000);
    }
  } else {
    modal.style.display = 'none';
  }
  return null;
};

export default checkForWin;

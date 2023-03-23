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

const checkForWin = (pens) => {
  if (!checkOranges(pens)) {
    console.log('you lose');
    return;
  }
  if (checkPurple(pens)) {
    setInterval(()=>{
      if (checkOranges(pens)) {
        console.log('You win');
      }
    }, 2000);
  }
};

export default checkForWin;

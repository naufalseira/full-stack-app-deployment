const label = 'qwertyuiopasdfghjklzxcvbnm';
const labelImages = {
  a: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Sign_language_A.svg',
  b: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Sign_language_B.svg',
  c: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Sign_language_C.svg',
  d: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Sign_language_D.svg',
  e: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Sign_language_E.svg',
  f: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Sign_language_F.svg',
  g: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Sign_language_G.svg',
  h: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Sign_language_H.svg',
  i: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Sign_language_I.svg',
  j: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Sign_language_J.svg',
  k: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Sign_language_K.svg',
  l: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Sign_language_L.svg',
  m: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Sign_language_M.svg',
  n: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Sign_language_N.svg',
  o: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Sign_language_O.svg',
  p: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Sign_language_P.svg',
  q: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Sign_language_Q.svg',
  r: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Sign_language_R.svg',
  s: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Sign_language_S.svg',
  t: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Sign_language_T.svg',
  u: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Sign_language_U.svg',
  v: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sign_language_V.svg',
  w: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Sign_language_W.svg',
  x: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Sign_language_X.svg',
  y: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Sign_language_Y.svg',
  z: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Sign_language_Z.svg',
};

export interface UnitQuestionImage {
  character: string;
  imageUrl: string;
}

export const getRandomLetter = (): string => {
  const randomIndex = Math.floor(Math.random() * label.length);
  return label[randomIndex];
};

export const getRandomUnitQuestionImage = (): UnitQuestionImage => {
  const randomChar = getRandomLetter();
  const imageUrl = labelImages[randomChar];

  return {
    character: randomChar,
    imageUrl: imageUrl,
  };
};

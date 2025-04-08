import crypto from 'crypto';

export const gravatarPath = (string) => {
  const lowerCaseString = string.trim().toLowerCase();
  const md5 = crypto.createHash("md5");
  const digest = md5.update(lowerCaseString, "binary").digest("hex");
  // return `https://www.gravatar.com/avatar/${digest}/?d=wavatar`;
  // return `https://www.gravatar.com/avatar/${digest}/?d=monsterid`;
  return `https://www.gravatar.com/avatar/${digest}/?d=retro`;
  // return `https://www.gravatar.com/avatar/${digest}/?d=identicon`;
};;

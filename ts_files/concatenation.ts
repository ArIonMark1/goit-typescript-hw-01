
const header = document.querySelector('#header')!;

export function concatenation(firstWord: string, secondWord: string) {
    
  console.log(`${firstWord} ${secondWord}`);
  header.insertAdjacentHTML('afterbegin', `${firstWord} ${secondWord}`)
}
 
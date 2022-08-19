export function fetchAdvice() {
  return fetch("https://api.adviceslip.com/advice").then((res) => res.json());
}

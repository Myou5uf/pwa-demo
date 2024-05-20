export default async function swDev() {
  if ('serviceWorker' in navigator) {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    console.log('swURL', swUrl);
    const response = await navigator.serviceWorker.register(swUrl)
    console.log('register response', response);
  }
}

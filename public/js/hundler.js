const form = document.querySelector('#url-form');
const urlInput = document.querySelector('#url-input');
const longUrlLink = document.querySelector('#long-url');
const shortUrlLink = document.querySelector('#short-url');

form.addEventListener('submit', async event => {
  event.preventDefault();
  try {
    const response = await fetch(`${window.location.origin}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ targetUrl: urlInput.value }),
    });
  
    const parseResponse = await response.json();
    longUrlLink.setAttribute('href', parseResponse.longUrl);
    longUrlLink.textContent = parseResponse.longUrl;
    shortUrlLink.setAttribute('href', parseResponse.shortedUrl);
    shortUrlLink.textContent = parseResponse.shortedUrl;
  } catch (error) {
    throw new Error(error.message);
  }
});

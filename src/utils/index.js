export function setAccessToken(token) {
    localStorage.setItem('access_token', token);
}

export function removeAccessToken() {
    localStorage.removeItem('access_token');
}

export function getAccessToken() {
    return localStorage.getItem('access_token');
}

export function abbreviateWalletAddress(address, startLength = 6, endLength = 4) {
    if (!address || address.length <= startLength + endLength) return address;
    return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
}

export function replaceCharAtIndex(originalString, index, newChar) {
  let charArray = originalString.split(''); // Convert string to array of characters
  charArray[index] = newChar; // Replace the character at the specified index
  return charArray.join(''); // Join the array back into a string
}
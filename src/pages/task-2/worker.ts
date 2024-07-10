function handleCountWord(str: string) {
  const map: Record<string, number> = {};
  const words = str.split(/[,. ]+/);
  if (words.length < 3) {
    return;
  }
  for (let word of words) {
    word=word.toLowerCase();
    if (map[word]) {
      map[word]++;
    } else {
      map[word] = 1;
    }
  }

  const top3: string[] = [];
  for (const [key, value] of Object.entries(map)) {
    if (top3.length < 3) {
      top3.push(key);
    } else {
      const minIndex = top3.findIndex((item) => map[item] <= value);
      if (minIndex !== -1) {
        top3[minIndex] = key;
      }
    }
  }

  return {
    top3,
    count: words.length,
  };
}

self.onmessage = function (event: MessageEvent) {
  const str = event.data;
  const result = handleCountWord(str);
  self.postMessage(result);
};

function findLCS(str1, str2) {
  const dp = Array(str1.length + 1).fill(null).map(() => Array(str2.length + 1).fill(''));

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
      } else {
        dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
      }
    }
  }

  return dp[str1.length][str2.length];
}

function findLCSForMultipleStrings(strings) {
  let currentLCS = strings[0];

  for (let i = 1; i < strings.length; i++) {
    currentLCS = findLCS(currentLCS, strings[i]);

    // Если НОП пустая, дальнейший поиск не имеет смысла
    if (currentLCS.length === 0) {
      break;
    }
  }

  return currentLCS;
}

// Пример использования:
const strings = ["SDFGGGH", "SFFSDFFTYU", /* ... еще 254 строки ... */];
const lcs = findLCSForMultipleStrings(strings);
console.log(lcs); // Выводит общую подпоследовательность
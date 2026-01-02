// Ref: https://leetcode.com/problems/greatest-common-divisor-of-strings/

// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"

// Output: "ABC"

// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"

// Output: "AB"

// Example 3:

// Input: str1 = "LEET", str2 = "CODE"

// Output: ""

// Example 4:

// Input: str1 = "AAAAAB", str2 = "AAA"

// Output: ""​​​​​​​

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

const repeatingPattenRegex = (str, pattern) => {
	const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const regex = new RegExp(`^(${escapedPattern})+$`);
	return regex.test(str);
};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = (str1, str2) => {
	const smallerString = str1.length > str2.length ? str2 : str1;
	const largerString = str1.length > str2.length ? str1 : str2;

	let proposedAnswer = "";
	let storedAnswer = "";
	let didWeGetAnswer = false;

	for (let i = 0; i < smallerString.length; i++) {
		proposedAnswer += smallerString[i];
		didWeGetAnswer =
			repeatingPattenRegex(largerString, proposedAnswer) &&
			repeatingPattenRegex(smallerString, proposedAnswer);
		if (didWeGetAnswer) storedAnswer = proposedAnswer;
	}

	return storedAnswer;
};

gcdOfStrings(
	"TAUXXTAUXXTAUXXTAUXXTAUXX",
	"TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
);

function longestPalindromicSubstring(string) {
  // first letter start
  let longest = [0, 1]
	for(let i = 1; i < string.length; i++){
		// see if it's odd or even depending on when we start looking
		const odd = getLongestPalFrom( string, i - 1, i + 1)
		const even = getLongestPalFrom( string, i - 1, i)
		
		// see if even or odd is longer - determins if its a even or odd palendrome
		const oddRange = odd[1] - odd[0]
		const evenRange = even[1] - even[0]
		const currentLongest = Math.max(oddRange, evenRange) === oddRange ? odd : even
		
		// compares current range to the longest range
		const currentLongestRange = currentLongest[1] - currentLongest[0]
		const longestRange = longest[1] - longest[0]
		longest = Math.max(currentLongestRange, longestRange) === longestRange ? longest : currentLongest
	}
	
	// slice word by indexes
	return string.slice(longest[0], longest[1])	
}

function getLongestPalFrom(string, left, right){
	// check if left and right pointers are same value
	while(left >= 0 && right < string.length){
		if(string[left] !== string[right]) break
		
		left -= 1
		right += 1
	}
	// return array of indexies where palendrome starts/ends
	return [left + 1, right]
}

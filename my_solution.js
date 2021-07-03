function longestPalindromicSubstring(string) {
  let curr = [0, 1]
	for(let i = 1; i < string.length; i++){
		const odd = getLongestPalFrom( string, i - 1, i + 1)
		const even = getLongestPalFrom( string, i - 1, i)
		
		const oddRange = odd[1] - odd[0]
		const evenRange = even[1] - even[0]
		const longest = Math.max(oddRange, evenRange) === oddRange ? odd : even
		
		const longestRange = longest[1] - longest[0]
		const currRange = curr[1] - curr[0]
		curr = Math.max(longestRange, currRange) === currRange ? curr : longest
	}
	
	return string.slice(curr[0], curr[1])	
}

function getLongestPalFrom(string, left, right){
	while(left >= 0 && right < string.length){
		if(string[left] !== string[right]) break
		
		left -= 1
		right += 1
	}
	return [left + 1, right]
}

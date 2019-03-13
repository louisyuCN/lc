/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

function main(s) {

    let result = '';

    let thisMaxString = (s) => {

        let rs = '';
        let map = new Map();

        for (let i=0; i<s.length; i++) {
            if (map.get(s[i]) == null) {
                map.set(s[i], i);
                rs += s[i];
            } else {
                return rs;
            }
        }

        return rs;
    }

    for (let i=0; i<s.length; i++) {
        let tempResult = thisMaxString(s.slice(i));
        
        if (tempResult.length > result.length) {
            result = tempResult;
        }

    }

    return result.length;

}
//abcabcbb 3
//bbbbb 1
//pwwkew 3
console.log(main('pwwkew'));

console.log('aaa'.indexOf('a'));
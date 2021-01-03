let romanToInt = function (s) {
    let res = 0
    if (s.indexOf('IV') > -1 || s.indexOf('IX') > -1) {
        res -= 2
    }
    if (s.indexOf('XL') > -1 || s.indexOf('XC') > -1) {
        res -= 20
    }
    if (s.indexOf('CD') > -1 || s.indexOf('CM') > -1) {
        res -= 200
    }
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'I':
                res += 1;
                break
            case 'V':
                res += 5;
                break
            case 'X':
                res += 10;
                break
            case 'L':
                res += 50;
                break
            case 'C':
                res += 100;
                break
            case 'D':
                res += 500;
                break
            case 'M':
                res += 1000;
                break
        }
    }
    return res
}

console.log(romanToInt("MCMXCIV"))
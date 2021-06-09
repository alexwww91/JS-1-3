var i = 0;
while (i <= 100) {
    if (i >= 2) {
        var j = 2;
        while (j <= i) {
            if (j < i && i % j != 0) {
                j++;
            } else if (j == i) {
                console.log(i);
                j++;
            } else {
                break;
            }
        }
    }
    i++;
}

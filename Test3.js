function printBinary() {
    let startBy = 1;

    for (let i = 1; i <= 6; i++) {
        let cur = startBy;
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += cur + " ";
            cur = cur === 1 ? 0 : 1;
        }

        console.log(line.trim());

        startBy = startBy === 1 ? 0 : 1;
    }
}

printBinary();
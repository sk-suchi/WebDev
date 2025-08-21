function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "invalid";
    }
    let string=str.replace(/\s/g, "").toUpperCase();
    return string;
}
console.log(onlyCharacter("gu  ;  776..sfg"))
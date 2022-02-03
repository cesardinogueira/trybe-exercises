const angle1 = 60;
const angle2 = 60;
const angle3 = 61;

console.log(angle1 + angle2 + angle3);
if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
    console.log("Um triângulo não pode conter um angulo negativo!")
} else if ((angle1 + angle2 + angle3) == 180) {
    return true;
} else {
    return false;
}
const example = () => {
    const fromInput = document.getElementById("example").value;
    document.getElementById("tekst").innerHTML = fromInput;
}

document.getElementById("btn").addEventListener("click", example)

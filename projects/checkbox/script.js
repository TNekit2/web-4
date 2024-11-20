document.getElementById("calculateButton").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll('input[name="product"]:checked');
    let total = 0;

    checkboxes.forEach((checkbox) => {
        total += parseInt(checkbox.value);
    });

    document.getElementById("totalPrice").textContent = total;
});
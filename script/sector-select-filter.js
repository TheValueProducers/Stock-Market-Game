document.addEventListener('DOMContentLoaded', function () {
    const selectType = document.getElementById('sector-type');

    selectType.addEventListener('change', function () {
        const selectedOption = selectType.options[selectType.selectedIndex];
        const optionText = selectedOption.text;

        if (optionText.length > 10) {
            selectedOption.text = optionText.substring(0, 10) + '...';
        }
    });
});

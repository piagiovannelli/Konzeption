

function toggleText(id) {
    const hiddenText = document.getElementById(id);
    const toggleButton = document.getElementById(id)

    
    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
        hiddenText.style.display = 'block';
        document.getElementById('toggleButton').textContent = 'Text ausblenden';
    } else {
        hiddenText.style.display = 'none';
        document.getElementById('toggleButton').textContent = 'Text einblenden';
    }
}

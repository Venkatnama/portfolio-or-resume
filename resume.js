document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Show the notification
    var notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Optionally hide the notification after a few seconds
    setTimeout(function() {
        notification.style.display = 'none';
    }, 3000); // Hide after 3 seconds
});
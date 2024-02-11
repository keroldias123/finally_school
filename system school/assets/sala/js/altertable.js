function toggleView() {
    var cardView = document.getElementById("cardView");
    var tableView = document.getElementById("tableView");

    if (cardView.classList.contains("hidden")) {
        // Switch to card view
        cardView.classList.remove("hidden");
        tableView.classList.add("hidden");
    } else {
        // Switch to table view
        cardView.classList.add("hidden");
        tableView.classList.remove("hidden");
    }
}
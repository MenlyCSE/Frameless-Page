// homepage form
document.addEventListener("DOMContentLoaded", function() {
    var monthSelect = document.getElementById("monthSelect");
    var daySelect = document.getElementById("daySelect");
    var timeSelect = document.getElementById("timeSelect");

    // month select
    var months = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"
    ];

    for (var i = 0; i < months.length; i++) {
        var option = document.createElement("option");
        option.text = months[i];
        monthSelect.appendChild(option);
    }

    // year select
    var years = [
        "2023", "2024", "2025", "2026", "2027",
        "2028", "2029", "2030", "2031", "2032"
    ]

    for (var i = 0; i < years.length; i++) {
        var option = document.createElement("option");
        option.text = years[i];
        yearSelect.appendChild(option);
    }

    // day select
    var days = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
    ]

    for (var i = 0; i < days.length; i++) {
        var option = document.createElement("option");
        option.text = days[i];
        daySelect.appendChild(option);
    }

    // time select
    var time = [
        "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM",
        "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM"
    ]

    for (var i = 0; i < time.length; i++) {
        var option = document.createElement("option");
        option.text = time[i];
        timeSelect.appendChild(option);
    }

});
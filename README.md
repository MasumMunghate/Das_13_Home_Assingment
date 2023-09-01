# Das_13_Home_Assingment

The code begins by getting references to HTML elements with specific IDs using document.getElementById.

It creates a new JavaScript Date object named date. This object represents the current date and time.

The options variable defines how the date should be formatted when displayed. It specifies that we want the full weekday name, full month name, the numeric day of the month, and the numeric year.

The code uses the textContent property of each HTML element to set the content that will be displayed on the webpage.

monthNameEl.textContent is set to the full name of the current month. date.toLocaleDateString() is used with the "en" locale English to format the month.

dayNameEl.textContent is set to the full name of the current day of the week. Again, date.toLocaleDateString() is used with the "en" locale to format the day.

dayNumEl.textContent is set to the numeric day of the month, which is obtained using date.getDate().

yearEl.textContent is set to the numeric year, which is obtained using date.getFullYear().

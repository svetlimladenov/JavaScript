const init = (function () {
    const getWeekDays = function getWeekDays(locale) {
        const baseDate = new Date(Date.UTC(2017, 0, 2)); // just a Monday
        const weekDays = [];
        for (i = 0; i < 7; i++) {
            weekDays.push(
                baseDate.toLocaleDateString(locale, { weekday: "long" })
            );
            baseDate.setDate(baseDate.getDate() + 1);
        }
        return weekDays;
    };

    const getDaysInMonth = function getDaysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    };

    const getFirstDayOfMonth = function getFirstDayOfMonth(date) {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const generateCalendar = function generateCalendar(data) {
        const date = data.date;
        const locale = data.locale;
        const month = date.toLocaleString(locale, { month: "long" });

        const table = $(`
            <table>
                <caption>${month} ${date.getFullYear()}</caption>
                <tbody id="tableBody">
                    <tr id="dayNames">
                    </tr>
                </tbody>
            </table>
        `);

        const tableBody = table.find("#tableBody");
        const dayNamesRow = table.find("#dayNames");
        const weekDays = getWeekDays(locale);
        weekDays.forEach((day) => {
            dayNamesRow.append($(`<td>${day}</td>`));
        });
        const firstDayOfMonth = getFirstDayOfMonth(date);
        const daysInMonth = getDaysInMonth(
            date.getMonth() + 1,
            date.getFullYear()
        );
        let currentRow = $("<tr></tr>");
        for (let i = 1; i < daysInMonth + firstDayOfMonth + 1; i++) {
            if (i < firstDayOfMonth) {
                currentRow.append($("<td>-</td>"));
                continue;
            }
            const currentDate = i - firstDayOfMonth + 1;
            if (currentDate === date.getDate()) {
                currentRow.append($(`<td class="today">${currentDate}</td>`));
            } else {
                currentRow.append($(`<td>${currentDate}</td>`));
            }

            if (i % 7 === 0 && i !== 0) {
                tableBody.append(currentRow);
                currentRow = $("<tr></tr>");
            }
        }
        tableBody.append(currentRow);
        return table;
    };

    const getInputData = function getInputData() {
        const form = document.getElementById("form");
        const data = new FormData(form);
        return {
            locale: data.get("locale") || "default",
            date: new Date((date = data.get("date"))),
        };
    };

    const clearWrapper = function clearWrapper(wrapper) {
        wrapper.empty();
    };

    const attachListener = function attachListener(id) {
        const wrapper = $(`#${id}`);
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            e.stopPropagation();
            clearWrapper(wrapper);
            const calendar = generateCalendar(getInputData());
            wrapper.append(calendar);
        });
    };

    return attachListener;
})();

(function () {
    // noJquery();
    withJquery();
})();

function withJquery() {
    $("#search").on("click", function () {
        const searchTerm = $("#searchText").val();
        console.log(searchTerm);
        $("li")
            .css("font-weight", "normal")
            .filter(function (index, elem) {
                return elem.textContent.toLowerCase().indexOf(searchTerm) > -1;
            })
            .css("font-weight", "bold");
    });
}

function noJquery() {
    const search = document.getElementById("search");
    const towns = [...document.getElementsByTagName("li")];
    search.addEventListener("click", function (e) {
        cleanHighlight(towns);
        const searchText = document.getElementById("searchText").value;
        towns
            .filter((x) => x.textContent.toLowerCase().startsWith(searchText))
            .forEach((town) => {
                town.style.backgroundColor = "yellow";
            });
    });

    function cleanHighlight(towns) {
        for (const town of towns) {
            town.style.backgroundColor = "white";
        }
    }
}
// in event listener if we dont use a arrow function this will be bind to the search object
// but if we use arrow function it is being bind to the global object (window in the browser)

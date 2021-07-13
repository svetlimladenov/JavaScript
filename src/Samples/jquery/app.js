(function () {
    function noJquery() {
        const listItems = document.getElementsByTagName("li");
        const result = [...listItems].map((x) => x.textContent).join(',');
        
        document.getElementById("result").innerHTML = result;
    }

    //noJquery();

    function withJquery() {
        const content = $('li').toArray().map((x) => x.textContent).join(', ');
        $('#result').text(content);
    }

    withJquery();
})();
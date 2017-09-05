http://share-internal.deere.com/Teams/ChinaBranchCPS/Lists/Damage%20Incident%20Report/Damage%20New%20Form.aspx

// Function to load html file into textarea
function load_textarea(url, el) {
	console.log(el)
    jQuery.get(url, null, function (data) {
        el.val(data);
    }, "html");
}

// Function to download data to a local file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

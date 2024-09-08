var ajaxdata = {
    url: '', data: '',
    type: "GET",
    dataType: "JSON",
    error: function (request, error) {
        alert("資料錯誤!!" + error + "\n" + request.status + ":" + request.statusText)
    }

}
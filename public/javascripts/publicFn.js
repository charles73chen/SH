function getMenu() {
    $.LoadingOverlay("show");
    ajaxdata.url = '/Ajax/GetMenuAjax';
    ajaxdata.success = function (msg) {
        $.LoadingOverlay("hide");
        if (msg.state == '0') {
            var html = "";
            for (i = 0; i < msg.result.length; i++) {
                if (msg.result[i].sub.length > 0) {
                    html = html + "<div class='dashboard-nav-dropdown'>"
                    html = html + "<a href='#!' class='dashboard-nav-item dashboard-nav-dropdown-toggle'><i class='fas fa-users'></i>" + msg.result[i].MENU_FUNC + "</a>"
                    html = html + "<div class='dashboard-nav-dropdown-menu'>"
                    for (j = 0; j < msg.result[i].sub.length; j++) {
                        html = html + "<a href='" + msg.result[i].sub[j].URL + "' class='dashboard-nav-dropdown-item'>" + msg.result[i].sub[j].MENU_FUNC + "</a>";
                    }
                    html = html + "</div>";
                    html = html + "</div>";
                } else {
                    html = html + "<a href='" + msg.result[i].URL + "' class='dashboard-nav-item'><i class='" + msg.result[i].CLASS + "'></i>" + msg.result[i].MENU_FUNC + "</a>";
                }

            }
            //console.log(html)
            $('#menu').html(html)
            $(".dashboard-nav-dropdown-toggle").click(function () {
                $(this).closest(".dashboard-nav-dropdown")
                    .toggleClass("show")
                    .find(".dashboard-nav-dropdown")
                    .removeClass("show");
                $(this).parent()
                    .siblings()
                    .removeClass("show");
            });
            $(".menu-toggle").click(function () {
                if (mobileScreen.matches) {
                    $(".dashboard-nav").toggleClass("mobile-show");
                } else {
                    $(".dashboard").toggleClass("dashboard-compact");
                }
            });
        } else {
            console.log(msg)
            alert(msg.msg);
        }


    };
    ajaxdata.data = {
        "id": $('#id').val(),
        "password": $('#password').val()
    }
    $.ajax(ajaxdata);
}


function nullConver(str){
    let digitRegExp = /^\d+$/;
    if (typeof str === "string" && str.trim().length === 0) {
        return str;
    }else{
        return '';
    }
    
}
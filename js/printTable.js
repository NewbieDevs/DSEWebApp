function loadTable(fname, regionName) {

    $.getJSON("../js/" + fname, function(json) {
            console.log("Working");
            var table1obj = json;
            var tbl = $("<table class='table table-light table-hover table-bordered'/>").attr("id", "mytable");
            var tbHead = "<tr class='thead-dark'>" + "<th>Sr No</th>" + "<th>Institute Code</th>" + "<th>Institute Name</th>" + "<th>CAP I</th>" + "<th>CAP II</th>" + "<th>CAP III</th>" + "</tr>";
            var title = "<h3 class='page-header'>" + regionName + " Region</h3>"
                //alert(JSON.stringify(table1obj))
                //$("#mytable").setAttribute("class", "table-hover");
            $("#titleDiv").append(title);
            $("#div1").append(tbl);
            $("#mytable").append(tbHead);
            var cnt = 1;
            for (var i = 0; i < table1obj.length; i++, cnt += 1) {
                var tr = "<tr>";
                var td1 = "<td>" + cnt + "</td>";
                var td2 = "<td>" + table1obj[i]["InstiCode"] + "</td>";
                var td3 = "<td>" + table1obj[i]["InstiName"] + "</td>";
                var td4 = "<td>" + "<a class='btn btn-sm btn-primary target='_blank' href='../assets/DiplomaCollegesCutoff/cap1/" + table1obj[i]["InstiCode"] +
                    ".pdf'>VIEW</a>" + "</td>";
                var td5 = "<td>" + "<a class='btn btn-sm btn-primary target='_blank' href='../assets/DiplomaCollegesCutoff/cap2/" + table1obj[i]["InstiCode"] +
                    ".pdf'>VIEW</a>" + "</td>";
                var td6 = "<td>" + "<a class='btn btn-sm btn-primary target='_blank' href='../assets/DiplomaCollegesCutoff/cap3/" + table1obj[i]["InstiCode"] +
                    ".pdf'>VIEW</a>" + "</td></tr>";


                $("#mytable").append(tr + td1 + td2 + td3 + td4 + td5 + td6);
                // console.log(tr + td1 + td2 + td3 + td4 + td5 + td6)

            }
            console.log("Work Done..." + JSON.stringify(table1obj))

        })
        .done(function() {
            console.log("second success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });


}
$(function() { $('#download').hide(); });
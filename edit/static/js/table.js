$(document).ready(function(){
    function callbackFuncWithData(datas){
        teams = datas;
    }
    
    function getTeam(){
        $.getJSON('/api2/teams/',callbackFuncWithData);
    }

    function loadSearch(){
        teams =getTeam()
        $.getJSON('/api/articles/',function(datas){
            var tb =  $('#tblList>tbody');
            var docFrag = $(document.createDocumentFragment())
            $.each(datas,function(idx,article){
                var cell1 = $('<td></td>').text(article.articleid)
                var selected = $('<select></select>')
                $.each(teams,function(idx,teams){
                    option = $('<option></option>').attr("id", teams.teamid).text(teams.teamname)
                    if(teams.teamid == article.teamid){
                        option.attr("selected",true)
                    }
                    selected.append(option)
                })
                var cell2 = $('<td></td>').append(selected)
                var cell3 = $('<td></td>').text(article.title).attr('contenteditable','true')
                var cell4 = $('<td></td>').text(article.url).attr('contenteditable','true')
                var cell5 = $('<td></td>').text(article.imgurl).attr('contenteditable','true')
                var cell6= $('<td></td>').text(article.date).attr('contenteditable','true')
                var cell7= $('<td></td>').text(article.summary).attr('contenteditable','true')
                var cell8 = $('<td></td>').html('<button class="btn btn-danger"><i class="far fa-trash-alt"></i></button><button class="btn btn-primary"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>')
                var row = $('<tr></tr>').append([cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8])
                docFrag.append(row)
            })
            tb.html(docFrag)
        })
    }
    loadSearch()

    $('#tblList>tbody').on('click','button:nth-child(1)',function(){
        var id = $(this).parents('tr').find('td:nth-child(1)').text()
       //刪除資料
           $.ajax({
               'url':'/api/articles/' + id + '/',
               'type':'DELETE'
           }).done(function(data){
                loadSearch()
           })
   })

   $('#tblList>tbody').on('click','button:nth-child(2)',function(){
        var id = $(this).parents('tr').find('td:nth-child(1)').text()
        var teamid = $(this).parents('tr').find('select>:selected').attr("id")
        var title = $(this).parents('tr').find('td:nth-child(3)').text()
        var url = $(this).parents('tr').find('td:nth-child(4)').text()
        var imgurl = $(this).parents('tr').find('td:nth-child(5)').text()
        var date = $(this).parents('tr').find('td:nth-child(6)').text()
        var summary = $(this).parents('tr').find('td:nth-child(7)').text()
        var datas = {
            "id": id,
            "title": title,
            "url": url,
            "date": date,
            "team": team,
            "type": type
        }

        $.ajax({
            type: "POST",
            dataType: "json",
            url: "/edit/supdate/",
            data: datas,
        })
    })
})


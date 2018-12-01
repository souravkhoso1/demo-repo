var jsonData = null;


$(document).ready(function(){
	$.get('https://souravkhoso1.github.io/demo-repo/data.json', function (data) { 
    	jsonData = data;
    	//console.log(data.length);
    	$.each(jsonData, function(index, element) {
            var t = "<li><a class='link' style='color:#007bff' data-toggle='modal' data-target='#exampleModal' onclick='modalAction("+ element.No +")'>" + element.MovieName + "</a></li>"
            $('#movies-list').append(t);
        });
	});
});

function modalAction(id){
	var content;
    $.each(jsonData, function(index, element) {
        if(element.No === id){
         	content = element;
            	
        }
    });
    //console.log(content.MovieName);
    $("#exampleModalLabel").html(content.MovieName);
    $("#iframe-id").attr("src", "https://drive.google.com/file/d/"+content.VideoLink+"/preview");
    $("#folder-link-id").html("<a href='https://drive.google.com/open?id="+content.FolderLink+"' target='_blank'>https://drive.google.com/open?id="+content.FolderLink+"</a>");
    $("#video-link-id").html("<a href='https://drive.google.com/open?id="+content.VideoLink+"' target='_blank'>https://drive.google.com/open?id="+content.VideoLink+"</a>");
    if(content.SubtitleLink.length==0){
    	$("#subtitle-link-id").html("No link available");
    } else {
    	$("#subtitle-link-id").html("<a href='https://drive.google.com/open?id="+content.SubtitleLink+"' target='_blank'>https://drive.google.com/open?id="+content.SubtitleLink+"</a>");
    }
}
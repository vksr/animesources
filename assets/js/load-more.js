$(document).ready(function(){
  $(".cargar-mas-contenido").slice(0, 9).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".cargar-mas-contenido:hidden").slice(0, 3).slideDown();
    if($(".cargar-mas-contenido:hidden").length == 0) {
      $("#loadMore").text("Parece que ya lo has visto todo...").addClass("noContent cursor");
    }
  });
  
})
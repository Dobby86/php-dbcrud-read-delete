function init (){

    function printPaganti (data) {

            var html =$('#paganti-template').html();

            var template = Handlebars.compile(html);

            var target = $("#target");

            for (var  pagante of  data ) {

                console.log(pagante);

                var paganteHTML = template(pagante);

                target.append(paganteHTML);

    }

}

        function getAllPaganti() {

            $.ajax({
                url: "index.php",
                method: "GET",
                success : function(data) {
                    console.log(data);
                    printPaganti(data);
                },

           error : function (err) {
           console.log("errore");
            console.log(err);
     }
  });
}
// azioniamo al click l'evento di delete
        $('#target').on("click", ".delete", deletePaganti)

        function deletePaganti() {

            var cancella = $(this);
            var paganteHTML = cancella.parent();

            var id = paganteHTML.data("id");

              console.log('id' , id);

            $.ajax({
                url:' deletePaganti.php ',
                method : "POST",
                data: {
                    "id": id
                },
                success: function () {
                    console.log("deleted");
                    paganteHTML.remove();
                },
                error:function(err){
                    console.error(err);
                }
            });
        }


        getAllPaganti();
}
$(document).ready(init);

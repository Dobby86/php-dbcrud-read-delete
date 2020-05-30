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
        $('#target').on("click", ".delete", deletePagamento)
        function deletePagamento() {
            var cancella = $(this);
            var pagamentoHtml = cancella.parent();
            var id = pagamentoHtml.data('id');
            console.log(id);
            $.ajax({
                url:' deletePagamento.php ',
                method : 'POST',
                data: id,
                success:function () {
                    console.log("ok");
                    pagamentoHtml.remove();
                },
                error:function(err){
                    console.error(err);
                }


            });
        }


        getAllPaganti();
}
$(document).ready(init);

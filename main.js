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

getAllPaganti();
}
$(document).ready(init);

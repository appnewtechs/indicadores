$().ready(function(){
    
    $('a').on('click',
              function(event){ 
                                event.preventDefault;
                                $.ajax({
                                    url: '/dia:3000',
                                    complete: function(dados){
                                        console.log(dados);
                                    }                                    
                                    
                                });
                             });
})



//$().ready(function{
//
  //        $('a').click(function(event){
    //            event.preventDefault();
      //  });});

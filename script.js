
        var slideList = document.getElementById('slideList');
        var next = document.getElementById('next');
        var prev = document.getElementById('prev');
        var items =5;
        var count = 1;
        var star1 = document.getElementById('star1');
        var star2 = document.getElementById('star2');
        var star3 = document.getElementById('star3');
        var star4 = document.getElementById('star');
        var star5 = document.getElementById('star5');
        var pres = document.getElementById('pres');
        var names = []

       

        star1.addEventListener('click', function(){
            slideList.style.left="0px";
            star1.style.color="black";
            star2.style.color="grey";
            star3.style.color="grey";
            star4.style.color="grey";
            star5.style.color="grey";

        })

        star2.addEventListener('click', function(){
            slideList.style.left="-700px";
            star1.style.color="grey";
            star2.style.color="black";
            star3.style.color="grey";
            star4.style.color="grey";
            star5.style.color="grey";

        });

        star3.addEventListener('click', function(){
            slideList.style.left="-1400px";
            star1.style.color="grey";
            star2.style.color="grey";
            star3.style.color="black";
            star4.style.color="grey";
            star5.style.color="grey";

        });

        star4.addEventListener('click', function(){
            slideList.style.left="-2100px";
            star1.style.color="grey";
            star2.style.color="grey";
            star3.style.color="grey";
            star4.style.color="black";
            star5.style.color="grey";

        });

        star5.addEventListener('click', function(){
            slideList.style.left="-2800px";
            star1.style.color="grey";
            star2.style.color="grey";
            star3.style.color="grey";
            star4.style.color="grey";
            star5.style.color="black";

        })

        slideList.style.left="0px"

        function prevImg(){
           
                if(slideList.style.left=="0px"){

                slideList.style.left="-2800px"
                star1.style.color="grey";
            star2.style.color="grey";
            star3.style.color="grey";
            star4.style.color="grey";
            star5.style.color="black";
            }

           else if(slideList.style.left=="-2800px"){

             slideList.style.left="-2100px"
             star1.style.color="grey";
            star2.style.color="grey";
            star3.style.color="grey";
            star4.style.color="black";
            star5.style.color="grey";
            }
           else if(slideList.style.left=="-2100px"){

               slideList.style.left="-1400px";
               star1.style.color="grey";
            star2.style.color="grey";
            star3.style.color="black";
            star4.style.color="grey";
            star5.style.color="grey";
            }

           else if(slideList.style.left=="-1400px"){

             slideList.style.left="-700px"
             star1.style.color="grey";
            star2.style.color="black";
            star3.style.color="grey";
            star4.style.color="grey";
            star5.style.color="grey";
           }

           else if(slideList.style.left=="-700px"){

             slideList.style.left="0px";
             star1.style.color="black";
            star2.style.color="grey";
            star3.style.color="grey";
            star4.style.color="grey";
            star5.style.color="grey";
             }
            
        }
        prev.addEventListener('click', prevImg);

        function nextImg(){
           
           if(slideList.style.left=="-2800px"){

           slideList.style.left="0px"
           star1.style.color="black";
       star2.style.color="grey";
       star3.style.color="grey";
       star4.style.color="grey";
       star5.style.color="grey";
       }

      else if(slideList.style.left=="0px"){

        slideList.style.left="-700px"
        star1.style.color="grey";
       star2.style.color="black";
       star3.style.color="grey";
       star4.style.color="grey";
       star5.style.color="grey";
       }
      else if(slideList.style.left=="-700px"){

          slideList.style.left="-1400px";
          star1.style.color="grey";
       star2.style.color="grey";
       star3.style.color="black";
       star4.style.color="grey";
       star5.style.color="grey";
       }

      else if(slideList.style.left=="-1400px"){

        slideList.style.left="-2100px"
        star1.style.color="grey";
       star2.style.color="grey";
       star3.style.color="grey";
       star4.style.color="black";
       star5.style.color="grey";
      }

      else if(slideList.style.left=="-2100px"){

        slideList.style.left="-2800px";
        star1.style.color="grey";
       star2.style.color="grey";
       star3.style.color="grey";
       star4.style.color="grey";
       star5.style.color="black";
        }
       
   }
   next.addEventListener('click', nextImg);

       

        setInterval(function(){
            nextImg()
        }, 10000);

    


    

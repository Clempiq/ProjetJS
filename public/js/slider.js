class Slider
{
    constructor(auto)
    {
        this.auto = auto;
        this.time = null;
        this.selectedIndex = 0;
        this.slides = document.querySelector('.slides').children;
        this.total = this.slides.length;

        if(this.auto)
        {
            setTimeout(function(){

                console.log("ceci est le timeout function il démare au bout de 1,5 secondes");
            },1500);
            
             this.playAuto();

            
        }
        else
        {
            const controller = new SliderController();
        }
    }

    playAuto()
    {
        

        this.time = setInterval(function(){
    	    
            slider.slideTheImage();

        },5000);
     
    }

   

    slideTheImage()
    {
        this.selectedIndex++;

        if(this.selectedIndex >= this.total)
        {
            this.selectedIndex = 0;
        }

        

        for (let i = 0; i <  this.slides.length; i++) {
            
             this.slides[i].classList.remove("active");
        }

        this.slides[this.selectedIndex].classList.add("active");

    }

    pause()
    {

      
        console.log("pause");
        clearInterval(this.time);


    }

    prev()
    {
        console.log("previous");
         
        clearInterval(this.time);
        this.selectedIndex--;

        for (let i = 0; i <  this.slides.length; i++) {
            
            this.slides[i].classList.remove("active");

            if(this.selectedIndex < 0)
        {
            this.selectedIndex = this.total -= 1;
        }
       }

       this.slides[this.selectedIndex].classList.add("active");

       
    }

    

    next()
    {
        console.log("next");

     
        clearInterval(this.time);
        this.selectedIndex++;

        for (let i = 0; i <  this.slides.length; i++) {
            
            this.slides[i].classList.remove("active");

            if(this.selectedIndex >= this.total)
        {
            this.selectedIndex = 0;
        }
       }

       this.slides[this.selectedIndex].classList.add("active");

   }
   

    }
    




class SliderController
{
    constructor()
    {
		this.prevButton = document.querySelector('.prev');
		this.nextButton = document.querySelector('.next');
		this.playButton = document.querySelector(".play");
		this.pauseButton = document.querySelector('.pause');
        this.initController();
    }

    initController()
    {
        this.prevButton.addEventListener("click", function(){
		
		    slider.prev();

	    });

	    this.pauseButton.addEventListener("click", function(){

    	    slider.pause();
    	
        });

        this.playButton.addEventListener("click", function(){
		
		    slider.playAuto();

	    });

	    this.nextButton.addEventListener("click", function(){

    	    slider.next();
    	
        });
    }
}



const slider = new Slider();
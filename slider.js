function Slider (){
           this.imagesUrls= [],
           this.currentImg= 0,
           this.prevButton= null,
           this.nextButton= null,
           this.slideImage= null,
           this.start=function (elId) {
            const that = this;   
            elSelector='#' + elId;
            el=document.querySelector(elSelector);
            this.prevButton = el.querySelector(".left");
            this.nextButton = el.querySelector(".right");
            this.slideImage = el.querySelector(".img-css");
            this.prevButton.addEventListener("click", function () {
            that.onShowPrevBtn();
            });
            this.nextButton.addEventListener("click", function () {
            that.onShowNextBtn();
            });
            this.imagesUrls.push(
            "https://cs10.pikabu.ru/post_img/2020/09/18/10/1600451467196194424.jpg"
            );
            this.imagesUrls.push(
            "https://i.pinimg.com/736x/4a/5a/8d/4a5a8dba1f996f40e11e196807cf703d.jpg"
            );
            this.imagesUrls.push(
            "https://i.pinimg.com/736x/ea/6c/de/ea6cdee3693ccfdf923adae847377b5e.jpg"
            );
            this.slideImage.src = this.imagesUrls[this.currentImg];
            this.prevButton.disabled = true;
            },
            this.onShowPrevBtn= function () {
            this.currentImg--;
            this.slideImage.src = this.imagesUrls[this.currentImg];
            this.nextButton.disabled = false;
            if (this.currentImg === 0) {
            this.prevButton.disabled = true;
            }
            }
            this.onShowNextBtn=function () {
                this.currentImg++;
                this.slideImage.src = this.imagesUrls[this.currentImg];
                this.prevButton.disabled = false;
                if (this.currentImg === this.imagesUrls.length - 1) {
                this.nextButton.disabled = true;
                }
                }
}


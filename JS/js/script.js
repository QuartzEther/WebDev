function myFunction(this_id){
    const styles = window.getComputedStyle( document.getElementById(this_id), "")
    const width = styles.getPropertyValue('width');
    styles.setPropertyValue('width',"50px")
    console.log(width); // 100px
};

btn_red.addEventListener("click", function(){myFunction(this.id);})
btn_green.addEventListener("click", function(){myFunction(this.id);})
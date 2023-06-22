const colors=["red","pink","green","yellow","purple","sky blue","gray","orange"];

 function changeColor() {
    const colorIndex=parseInt(Math.random()*colors.length)// parseInt: convert string to integer
    document.body.style.background=colors[colorIndex];
    
}
let lists = document.getElementsByClassName("list");
let rightBox = document.getElementsByClassName("right")[0];
let leftBox = document.getElementsByClassName("left")[0];

for(let list of lists){
    list.addEventListener('dragstart', function(e){
        let selected = e.target;

        rightBox.addEventListener('dragover', function(e){
            e.preventDefault();
        })
         rightBox.addEventListener('drop', function(e){
            rightBox.appendChild(selected);
            selected = null;
         })

         leftBox.addEventListener('dragover', function(e){
            e.preventDefault();
         })

         leftBox.addEventListener('drop', function(e){
            leftBox.appendChild(selected);
            selected = null;
         })

    })
   
}


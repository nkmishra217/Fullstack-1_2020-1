//selectors 

var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");

//Event handlers
todoButton.onclick = create;
todoList.onclick = checkdelete;



//Functions
function create(e) {
    e.preventDefault();
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    

    var newList = document.createElement("li");
    newList.classList.add("todo-item");
    newList.innerHTML = todoInput.value;
    if(todoInput.value=="") {
        alert("List cannot be empty");
    }
    else {
        newDiv.appendChild(newList);

        var checkbtn = document.createElement("button");
        checkbtn.classList.add("check-btn");
        checkbtn.innerHTML='<i class="fa fa-check"></i>';
        newDiv.appendChild(checkbtn);

        var deletebtn = document.createElement("button");
        deletebtn.classList.add("delete-btn");
        deletebtn.innerHTML='<i class="fa fa-trash"></i>';
        newDiv.appendChild(deletebtn);

        todoList.appendChild(newDiv);
        todoInput.value="";
    }


}

    function checkdelete(e) {
        var item = e.target;
        if(item.classList[0]=="delete-btn") {
            var parent = item.parentNode;
            parent.remove();
        }

        if(item.classList[0]=="check-btn") {
            var parent = item.parentNode;
            parent.classList.toggle("completed");
        }
    }


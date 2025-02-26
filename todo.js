submit.addEventListener("click", (e) => {
    e.preventDefault()
    let todoTitle = title.value.trim();
    let todoDesc = desc.value.trim();
    localStorage.setItem("todo", JSON.stringify([todoTitle, todoDesc]))
    console.log(e)
    const tbodyEl = document.querySelector("tbody");
    tbodyEl.innerHTML += `
    <tr>
    <td>${titlec} </td>
    <td> ${descc}</td>
    <td><button class="deleteBtn" class="btn btn-danger">Delete</button></td>
    </tr> 
    `
  })
  let todoListValue = [];
  todoListValue = getTodoListFromLS();
  let newtodo =  [todoTitle,todoDesc]

  let getTodoListFromLS = () => {
    return JSON(localStorage.getItem("todo")) || [];
  }
  
  function onDeleteRow(e){
    if(!e.target.classList.contains("deleteBtn")){
      return;
    }
    const btn =e.target;
    btn.closest("tr").remove();
  }
  const tableEl = document.querySelector("table");
  tableEl.addEventListener("click", onDeleteRow);
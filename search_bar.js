const searchFun = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();

    let medalTable = document.getElementById('medalTable');

    let tr = medalTable.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];

        if(td){
            let textvlaue = td.textContent || td.innerHTML;

            if(textvlaue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}
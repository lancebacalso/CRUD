            var rIndex,
                table = document.getElementById("table");
            
            // check the empty input
           
       
            function checkEmptyInput()
            {
                var isEmpty = false,
                    name = document.getElementById("name").value,
                    bday = document.getElementById("bday").value,
                    gender = document.getElementById("gender").value;
            
                if(name === ""){
                    alert("Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(bday === ""){
                    alert("bday Connot Be Empty");
                    isEmpty = true;
                }
                else if(gender === ""){
                    alert("gender Connot Be Empty");
                    isEmpty = true;
                }
                return isEmpty;
            }
            
            // add Row
            function addHtmlTableRow()
            {
                
                var inputbd= document.getElementsByTagName("Input")[1].value;
                 var currentTime = new Date();
                var date = new Date(inputbd);
                var year = currentTime.getFullYear();

                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    cell5 = newRow.insertCell(4),
                    name = document.getElementById("name").value;
                    bday = document.getElementById("bday").value;
                    gender = document.getElementById("gender").value;

                    var btn1 = document.createElement('input');
                    btn1.setAttribute('type', 'button');
                    btn1.setAttribute('value', 'Edit');
                    btn1.setAttribute( 'name','btn1'); 
                    var btn2 = document.createElement('input');
                    btn2.setAttribute('type', 'button');
                    btn2.setAttribute('value', 'Delete');
                    btn2.setAttribute( 'name','del1'); 
                    cell5.appendChild(btn1)
                    cell5.appendChild(btn2)
            
                cell1.innerHTML = name;
                cell2.innerHTML = bday;
                cell3.innerHTML = Number(year-1) - Number(date.getFullYear());
    
                cell4.innerHTML = gender;
                cell5.appendChild(btn1)
                cell5.appendChild(btn2)

                document.getElementById("name").value = " ";
                document.getElementById("bday").value = " ";
                document.getElementById("gender").value = " ";

                
               
                 btn2.onclick = (function() {
                return function() {
                  
                      
                        var rows = document.getElementById('table').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
                        var holder = 0;
                        for (i = 0; i < rows.length; i++) {
                                    rows[i].onclick = function() {

                                    // alert(this.rowIndex + 1);
                                    holder += this.rowIndex + 1;
                                    alert("selected row will be deleted");
                                    removeSelectedRow(holder);
                                }
                                }
                         
                    
                    
                };
            })();

            btn1.onclick = (function() {
                return function() {
                    selectedRowToInput()
                    var update= document.getElementById("click");
                    update.innerText = "update"
                    update.onclick = function()
                    {

                        editHtmlTbleSelectedRow()
                        document.getElementById("name").value = " ";
                        document.getElementById("bday").value = " ";
                        document.getElementById("gender").value = " ";
                        update.innerText = "submit"
                        update.onclick = function()
                        {
                            addHtmlTableRow()
                        }

                    }
                };
            })();


                // call the function to set the event to the new row

            }
            }
              function selectedRowToInput()
            {
                
            for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index

                      rIndex = this.rowIndex;
                      document.getElementById("name").value = this.cells[0].innerHTML;
                      document.getElementById("bday").value = this.cells[1].innerHTML;
                     
                      if (this.cells[3].innerHTML === "Male")
                      {
                        
                         document.getElementById("gender").selectedIndex = 0;
                      }
                      else
                      {
                         document.getElementById("gender").selectedIndex = 1;
                      }
                       
                     

                    };


                }

            }
            selectedRowToInput();

             function editHtmlTbleSelectedRow()
            {
                var name = document.getElementById("name").value,
                    bday = document.getElementById("bday").value,
                    gender = document.getElementById("gender").value;
                var inputbd= document.getElementsByTagName("Input")[1].value;
                 var currentTime = new Date();
                var date = new Date(inputbd);
                var year = currentTime.getFullYear();
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = name;
                table.rows[rIndex].cells[1].innerHTML = bday;
                table.rows[rIndex].cells[2].innerHTML =Number(year-1) - Number(date.getFullYear());
                table.rows[rIndex].cells[3].innerHTML = gender;
              }
            }

            function removeSelectedRow(holder)
            {   
                      
                        table.deleteRow(holder-1);
                        document.getElementById("name").value = "";
                        document.getElementById("bday").value = "";
                        document.getElementById("gender").value = "";
                    
            }
        


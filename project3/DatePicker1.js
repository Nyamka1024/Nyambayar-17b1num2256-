class DatePicker {
    constructor(id, callback) {
        this.id = id;
        this.callback = callback;
    }

    render(date) {
        
        var parent = document.getElementById(this.id);
        parent.appendChild(this.createCalender(date));
    }

    createCalender(date) {
      
        var table = document.createElement("table");
        table.style.border = "ridge grey";
        
       
        var header = this.createCalenderHeader(table, date);
 
       
        var daysOfWeek = ["Sun", "Mon","Tues","Wed","Thur","Fri","Sat"];
        var rowWeek = header.insertRow(1);
        for (var i = 0; i < 7; i++) {
            var cell = rowWeek.insertCell(i);
            cell.style.color="red";
            cell.innerHTML = daysOfWeek[i];
        }
        
     
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var curDate = new Date(firstDay.getTime());
        curDate.setDate(-firstDay.getDay() + 1);
        //console.log(curDate.getDate());
        var rowIndex = 2;
        while (true) {
            var row = table.insertRow(rowIndex);
            rowIndex = rowIndex + 1;
            
            for (var i = 0; i < 7; ++ i) {
                var cell = row.insertCell(i);
                cell.innerHTML = curDate.getDate();

                if (curDate.getMonth() === date.getMonth()) {
                    cell.setAttribute("id", "CurMonth");

                        let ob = {
                            month: curDate.getMonth() + 1,
                            day: cell.innerHTML,
                            year: curDate.getFullYear()
                        };
                    cell.addEventListener("click",()=>{
                    	this.style.color = 'yellow';
                        this.callback(this.id, ob);
                    });
                } else {
                    cell.setAttribute("id", "OtherMonth");
                    cell.style.color='pink';
                }

                curDate.setDate(curDate.getDate() + 1);
            }
            if (curDate.getMonth() != date.getMonth()) {
                break;
            }
        }
        return table;
    }

 
    createCalenderHeader(table, date) {
        var header = table.createTHead();
        var headerRow = header.insertRow(0);

        var leftArrowCell = headerRow.insertCell(0);
        leftArrowCell.innerHTML = "<<";
        leftArrowCell.setAttribute("id", "LeftArrow");
        leftArrowCell.style.color="white";
 		leftArrowCell.style.background="#85db84";
        
        var monthCell = headerRow.insertCell(1);
        var months = ["January", "February","March", "April","May", "June", "July", "August", "September",
        "October","November","December"];
        monthCell.innerHTML = months[date.getMonth()] + "   " + date.getFullYear();
        monthCell.colSpan = "5";
        monthCell.style.color="white";
 		monthCell.style.background="#85db84";
 		monthCell.style.textAlign="center";

        var rightArrowCell = headerRow.insertCell(2);
        rightArrowCell.innerHTML = ">>";
        rightArrowCell.setAttribute("id", "RightArrow");
        rightArrowCell.style.color="white";
 		rightArrowCell.style.background="#85db84";
 		rightArrowCell.style.textAlign="right";

      
        leftArrowCell.addEventListener("click", () => {
            table.remove();
            date.setMonth(date.getMonth() - 1);
            console.log(date);
            this.render(date);
        });

        rightArrowCell.addEventListener("click", () => {
            table.remove();
            date.setMonth(date.getMonth() + 1);
            console.log(date);
            this.render(date);
        });

        return header;
    }
}
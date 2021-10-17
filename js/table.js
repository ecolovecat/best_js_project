function tick_box(self) {
    let del = document.getElementById("del_btn");
    let check_all_btn = document.getElementsByClassName("check_all");
    if (self.checked == true) {
        self.parentNode.parentNode.classList.add("checked");
        del.style.visibility = "visible";

    } else {
        self.parentNode.parentNode.classList.remove("checked");
        check_all_btn[0].checked = false;
    }

    let unchecked_all = true;
    let checked_all = true;
    let rows = document.getElementsByClassName("check_box");
    for (i = 0; i < rows.length; i++) {
        if (rows[i].checked == false) {
            checked_all = false;
        } else {
            unchecked_all = false;
        }
    }



    if (checked_all == true) {
        check_all_btn[0].checked = true;
        console.log("check_all = true");
    }

    if (unchecked_all == true) {
        del.style.visibility = "hidden";
        console.log("unchecked_all = true");
    }

    if (check_all_btn[0].checked == true) {
        for (i = 0; i < rows.length; i++) {
            rows[i].checked = true;
            rows[i].parentNode.parentNode.classList.add("checked");

        }
        del.style.visibility = "visible";
    }

    // check_all_btn[0].onclick = function() {
    //     if (document.getElementsByClassName("checked").length == document.getElementsByClassName("check_box")) {
    //         check_all_btn[0].checked = false;
    //         unchecked_all = true;
    //         for (i = 0; i < rows.length; i++) {
    //             rows[i].checked = false;
    //             rows[i].parentNode.parentNode.classList.remove("checked");

    //         }
    //     } else {
    //         check_all_btn[0].checked = true;
    //         unchecked_all = true;
    //         for (i = 0; i < rows.length; i++) {
    //             rows[i].checked = true;
    //             rows[i].parentNode.parentNode.classList.add("checked");

    //         }
    //     }
    // };
    //xoa
    del.onclick = function() {
        for (i = rows.length - 1; i >= 0; i--) {
            if (rows[i].checked == true) {
                rows[i].parentNode.parentNode.parentNode.removeChild(rows[i].parentNode.parentNode);
            }
        }
    };

}

// function deleted() {
//     console.log("clicked");
//     let rm = document.getElementsByClassName("remove_child");
//     for (i = 0; i < rm.length; i++) {
//         rm[i].parentNode.parentNode.parentNode.removeChild(rm[i].parentNode.parentNode);
//     }
// }
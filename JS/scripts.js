/* Connecting Database */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, child, get, set, update, remove} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBCznOPIBbhYZwlqpjQMvVESmtK2LGw_cw",
    authDomain: "summerreview-b84c2.firebaseapp.com",
    projectId: "summerreview-b84c2",
    storageBucket: "summerreview-b84c2.firebasestorage.app",
    messagingSenderId: "647677647968",
    appId: "1:647677647968:web:a4d0a2dd2b198702be7705"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();

let barCode = document.getElementById("barCode");
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let email = document.getElementById("email");
let eGroup = document.getElementById("eGroup");
let canCoding = document.getElementById("canCoding");

let addBtn = document.getElementById("addBtn");
let retBtn = document.getElementById("retBtn");
let updBtn = document.getElementById("updBtn");
let delBtn = document.getElementById("delBtn");
/* Manage data  */
function addData() {
    set(ref(db, 'UserSet/' + barCode.value), {
        BarCode: Number(barCode.value),
        NameOfUser: {FirstName: fName.value, LastName: lName.value},
        Email: email.value,
        EducationGroup: eGroup.value,               
        CanCoding: (canCoding.value == "yes")
    }).then(()=> {
        alert("Data Added Successfully");
    }).catch((error)=> {
        alert("Unsuccessful");
        console.log(error);
    })
}
function retrieveData() {
    const dbRef = ref(db);
    get(child(dbRef, 'UserSet/' + barCode.value)).then((snapshot)=> {
        if(snapshot.exists()){
            fName.value = snapshot.val().NameOfUser.FirstName;
            lName.value = snapshot.val().NameOfUser.LastName;
            email.value = snapshot.val().Email;
            eGroup.value = snapshot.val().EducationGroup;
            canCoding.value = (snapshot.val().console)? "yes" : "no";
        } else {
            alert("User Does Not Exist");
        }
    }) .catch((error)=> {
        alert("Unsuccessful");
        console.log(error);
    })
}
function updateData() {
    update(ref(db, 'UserSet/' + barCode.value), {
        BarCode: Number(barCode.value),
        NameOfUser: {FirstName: fName.value, LastName: lName.value},
        Email: email.value,
        EducationGroup: eGroup.value,               
        CanCoding: (canCoding.value == "yes")
    }).then(()=> {
        alert("Data Updated Successfully");
    }).catch((error)=> {
        alert("Unsuccessful");
        console.log(error);
    })
}
function deleteData() {
    remove(ref(db, 'UserSet/' + barCode.value)).then(()=> {
        alert("Data Deleted Successfully");
    }).catch((error)=> {
        alert("Unsuccessful");
        console.log(error);
    })
}
addBtn.addEventListener('click', addData);
retBtn.addEventListener('click', retrieveData);
updBtn.addEventListener('click', updateData);
delBtn.addEventListener('click', deleteData);


document.addEventListener("DOMContentLoaded", () => {
    /* Timer */
    const timerElement = document.getElementById("timer");

    function updateTimer() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        timerElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateTimer, 1000);
    /* Button to Main Page */
    const mainPageBtn = document.getElementById("mainPageBtn");
    mainPageBtn.addEventListener("click", () => {
        window.location.href = "home.html";
    });
});

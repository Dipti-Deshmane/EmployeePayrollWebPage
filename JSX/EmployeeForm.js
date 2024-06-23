document.getElementById('submitbtn').addEventListener("click", function () {

    let valid = true;

    const name = document.getElementById("fname").value;
    if (name.trim() === "") {
        document.querySelector(".name-Input-msg span").style.display = "block";
        valid=false;
    } else {
        document.querySelector(".name-Input-msg span").style.display = "none";
    }

   
    const profileImage = document.querySelector('input[name="proImg"]:checked');
    if (!profileImage) {
        document.querySelector(".profile-Input-msg span").style.display = "block";
        valid = false;
    } else {
        document.querySelector(".profile-Input-msg span").style.display = "none";
    }

    const gender = document.querySelector('input[name=fgender]:checked');
    if(!gender){
        document.querySelector(".gender-Input-msg span").style.display="block";
        valid=false;
    }else{
        document.querySelector(".gender-Input-msg span").style.display="none";
    }


    const department = document.querySelector('input[name=fdepartment]:checked');
    if(!department){
        document.querySelector(".depart-Input-msg span").style.display="block";
        valid=false;
    }else{
        document.querySelector(".depart-Input-msg span").style.display="none";
    }

    const salary = document.getElementById('fsalary').value;
    if(!salary){
        document.querySelector(".salary-Input-msg span").style.display="block";
        valid=false;
    }else{
      
        document.querySelector(".salary-Input-msg span").style.display="none";
    }

    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    if (day === "" || month === "" || year === ""){
        document.querySelector(".startdate-Input-msg span").style.display="block";
        valid=false;
    }else{
        document.querySelector(".startdate-Input-msg span").style.display="none";
    }

    const notes = document.getElementById('fnotes').value;
    if(!notes){
        document.querySelector(".notes-Input-msg span").style.display="block";
        valid=false;
    }else{
        document.querySelector(".notes-Input-msg span").style.display="none";
    }

    if(valid){
    console.log("Name: ", name);
    console.log("Profile Image: ", profileImage.value);
    console.log("Gender: ", gender.value);
    console.log("Departments: ", department.value);
    console.log("Salary: ", salary);
    console.log("Start Date: ", `${day} ${month} ${year}`);
    console.log("Notes: ", notes);
    }
  
});

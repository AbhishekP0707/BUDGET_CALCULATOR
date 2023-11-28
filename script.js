function registerr(){
    window.location='./register.html'
}
function loginn(){
    window.location='./index.html'
}

const loggedobj1=JSON.parse(localStorage.getItem('loggedobj'))
const username=loggedobj1.username;


function register(event){
    event.preventDefault();

    if(uname.value==''|| email.value=='' || passwd.value==''){
        alert("Enter All Fields")
    }
    else{
        if(uname.value in localStorage){
            alert("User Already exist")
            document.getElementById("myform").reset()
        }
        else{
            const userobj={
                username:uname.value,
                email:email.value,
                passwd:passwd.value,
               
            }
            localStorage.setItem(uname.value,JSON.stringify(userobj))
            alert("Register Successfully")
            window.location='./index.html'
            document.getElementById("myform").reset()
            
        }
    }
}





function login(event){
    event.preventDefault();
    
    if(uname.value==''|| pswd.value==''){
        alert("Fill up all fields")
    }
    else{
        if(uname.value in localStorage){
            const accobj=JSON.parse(localStorage.getItem(uname.value))
            console.log(accobj);
            if(pswd.value==accobj.passwd){
                localStorage.setItem('loggedobj',JSON.stringify(accobj))
                alert("Login Successfully!")
                window.location='./main.html'
                                        
            }
            else{
                alert("Incorrect Password :login Failed")
                document.getElementById("myform1").reset()
            }
        }
        else{
            alert("Username does not exist")
            document.getElementById("myform1").reset()
        }
    }
    
    }


function calculateBudget() {
    var income = parseFloat(document.getElementById('income').value);
    var expenses = parseFloat(document.getElementById('expenses').value);
    
    if (isNaN(income) || isNaN(expenses)) {
      document.getElementById('budgetResult').innerText = 'Please enter valid numbers for both income and expenses.';
      document.getElementById("myform4").reset()
    } else {
      var budget = income - expenses;
      if (budget >= 0) {
        document.getElementById('budgetResult').innerText = 'Your budget is: Rs.' + budget.toFixed(2);
        document.getElementById("myform4").reset()
      } else {
        document.getElementById('budgetResult').innerText = 'You are overspending! Your budget deficit is: Rs.' + (-budget).toFixed(2);
        document.getElementById("myform4").reset()
      }
    }
  }
  
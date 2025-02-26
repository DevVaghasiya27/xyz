function addDetails()
    { 
        var Fname=document.details.fname.value;
        var Lname=document.details.lname.value;
        var RollNO=document.details.rollno.value;
        // var Std=document.details.standard.value;

        var Name = Fname + " " + Lname;

        var name = document.getElementById('name');
        var rollno = document.getElementById('roll');
        // var std = document.getElementById('std');

        name.innerHTML+= Name;
        rollno.innerHTML+= RollNO;
        // std.innerHTML= Std;

        var Maths=document.result.maths.value;
        Maths = parseInt(Maths)
        var Gujarati=document.result.gujarati.value;
        Gujarati = parseInt(Gujarati)
        var Sanskrit=document.result.sanskrit.value; 
        Sanskrit = parseInt(Sanskrit)
        var English=document.result.english.value; 
        English = parseInt(English)
        var Science=document.result.science.value; 
        Science = parseInt(Science)
        var SS=document.result.ss.value; 
        SS = parseInt(SS)
        var Computer=document.result.computer.value;
        Computer = parseInt(Computer)

        let Total = (Maths + Gujarati + Sanskrit + English + Science + SS + Computer);
        let Percentage = ((Maths + Gujarati + Sanskrit + English + Science + SS + Computer)/7 ).toFixed(2);
        
        function getGrade(percentage) {
            switch (true) {
              case (percentage > 90):
                return "A1";
              case (percentage > 80):
                return "A2";
              case (percentage > 70):
                return "B1";
              case (percentage > 60):
                return "B2";
              case (percentage > 50):
                return "C1";
              case (percentage > 40):
                return "C2";
              case (percentage > 33):
                return "D";
              default:
                return "F";
            }
          }
          
        let Grade = getGrade(Percentage);

        var tr1 = document.getElementById('maths_m');
        var tr2 = document.getElementById('gujarati_m');
        var tr3 = document.getElementById('sanskrit_m');
        var tr4 = document.getElementById('english_m');   
        var tr5 = document.getElementById('science_m');
        var tr6 = document.getElementById('ss_m');
        var tr7 = document.getElementById('computer_m');
        var total = document.getElementById('total_m');
        var percentage = document.getElementById('percentage');
        var grade = document.getElementById('grade');
        
        
        tr1.innerHTML=Maths;
        tr2.innerHTML=Gujarati;
        tr3.innerHTML=Sanskrit;
        tr4.innerHTML=English;
        tr5.innerHTML=Science;
        tr6.innerHTML=SS;
        tr7.innerHTML=Computer;
        total.innerHTML=Total;
        percentage.innerHTML = Percentage+"%";
        grade.innerHTML = Grade;

        
        

    }

    function showHide(){

        let e = document.getElementById('harris');
                let f = document.getElementById('easy');

    if ( e.style.display != 'none' ) {
        e.style.display = 'none';
                f.style.display = '';
    }
    else {
        e.style.display = '';
                f.style.display = 'none';
    }

}

function calculate_simple() {
        
        let gender = document.querySelector('[name="gender_ez"]:checked').value;
        let weight = document.getElementById("weight_ez").value;
        let genderFactor = 1;
        let baserate;
        
        if (gender == "female") {
                genderFactor = 0.9;
        }
        baserate = 24*weight*genderFactor;
        
        document.getElementById('easy_output').innerHTML = 
                    baserate.toFixed(2) + " calories  per day.";
    }
        
function calculate_harrisbenedict() {
        
        let gender = document.querySelector('[name="gender_hb"]:checked').value;
        
        
        let weight = document.getElementById("weight_hb").value;
        let height = document.getElementById("height_hb").value;
        let age = document.getElementById("age_hb").value;
        
        let activity = document.getElementById("activity").value;
        
        let baserate;
        let weightedAvg;
        let simple;
        
        if (gender == "female") {
                baserate = 655.5 +  9.6 * weight + 1.8 * height - 4.7 * age;
        } else {
                baserate = 66.5 +  13.8 * weight + 5 * height - 6.8 * age;
        }
        
        
        simple = baserate * activity;
        
        document.getElementById('harris_b_output').innerHTML = 
                    simple.toFixed(2) + " calories  per day.";
    }   
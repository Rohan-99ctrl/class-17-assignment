// result function


/**
 * data send in LS
 * @param {*} key 
 * @param {*} arrayData 
 */

let dataSend = (key, arrayData) => {
    let data = JSON.stringify(arrayData);
    localStorage.setItem(key, data);
}

/**
 * data get from LS
 * @param {*} key 
 * @returns 
 */

let dataGet = (key) => {
    let getVal = localStorage.getItem(key);

    if(getVal){
        return JSON.parse(getVal);
    }else{
        return false;
    }
}




function MainFunc(){

    // gpa calculation function

    this.gpa = function(marks){

        let gpaCal;

        if(marks >= 0 && marks <= 32){
            gpaCal = 0.00;
        }else if(marks >= 33 && marks <= 39){
            gpaCal = 1.00;
        }else if(marks >= 40 && marks <= 49){
            gpaCal = 2.00;
        }else if(marks >= 50 && marks <= 59){
            gpaCal = 3.00;
        }else if(marks >= 60 && marks <= 69){
            gpaCal = 3.50;
        }else if(marks >= 70 && marks <= 79){
            gpaCal = 4.00;
        }else if(marks >= 80 && marks <= 100){
            gpaCal = 5.00;
        }

        return gpaCal;

    }

    // grade calculation function

    this.grade = function(grade){

        let gradeCal;

        if(grade >= 0 && grade <= 32){
            gradeCal = 'F';
        }else if(grade >= 33 && grade <= 39){
            gradeCal = 'D';
        }else if(grade >= 40 && grade <= 49){
            gradeCal = 'C';
        }else if(grade >= 50 && grade <= 59){
            gradeCal = 'B';
        }else if(grade >= 60 && grade <= 69){
            gradeCal = 'A-';
        }else if(grade >= 70 && grade <= 79){
            gradeCal = 'A';
        }else if(grade >= 80 && grade <= 100){
            gradeCal = 'A+';
        }

        return gradeCal;

    }


    // Total subject grade calculation function

    this.totalGrade = function(tGrade){

        let studentGrade;

        if(tGrade >= 0 && tGrade < 1){
            studentGrade = 'F';
        }else if(tGrade >= 1 && tGrade < 2){
            studentGrade = 'D';
        }else if(tGrade >= 2 && tGrade < 3){
            studentGrade = 'C';
        }else if(tGrade >= 3 && tGrade < 3.5){
            studentGrade = 'B';
        }else if(tGrade >= 3.5 && tGrade < 4){
            studentGrade = 'A-';
        }else if(tGrade >= 4 && tGrade < 5){
            studentGrade = 'A';
        }else if(tGrade == 5){
            studentGrade = 'A+';
        }

        return studentGrade;

    }

    // cgpa & final grade calculation function

    this.cgpa = function(bn, en, math, science, society, rel){

        let totalMarks = (bn + en + math + science + society + rel);
        let cgpa = (totalMarks / 6);
        let cgpaUpload = document.querySelector('.cgpa');

        if(bn == 0 || en == 0 || math == 0 || science == 0 || society == 0 || rel == 0){

            return {
                cgpaRes     : 'Failed',
                gradeRes    : 'F'
            };

        }else{

            return {
                cgpaRes     : `${cgpa.toFixed(2)}`,
                gradeRes    : `${this.totalGrade(cgpa.toFixed(2))}`
            };

        }

    }



}




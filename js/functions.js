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

function deleteStudent(index){
    
    let deleteStudentData = dataGet('resultApps');
    deleteStudentData.splice(index, 1);
    dataSend('resultApps', deleteStudentData);
    allStudentData();

}






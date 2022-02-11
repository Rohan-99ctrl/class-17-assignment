// result system

const submitForm = document.querySelector('#submitForm');
const rohanAlertModal = document.querySelector('#rohanAlertModal');
const rohanAlertContent = document.querySelector('#rohanAlertContent');
const close = document.querySelector('#close');
const confirm = document.querySelector('#confirm');

const uploadItem = document.querySelector('#uploadItem');


submitForm.addEventListener('submit', function(event){

    event.preventDefault();
    
    let sNam = submitForm.querySelector('input[placeholder="Name"]');
    let sClass = submitForm.querySelector('input[placeholder="Class"]');
    let sRoll = submitForm.querySelector('input[placeholder="Roll"]');
    let sReg = submitForm.querySelector('input[placeholder="Reg."]');
    let photo = submitForm.querySelector('input[placeholder="Photo"]');
    let sGender = submitForm.querySelector('input[type="radio"]:checked');
    let bangla = submitForm.querySelector('input[placeholder="Bangla"]');
    let english = submitForm.querySelector('input[placeholder="English"]');
    let math = submitForm.querySelector('input[placeholder="Math"]');
    let science = submitForm.querySelector('input[placeholder="Science"]');
    let society = submitForm.querySelector('input[placeholder="Society"]');
    let religion = submitForm.querySelector('input[placeholder="Religion"]');

    if(sNam.value == '' || sClass.value == '' || sRoll.value == '' || sReg.value == '' || photo.value == '' || sGender.value == '' || bangla.value == '' || english.value == '' || math.value == '' || science.value == '' || society.value == '' || religion.value == ''){

        rohanAlertModal.classList.add('active');
        rohanAlertContent.classList.add('active');

        setTimeout(function(){
            rohanAlertModal.classList.remove('active');
            rohanAlertContent.classList.remove('active');
        }, 3000);

    }else{

        let storageData = [];

        if(dataGet('resultApps')){
            storageData = dataGet('resultApps');
        }

        storageData.push({
            sNamVal        : sNam.value,
            sClassVal      : sClass.value,
            sRollVal       : sRoll.value,
            sRegVal        : sReg.value,
            photoVal       : photo.value,
            sGenderVal     : sGender.value,
            banglaVal      : bangla.value,
            englishVal     : english.value,
            mathVal        : math.value,
            scienceVal     : science.value,
            societyVal     : society.value,
            religionVal    : religion.value
        });
        
        dataSend('resultApps', storageData);


        sNam.value = '';
        sClass.value = '';
        sRoll.value = '';
        sReg.value = '';
        photo.value = ''
        sGender.value = '';
        bangla.value = '';
        english.value = '';
        math.value = '';
        science.value = '';
        society.value = '';
        religion.value = '';

        
        allStudentData();

    }


});

allStudentData();

function allStudentData(){

    let allStudentDataGet = dataGet('resultApps');
    let addingVal = '';

    allStudentDataGet.map((uploadItems, index) => {
        addingVal += `

            <tr>
                <td>${index + 1}</td>
                <td>${uploadItems.sNamVal}</td>
                <td>${uploadItems.sRollVal}</td>
                <td>${uploadItems.sRegVal}</td>
                <td>${uploadItems.sClassVal}</td>
                <td>${uploadItems.sGenderVal}</td>
                <td><img src="${uploadItems.photoVal}" alt="Profile"></td>
                <td>
                    <button class="btn btn-info"><i class="fas fa-solid fa-eye text-white"></i></button> 
                    <button onclick="deleteStudent(${index})" style="margin-left: 5px;" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
            </tr>

        `;
    })

    uploadItem.innerHTML = addingVal;

}


close.addEventListener('click', function(event){
    event.preventDefault();

    rohanAlertModal.classList.remove('active');
    rohanAlertContent.classList.remove('active');    
})

confirm.addEventListener('click', function(){
    rohanAlertModal.classList.remove('active');
    rohanAlertContent.classList.remove('active');    
})








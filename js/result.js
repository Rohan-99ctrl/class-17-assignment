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
                    <button type="button" data-bs-toggle="modal" data-bs-target="#myModal" onclick="getsingleData(${index})" class="btn btn-info modalShow"><i class="fas fa-solid fa-eye text-white"></i></button> 
                    <button onclick="deleteStudent(${index})" style="margin-left: 5px;" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
            </tr>

        `;
    })

    uploadItem.innerHTML = addingVal;

}

function deleteStudent(index){
    
    let deleteStudentData = dataGet('resultApps');
    deleteStudentData.splice(index, 1);
    dataSend('resultApps', deleteStudentData);
    allStudentData();

}


const studentResultData = document.querySelector('.studentResultData');

function getsingleData(index){

    let dataGetFromLs = dataGet('resultApps');
    let leader = new MainFunc();

    studentResultData.innerHTML = `
    
    
        <div class="detail">
            <div>
                <img src="${dataGetFromLs[index].photoVal}" alt="">
            </div>

            
            <div class="p-4">
                <h5 class="text-start mb-2">Name : ${dataGetFromLs[index].sNamVal}</h5>
                <h5 class="text-start mb-2">Roll : ${dataGetFromLs[index].sRollVal}</h5>
                <h5 class="text-start mb-2">Class : ${dataGetFromLs[index].sClassVal}</h5>
                <h5 class="text-start mb-2">Registration No. : ${dataGetFromLs[index].sRegVal}</h5>
                <h5 class="text-start">Gender : ${dataGetFromLs[index].sGenderVal}</h5>
            </div>
        </div>

        <hr>

        <table class="table table-striped table-bordered mt-4">
            <thead>
                <tr>
                    <th>Subjects</th>
                    <th>Marks</th>
                    <th>GPA</th>
                    <th>Grade</th>
                    <th>CGPA</th>
                    <th>Result</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Bangla</td>
                    <td>${dataGetFromLs[index].banglaVal}</td>
                    <td>${leader.gpa(dataGetFromLs[index].banglaVal)}</td>
                    <td>${leader.grade(dataGetFromLs[index].banglaVal)}</td>
                    <td class="cgpa" rowspan="6">${leader.cgpa(leader.gpa(dataGetFromLs[index].banglaVal), leader.gpa(dataGetFromLs[index].englishVal), leader.gpa(dataGetFromLs[index].mathVal), leader.gpa(dataGetFromLs[index].scienceVal), leader.gpa(dataGetFromLs[index].societyVal), leader.gpa(dataGetFromLs[index].religionVal)).cgpaRes}</td>
                    <td class="grade" rowspan="6">${leader.cgpa(leader.gpa(dataGetFromLs[index].banglaVal), leader.gpa(dataGetFromLs[index].englishVal), leader.gpa(dataGetFromLs[index].mathVal), leader.gpa(dataGetFromLs[index].scienceVal), leader.gpa(dataGetFromLs[index].societyVal), leader.gpa(dataGetFromLs[index].religionVal)).gradeRes}</td>
                </tr>

                <tr>
                    <td>English</td>
                    <td>${dataGetFromLs[index].englishVal}</td>
                    <td>${leader.gpa(dataGetFromLs[index].englishVal)}</td>
                    <td>${leader.grade(dataGetFromLs[index].englishVal)}</td>
                </tr>

                <tr>
                    <td>Math</td>
                    <td>${dataGetFromLs[index].mathVal}</td>
                    <td>${leader.gpa(dataGetFromLs[index].mathVal)}</td>
                    <td>${leader.grade(dataGetFromLs[index].mathVal)}</td>
                </tr>

                <tr>
                    <td>Science</td>
                    <td>${dataGetFromLs[index].scienceVal}</td>
                    <td>${leader.gpa(dataGetFromLs[index].scienceVal)}</td>
                    <td>${leader.grade(dataGetFromLs[index].scienceVal)}</td>
                </tr>

                <tr>
                    <td>Society</td>
                    <td>${dataGetFromLs[index].societyVal}</td>
                    <td>${leader.gpa(dataGetFromLs[index].societyVal)}</td>
                    <td>${leader.grade(dataGetFromLs[index].societyVal)}</td>
                </tr>

                <tr>
                    <td>Religion</td>
                    <td>${dataGetFromLs[index].religionVal}</td>
                    <td>${leader.gpa(dataGetFromLs[index].religionVal)}</td>
                    <td>${leader.grade(dataGetFromLs[index].religionVal)}</td>
                </tr>
            </tbody>
        </table>
    
    
    `;

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








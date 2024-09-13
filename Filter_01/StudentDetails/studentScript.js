const studentsArr = [
    { sroll: 1, sname: "Hem Narayan", sfaculty: "BCA", sadd: "Kathmandu" },
    { sroll: 2, sname: "Sita Kumari", sfaculty: "BCA", sadd: "Pokhara" },
    { sroll: 3, sname: "Ravi Sharma", sfaculty:"BIT", sadd: "Kathmandu" },
    { sroll: 4, sname: "Maya Thapa", sfaculty: "BHM", sadd: "Lalitpur" },
    { sroll: 5, sname: "Prakash Adhikari", sfaculty: "BSW", sadd: "Pokhara" },
    { sroll: 6, sname: "Anita Rai", sfaculty: "BHM", sadd: "Janakpur" },
    { sroll: 7, sname: "Bipin Kumar", sfaculty: "BIT", sadd: "Birgunj" },
    { sroll: 8, sname: "Gita Devi", sfaculty: "BCA", sadd: "Kathmandu" },
    { sroll: 9, sname: "Rajesh Kumar", sfaculty: "BSW", sadd: "Nepalgunj" },
    { sroll: 10, sname: "Nisha Joshi", sfaculty: "BBS", sadd: "Dhangadhi" },
    { sroll: 11, sname: "Amit Bhattarai", sfaculty: "BIT", sadd: "Itahari" },
    { sroll: 12, sname: "Sunita Sharma", sfaculty: "BIT", sadd: "Ilam" },
    { sroll: 13, sname: "Hari Prasad", sfaculty: "BCA", sadd: "Kathmandu" },
    { sroll: 14, sname: "Kavita Pandey", sfaculty: "BHM", sadd: "Biratnagar" },
    { sroll: 15, sname: "Pranisha Rai", sfaculty: "BSW", sadd: "Itahari" },
    { sroll: 16, sname: "Pooja Karki", sfaculty: "BBS", sadd: "Pokhara" },
    { sroll: 17, sname: "Ramesh Bhusal", sfaculty: "BHM", sadd: "Syangja" },
    { sroll: 18, sname: "Manju Rathi", sfaculty: "BSW", sadd: "Dang" },
    { sroll: 19, sname: "Subash Sharma", sfaculty: "BSW", sadd: "Kapilvastu" },
    { sroll: 20, sname: "Deepa Gurung", sfaculty: "BCA", sadd: "Chitwan" },
    { sroll: 21, sname: "Rita Bhandari", sfaculty: "BIT", sadd: "Nepalgunj" },
    { sroll: 22, sname: "Raj Kumar", sfaculty: "BBS", sadd: "Parbat" },
    { sroll: 23, sname: "Usha Rai", sfaculty: "BBS", sadd: "Kathmandu" },
    { sroll: 24, sname: "Pradeep Adhikari", sfaculty: "BIT", sadd: "Biratnagar" },
    { sroll: 25, sname: "Sarita Thakur", sfaculty: "BSW", sadd: "Nepalgunj" }
];

let tBody = document.querySelector('#myTable tbody');
let inputBox = document.querySelector('#filter-input');
let filterBtn = document.querySelector('#filter-btn');
let toggleBtn = document.querySelector('#toggle');

let mode = true; // if true light mode else dark mode

toggleBtn.addEventListener('click', (evt)=>{
    if(mode){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        toggleBtn.innerText = "Light Mode";
        mode = false;
    }

    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        toggleBtn.innerText = "Dark Mode";
        mode = true;
    }
});

function displayDetails(students) {
    tBody.innerHTML = '';     //clear existing rows
    students.forEach((std) => {
        const row = document.createElement("tr");
        row.innerHTML = `
    <td>${std.sroll}</td>
    <td>${std.sname}</td>
    <td>${std.sfaculty}</td>
    <td>${std.sadd}</td>
    `
        tBody.append(row);
    });
}

displayDetails(studentsArr);

filterBtn.addEventListener('click', () => {
    const filteredStd = studentsArr.filter((stdData) => {
        let inputClass = inputBox.value;
        return stdData.sfaculty === inputClass;
        // return stdData.sadd === inputClass;
    });
    displayDetails(filteredStd);
});


console.log(studentsArr);



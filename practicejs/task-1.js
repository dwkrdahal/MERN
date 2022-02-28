let all_stds = [];
let total = 500;

const addStudent = () => {
    let std = {};

    let name = prompt("Enter Student Name:");
    let score = Number(prompt("Enter Student Obt. marks:"));

    std = {
        name: name,
        score: score
    };

    all_stds.push(std);

    // 
    setTimeout(() => {
            showAll();
        }, 2000)
        // showAll();
}


const showAll = (calc = false) => {


    let std_html = '';
    all_stds.map((std, index) => {
        let css = "";
        if (std.score <= total * 0.32) {
            css = "background: red";
        }

        let per = "";
        if (calc) {
            per = std.score / total * 100;
        }

        std_html += "<tr style='" + css + "'>"
        std_html += "<td>" + (index + 1) + "</td>"
        std_html += "<td>" + std.name + "</td>"
        std_html += "<td>" + std.score + "</td>"
        std_html += "<td>" + per + "</td>"
        std_html += "</tr>"

        // std_html += "Name: " + std.name + ", Score: " + std.score + "<br>";
    })
    document.getElementById('table_content').innerHTML = std_html;
}

const calculate = () => {
    showAll(true);

}
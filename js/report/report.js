
fetch('http://127.0.0.1:5000/report/')
    .then(response => response.json())
    .then(report => {
        let rows = createReportTemplate(report);
        let table = $("#report tbody");
        table.append(rows);
    });


function createReportTemplate(report) {
    let template = $("#report-item-template")[0].innerHTML;
    return Mustache.render(template, report);
}

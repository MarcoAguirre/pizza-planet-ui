const monthNames = ['January', 'February','March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December',]

fetch('https://pizza-planet.herokuapp.com/report/')
    .then(response => response.json())
    .then(report => {
        report.month.month_number = monthNames[Number(report.month.month_number) - 1]
        let rows = createReportTemplate(report);
        let table = $("#report tbody");
        table.append(rows);
    });


function createReportTemplate(report) {
    let template = $("#report-item-template")[0].innerHTML;
    return Mustache.render(template, report);
}

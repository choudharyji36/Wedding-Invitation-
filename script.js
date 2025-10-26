document.getElementById("downloadBtn").addEventListener("click", function() {
    var element = document.getElementById("card");
    html2pdf().set({
        margin: 0.2,
        filename: ' ', // कोई नाम नहीं दिखेगा
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).from(element).save();
});
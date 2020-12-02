document.getElementById('link-1').addEventListener("click", function () {
    document.getElementById('part-1').style.display = 'block';
    document.getElementById('part-2').style.display = 'none';
});
document.getElementById('link-2').addEventListener("click", function () {
    document.getElementById('part-1').style.display = 'none';
    document.getElementById('part-2').style.display = 'block';
});
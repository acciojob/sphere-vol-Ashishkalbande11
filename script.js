function volume_sphere(e) {
    //Write your code here
    e.preventDefault();

    let r = parseFloat(document.getElementById('radius').value)

    if(isNaN(r) || r < 0){
        document.getElementById('volume').value = "NaN"
		return;
    }

    let vol = 4/3 * Math.PI * r * r * r;

    document.getElementById('volume').value = vol.toFixed(4)


  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

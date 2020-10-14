// Function to Scroll Document to the top
function returnTop(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

//Function to slide through images 
// var cover_crop_counter = 0; 
// var hexconnect_counter = 0; 
// var cover_crop_img_array = []; 
// var hexconnect_img_array = []; 

// cover_crop_img_array[0] = 'src/img/cover_crop_img1.PNG';
// cover_crop_img_array[1] = 'src/img/cover_crop_img2.PNG';
// cover_crop_img_array[2] = 'src/img/cover_crop_img3.PNG';

// hexconnect_img_array[0] = 'src/img/hexconnect_img1.PNG';
// hexconnect_img_array[1] = 'src/img/hexconnect_img2.PNG';
 
// function slideTo(name, i) {
//     if(name == "cover_crop"){
//         if(i < 0 && !((cover_crop_counter + i) < 0)){
//             cover_crop_counter = cover_crop_counter + i; 
//             document.cover_crop_img.src = cover_crop_img_array[cover_crop_counter]; 
//         }

//         if(i > 0 && cover_crop_counter + i != cover_crop_img_array.length){
//             cover_crop_counter = cover_crop_counter + i; 
//             document.cover_crop_img.src = cover_crop_img_array[cover_crop_counter]; 
//         }
//     }

//     if(name == "hexconnect"){
//         if(i < 0 && !((hexconnect_counter + i) < 0)){
//             hexconnect_counter = hexconnect_counter + i; 
//             document.hexconnect_img.src = hexconnect_img_array[hexconnect_counter]; 
//         }

//         if(i > 0 && hexconnect_counter + i != hexconnect_img_array.length){
//             hexconnect_counter = hexconnect_counter+ i; 
//             document.hexconnect_img.src = hexconnect_img_array[hexconnect_counter]; 
//         }
//     }
// }
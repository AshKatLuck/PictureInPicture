const videoElement=document.getElementById("video");
const button=document.getElementById("button");


//Prompt to select media stream , pass the video elements and play


async function selectMediaStream(){
    try{
        const mediaStream=await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata=()=>{
            videoElement.play();
        }
    }catch(error){
        console.log("whoops!error:", error);
    }
}

button.addEventListener('click',async ()=>{
    button.disabled=true;
    await videoElement.requestPictureInPicture();
    button.disabled=false;
})

//On load
selectMediaStream();
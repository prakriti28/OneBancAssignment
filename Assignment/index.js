let icons = document.getElementsByClassName("icons");
const setIconsPosition = () => {
    console.log("reset positions");
    let iconSize = 35;
    let pi = Math.PI;
    let initialAngle = 1/2 * pi/icons.length;
    let angleUpdate = pi/icons.length;
    let angles = [initialAngle];
    let parent = document.querySelector(".test");
    let parentWidth = parent.offsetWidth, parentHeight = parent.offsetHeight;
    // console.log("height", parentHeight)
    // console.log("width", parentWidth)
    let radius = (parentWidth - iconSize)/2;
    let A = (parentWidth - iconSize)/2;
    let B = (parentHeight - iconSize)/2.5;
    // console.log(radius)
    for(let i=1;i<icons.length;i++){
        if(i <= icons.length/2){
            angles.push(angles[i-1] + angleUpdate);
        }
        else{
            angles.push(angles[i-1] - angleUpdate);
        }
    }
    let positions = [];
    // console.log(angles)
    for(let i=0; i<icons.length; i++){
        let icon = icons[i];
        // icon.textContent = i;
        if(i%2){
            // bgcolor = "green";
        }
        // icon.style.border = '1px solid red';
        let x, y = parentHeight*(2/3)+B * Math.sin(angles[i]);
        if(i <= 4){
            x = parentWidth/2 + A * Math.cos(angles[i]);
        }
        else{
            x = parentWidth/2 - A * Math.cos(angles[i]);
        }
        let center = {
            x, y
        }
        let position = {
            x: center.x - iconSize/2,
            y: (center.y) - iconSize/2
        }
        if(i == 0){
            position.x -= 10;
        }
        else if(i == 8){
            position.x += 20;
        }
        positions.push(position)
        icon.style.bottom = `${position.y}px`;
        icon.style.left = `${position.x}px`;
        // console.log(`element ${i} center coords are (${position.x}, ${position.y})`)
        // console.log(`element ${i} coords are (${position.x}, ${position.y})`)
    }
}

const IconsAnimation = () => {
    let currentId = 9;
    const getUpdate = (id) => {
        let x = -5, y = 2;
        if(id < 4){
            x = 5;
        }
        return {x,y};
    }
    const update = (id, rev = -1) => {
        let upd = getUpdate(id);
        // icons[id].style.transform = `translate(${upd.x * -rev}px, ${upd.y * -rev}px)`;
    }
    const load = () => {
        let iconsAnimation = setInterval(()=>{
            // update next Id here
            // console.log("currentId", currentId)
            if(icons[currentId]){
                icons[currentId].classList.remove("active-icon");
                // update(currentId, 1);
                // icons[currentId].style.transform = 'translate(5px, 5px)'
            }
            currentId = (currentId + 8)%9;
            if(icons[currentId]){
                icons[currentId].classList.add("active-icon");
                // update(currentId, 1);
            }
        }, 2000);
    }
    return {
        load
    }
}

setIconsPosition();
const animation = IconsAnimation();
animation.load();

let resizeTimeOut;

window.onresize = ()=>{
    clearTimeout(resizeTimeOut);
    resizeTimeOut = setTimeout(setIconsPosition, 500);
}
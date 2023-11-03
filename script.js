const project = document.querySelector('.project');
const building = document.querySelector('.building');

let isBuildingExpanded = false;

building.addEventListener('click', () => {
    isBuildingExpanded = !isBuildingExpanded;
    if (isBuildingExpanded) {
        building.style.transform = 'translate(-50%, -50%) rotateY(180deg)';
    } else {
        building.style.transform = 'translate(-50%, -50%) rotateY(0deg)';
    }
});
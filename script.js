// --- Kebab Menu Logic ---
const kebabBtn = document.getElementById('kebab-btn');
const kebabDropdown = document.getElementById('kebab-dropdown');

kebabBtn.addEventListener('click', () => {
    kebabDropdown.classList.toggle('hidden');
});

// Close dropdown if clicked outside
document.addEventListener('click', (e) => {
    if (!kebabBtn.contains(e.target) && !kebabDropdown.contains(e.target)) {
        kebabDropdown.classList.add('hidden');
    }
});

// --- Theme Toggle ---
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// --- Modal Logic ---
function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
    kebabDropdown.classList.add('hidden'); // close menu if open
    
    // Start slider if members modal is opened
    if(modalId === 'members-modal') {
        startSlider();
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    if(modalId === 'members-modal') {
        stopSlider();
    }
}

// --- Dynamic Info Popup Logic ---
const infoTitle = document.getElementById('info-title');
const infoImg = document.getElementById('info-img');
const infoDesc = document.getElementById('info-desc');

// This function changes the popup content and opens it
function showInfoPopup(title, desc, imgSrc) {
    infoTitle.innerText = title;
    infoDesc.innerText = desc;
    infoImg.src = imgSrc;
    openModal('info-modal');
}

// --- 6 Stances Data & Logic ---
const stancesData = [
    { name: "Ready Stance", desc: "Stand with your feet apart parallel to the shoulder with both toes pointing forward.   The knees should be straight, the waist and the body facing forward.  Hands are on waist level and the hands should hold the sticks on both sides.  The ready stance is commonly used when standing at ease during training or tournaments.", img: "images/RS.jpg" },
    { name: "Right Foot Forward Stance", desc: " Stand with your feet forming a 45 degrees angle.    Heels should be close to each other, knees should be straight, the waist and body facing forward.  Shoulders are dropped to the side and both hands are at waist level.  The Attention Stance is commonly used in preparation for courtesy or “bowing” at commencement of sparring.", img: "images/RFFS.jpg" },
    { name: "Right Foot Oblique Stance", desc: "Starting with the ready stance, move one foot forward until the knee and the toe are in line to each other.  Both toes are pointing in front, the waist and the body is facing forward.   The body should not be too low or the lead foot too extended otherwise it will be hard to maneuver.  Distribute the weight or center of gravity to both legs.  Forward stances can be right foot lead, which is the Right Foot Forward Stance or it can be left foot lead which is Left Foot Forward Stance. Forward Stance are commonly used with frontal striking or blocking techniques.", img: "images/RFOS.jpg" },
    { name: "Straddle Stance", desc: " Starting with the ready stance, move one foot forward 45 degrees away from the body until the knee and the toe are in line to each other.  Move on the same direction as the lead foot (e.g.  for right foot lead, move 45 degrees forward to the right). Both toes are pointing in front, the waist and the body is facing forward.  The body should not be too low or the lead foot too extended otherwise it will be hard to maneuver.  Distribute the weight or center of gravity to both legs.  Oblique stances can be right foot lead, which is the Right Foot Oblique Stance or it can be left foot lead which is Left Foot Oblique Stance.  Oblique Stances are commonly used for forward blocking and evasion techniques.", img: "images/SS.jpg" },
    { name: "Left Side Stance", desc: "Starting with the ready stance, move one foot about two feet (2’) to the left or the right direction until both lower legs are almost perpendicular to the ground.   Both toes are pointing in front, the waist and the body is facing forward.  The body should not be too low or extended otherwise it will be hard to maneuver.  Distribute the weight or center of gravity to both legs.  Straddle stance are also called Horseback Riding Stance since it mimics position when riding on a horse back.  Straddle stances are commonly used for blocking the strikes to the side of the body.", img: "images/LSS.jpg" },
    { name: "Right Foot Back Stance", desc: " Starting with the ready stance, move one foot backward 45 degrees away from the body. The heels of the foot should form an imaginary “L” shape while the legs are in a straddle position.  The body should not be too low or extended otherwise it will be hard to maneuver.  Distribute the weight or center of gravity to both legs.  Back stances can be right foot lead, which is the Right Foot Back Stance or it can be left foot lead which is Left Foot Back Stance.  Back stances are used for blocking and backward evasion techniques.", img: "images/RFBS.jpg" }
];

const stancesGrid = document.getElementById('stances-grid');
stancesData.forEach((stance, index) => {
    const btn = document.createElement('button');
    btn.className = 'clay-btn';
    btn.innerText = `${index + 1}. ${stance.name}`;
    btn.onclick = () => showInfoPopup(stance.name, stance.desc, stance.img);
    stancesGrid.appendChild(btn);
});

// --- 5 Blocks Data & Logic ---
const blocksData = [
    { name: "Right Temple Block", desc: "An inside block where you angle your stick upward and across your body to protect the left side of your head from a forehand strike.", img: "images/RTB.png" },
    { name: "Left Temple Block", desc: "An outside block where you position your stick to the right to protect the right side of your head from a backhand strike.", img: "images/LTB.png" },
    { name: "Right Knee Block", desc: "A low, downward sweeping block where you drop the tip of your stick to protect your left leg and lower body.", img: "images/RKB.png" },
    { name: "Left Knee Block", desc: "A low, downward block to the outside, dropping the stick tip to protect your right leg and lower body.", img: "images/LKB.png" },
    { name: "Stomach Thrust Block", desc: "A sweeping horizontal block across your midsection used to catch and redirect a straight thrust away from your belly.", img: "images/STB.png" },
    { name: "Crown Block", desc: "A strong rising block (often called a roof block) where you push the stick horizontally above your head to stop a direct downward strike.", img: "images/C.png" }
];

const blocksGrid = document.getElementById('blocks-grid');
blocksData.forEach((block, index) => {
    const btn = document.createElement('button');
    btn.className = 'clay-btn';
    btn.innerText = `${index + 1}. ${block.name}`;
    btn.onclick = () => showInfoPopup(block.name, block.desc, block.img);
    blocksGrid.appendChild(btn);
});

// --- 12 Strikes Data & Logic ---
const strikesData = [
    { id: 1, name: "Left Temple Strike", desc: "A forehand strike targeted at the opponent's left temple or collarbone.", img: "images/1.jpg" },
    { id: 2, name: "Right Temple Strike", desc: "A backhand strike targeted at the opponent's right temple or collarbone.", img: "images/2.jpg" },
    { id: 3, name: "Left Torso Strike", desc: "A forehand strike targeting the left side of the torso or ribs.", img: "images/3.jpg" },
    { id: 4, name: "Right Torso Strike", desc: "A backhand strike targeting the right side of the torso or ribs.", img: "images/4.jpg" },
    { id: 5, name: "Thrust to Stomach", desc: "A straight thrusting motion aimed at the midsection/stomach.", img: "images/5.jpg" },
    { id: 6, name: "Left Chest Thrust", desc: "A thrust aimed at the left chest area.", img: "images/6.jpg" },
    { id: 7, name: "Right Chest Thrust", desc: "A thrust aimed at the right chest area.", img: "images/7.jpg" },
    { id: 8, name: "Left Leg Strike", desc: "A low forehand strike aimed at the opponent's left knee or shin.", img: "images/8.jpg" },
    { id: 9, name: "Right Leg Strike", desc: "A low backhand strike aimed at the opponent's right knee or shin.", img: "images/9.jpg" },
    { id: 10, name: "Left Eye Thrust", desc: "A forehand thrust targeting the left eye.", img: "images/10.jpg" },
    { id: 11, name: "Right Eye Thrust", desc: "A backhand thrust targeting the right eye.", img: "images/11.jpg" },
    { id: 12, name: "Crown Strike", desc: "A straight downward strike aimed at the top of the opponent's head.", img: "images/12.jpg" }
];

const strikesGrid = document.getElementById('strikes-grid');

strikesData.forEach(strike => {
    const btn = document.createElement('button');
    btn.className = 'clay-btn';
    btn.innerText = `${strike.id}. ${strike.name}`;
    
    btn.onclick = () => {
        const title = `Strike ${strike.id}: ${strike.name}`;
        // UPDATED: Now it pulls the image from the list above instead of a placeholder!
        showInfoPopup(title, strike.desc, strike.img);
    };
    strikesGrid.appendChild(btn);
});

// --- Members Auto/Manual Slider Logic ---
const teamMembers = [
    { name: "Amiel Kedrick Gordo", role: "Lead Developer", img: "images/Amiel.jpg" },
    { name: "John Felix Diocton", role: "Back End Web Developer", img: "images/John.jpg" },
    { name: "Lyka De Guzman", role: "Front End Web Developer", img: "images/Lyka.jpg" },
    { name: "Elah Jade Casica", role: "Researcher", img: "images/Elah.jpg" },
    { name: "Ronissa Dela Cruz", role: "UI/UX Designer", img: "images/Ronissa.jpg" },
    { name: "Rowel Pacaña", role: "Class Professor", img: "images/Prof.jpg" }
];

let currentSlide = 0;
let slideInterval;

const memberName = document.getElementById('member-name');
const memberRole = document.getElementById('member-role');
const memberImg = document.getElementById('member-img');
const nextBtn = document.getElementById('next-slide-btn');

function updateSlide() {
    const member = teamMembers[currentSlide];
    memberName.innerText = member.name;
    memberRole.innerText = member.role;
    memberImg.src = member.img;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % teamMembers.length;
    updateSlide();
}

function startSlider() {
    updateSlide();
    slideInterval = setInterval(nextSlide, 3000); // Auto slide every 3 seconds
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Manual Next Button Override
nextBtn.addEventListener('click', () => {
    stopSlider(); // Stop current timer
    nextSlide();  // Move to next
    slideInterval = setInterval(nextSlide, 3000); // Restart timer
});
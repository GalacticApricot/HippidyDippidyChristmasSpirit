function xorEncryptDecrypt(input, key) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) ^ key);
    }
    return output;
}

function fromBase64Url(str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) {
        str += '=';
    }
    return atob(str);
}


function startParticles(e) {
    pJSDom[0] && pJSDom[0].pJS.fn.particlesEmpty(),
    particlesJS("particle1", {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: !0,
                    value_area: 3e3
                }
            },
            color: {
                value: mainColor
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: .5,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !0,
                anim: {
                    enable: !0,
                    speed: 5,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !1
            },
            move: {
                enable: !0,
                speed: 14,
                direction: "top",
                random: !0,
                straight: !1
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !1
                },
                onclick: {
                    enable: !1
                }
            }
        },
        retina_detect: !0
    }),
    particlesJS("particle2", {
        particles: {
            number: {
                value: 25,
                density: {
                    enable: !0,
                    value_area: 3e3
                }
            },
            color: {
                value: secondaryColor
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: .5,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !0,
                anim: {
                    enable: !0,
                    speed: 5,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !1
            },
            move: {
                enable: !0,
                speed: 14,
                direction: "top",
                random: !0,
                straight: !1
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !1
                },
                onclick: {
                    enable: !1
                }
            }
        },
        retina_detect: !0
    }),
    particlesJS("particle3", {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: !0,
                    value_area: 3e3
                }
            },
            color: {
                value: tertiaryColor
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 1,
                random: !1
            },
            size: {
                value: 2,
                random: !0,
                anim: {
                    enable: !0,
                    speed: 5,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !1
            },
            move: {
                enable: !0,
                speed: 14,
                direction: "top",
                random: !0,
                straight: !1
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !1
                },
                onclick: {
                    enable: !1
                }
            }
        },
        retina_detect: !0
    });
    let t = document.querySelector("#particle1 canvas");
    t.style.transition = "opacity 0.3s",
    t.style.opacity = 1;
    let a = document.querySelector("#particle2 canvas");
    a.style.transition = "opacity 0.3s",
    a.style.opacity = 1;
    let n = document.querySelector("#particle3 canvas");
    n.style.transition = "opacity 0.3s",
    n.style.opacity = 1,
    setTimeout(stopParticles, e)
}
function stopParticles() {
    let e = document.querySelector("#particle1 canvas");
    e.style.transition = "opacity 0.5s",
    e.style.opacity = 0;
    let t = document.querySelector("#particle2 canvas");
    t.style.transition = "opacity 0.5s",
    t.style.opacity = 0;
    let a = document.querySelector("#particle3 canvas");
    a.style.transition = "opacity 0.5s",
    a.style.opacity = 0,
    setTimeout( () => {
        pJSDom[0].pJS.fn.particlesEmpty()
    }
    , 1e3)
}
function ripple() {
    let e = document.getElementById("ripple");
    e.opacity = 1,
    e.classList.add("animate"),
    setTimeout( () => {
        document.getElementById("ripple").classList.remove("animate")
    }
    , 1e3)
}
function toggleIcons() {
    let e = document.getElementById("icons");
    e.style.opacity = 1 - e.style.opacity
}
document.addEventListener("dragstart", function(e) {
    e.preventDefault()
});
let isMouseDown = !1
  , isOpen = !1
  , startX = 0
  , mainColor = "#00000000"
  , secondaryColor = "#00000000"
  , tertiaryColor = "#00000000"
  , tWidth = 0
  , rWidth = 0
  , colorFilter = 0;
updateState(0);
let openAud, rewardAud;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const key = urlParams.get('k')
const code = urlParams.get('c')
const decodedEncrypted = fromBase64Url(code);
const decrypted = xorEncryptDecrypt(decodedEncrypted, key);
const e = {"name":decrypted,"iconUrl":"steam.png","itemType":"charm","rarity":"legendary"};
switch (rewardAud = new Audio("./audio/Reward.wav"),
e.rarity) {
case "uncommon":
    openAud = new Audio("./audio/OpenEnd_Uncommon.wav"),
    document.getElementById("icons").style.background = "url('/media/sim/uncommon.png') repeat",
    document.getElementById("card").src = "/media/sim/uncommoncard.png",
    rWidth = 168,
    document.querySelector("#rarity img").src = "/media/uncommon.png",
    colorFilter = "invert(30%) sepia(18%) saturate(1272%) hue-rotate(92deg) brightness(91%) contrast(86%)",
    mainColor = "#48c17b",
    secondaryColor = "#335268",
    tertiaryColor = "#dfedff";
    break;
case "rare":
    openAud = new Audio("./audio/OpenEnd_Rare.wav"),
    document.getElementById("icons").style.background = "url('/media/sim/rare.png') repeat",
    document.getElementById("card").src = "/media/sim/rarecard.png",
    rWidth = 106,
    document.querySelector("#rarity img").src = "/media/rare.png",
    colorFilter = "invert(48%) sepia(74%) saturate(436%) hue-rotate(159deg) brightness(77%) contrast(99%)",
    mainColor = "#2d85bb",
    secondaryColor = "#2f3e6d",
    tertiaryColor = "#c0d3f1";
    break;
case "epic":
    openAud = new Audio("./audio/OpenEnd_Epic.wav"),
    document.getElementById("icons").style.background = "url('/media/sim/epic.png') repeat",
    document.getElementById("card").src = "/media/sim/epiccard.png",
    rWidth = 100,
    document.querySelector("#rarity img").src = "/media/epic.png",
    colorFilter = "invert(71%) sepia(43%) saturate(2037%) hue-rotate(259deg) brightness(89%) contrast(102%)",
    mainColor = "#8f32a6",
    secondaryColor = "#3a3775",
    tertiaryColor = "#fce3ff";
    break;
case "legendary":
    openAud = new Audio("./audio/OpenEnd_Legendary.wav"),
    rewardAud = new Audio("./audio/Reward_Legendary.wav"),
    document.getElementById("icons").style.background = "url('media/sim/legendary.png') repeat",
    document.getElementById("card").src = "media/sim/legendarycard.png",
    rWidth = 160,
    document.querySelector("#rarity img").src = "media/legendary.png",
    colorFilter = "invert(46%) sepia(59%) saturate(3122%) hue-rotate(13deg) brightness(103%) contrast(102%)",
    mainColor = "#e48d00",
    secondaryColor = "#5d455c",
    tertiaryColor = "#eaec59"
}
switch (document.querySelector("#type a").innerHTML = e.itemType.toUpperCase(),
e.itemType) {
case "weapon skin":
    document.querySelector("#type img").src = "https://ubiservices.cdn.ubi.com/0d2ae42d-4c27-4cb7-af6c-2099062302bb/DeployerAssetsJune2023/7426c100_29b1_4a6a_a0be_fdd30fe48fe6.svg",
    tWidth = 181;
    break;
case "headgear":
    document.querySelector("#type img").src = "https://ubiservices.cdn.ubi.com/0d2ae42d-4c27-4cb7-af6c-2099062302bb/DeployerAssetsJune2023/733a1c12_19b4_40e4_80eb_4426c8e4f6c0.svg",
    tWidth = 152;
    break;
case "uniform":
    document.querySelector("#type img").src = "https://ubiservices.cdn.ubi.com/0d2ae42d-4c27-4cb7-af6c-2099062302bb/DeployerAssetsJune2023/66ab2a12_35cb_457d_bb08_fb4fa42e0b93.svg",
    tWidth = 139;
    break;
case "attachment skin":
    document.querySelector("#type img").src = "https://ubiservices.cdn.ubi.com/0d2ae42d-4c27-4cb7-af6c-2099062302bb/DeployerAssetsJune2023/30a5b4a4_6783_4300_aae0_a0d551c55296.svg",
    tWidth = 222;
    break;
case "charm":
    document.querySelector("#type img").src = "https://ubiservices.cdn.ubi.com/0d2ae42d-4c27-4cb7-af6c-2099062302bb/DeployerAssetsJune2023/73f4c31a_80da_465f_93ec_21af00e8de38.svg",
    tWidth = 125;
    break;
case "main gadget":
    document.querySelector("#type a").innerHTML = "GADGET SKIN",
    document.querySelector("#type img").src = "https://ubiservices.cdn.ubi.com/0d2ae42d-4c27-4cb7-af6c-2099062302bb/DeployerAssetsJune2023/7426c100_29b1_4a6a_a0be_fdd30fe48fe6.svg",
    tWidth = 173
}
var t = (window.innerWidth - (rWidth + tWidth)) / 2;
document.getElementById("rarity").style.left = t + tWidth - 1 + "px",
document.getElementById("type").style.left = t + "px",
document.getElementById("rarity").style.width = rWidth + "px",
document.getElementById("type").style.width = tWidth + "px",
document.getElementById("bar1").style.background = "linear-gradient(" + mainColor + ", transparent)",
document.getElementById("bar2").style.background = "linear-gradient(" + mainColor + ", " + mainColor + "55 80%, transparent)",
document.getElementById("bar3").style.background = "linear-gradient(" + mainColor + ", transparent)",
document.getElementById("line1").style.filter = colorFilter,
document.getElementById("line2").style.filter = colorFilter,
document.getElementById("line3").style.filter = colorFilter,
document.getElementById("line4").style.filter = colorFilter,
document.getElementById("line5").style.filter = colorFilter,
document.getElementById("curtain1").style.background = mainColor,
document.getElementById("curtain2").style.background = mainColor,
document.getElementById("curtain3").style.background = mainColor,
document.getElementById("curtain4").style.background = mainColor,
document.getElementById("item").src = e.iconUrl,
document.getElementById("name").innerHTML = e.name,
document.querySelector("#rarity a").innerHTML = e.rarity.toUpperCase(),
document.getElementById("rarity").style.backgroundColor = mainColor,
document.getElementById("ripple").style.background = "radial-gradient(circle, " + mainColor + "19 20%, " + mainColor + "4d, " + mainColor + "00 50%) no-repeat",
document.getElementById("gradient").style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%, " + mainColor + "55 100%)",
document.getElementById("packgrad").style.background = "radial-gradient(farthest-corner at 50% 100%, " + mainColor + " 0%, rgba(0, 0, 0, 0) 70%)"
let zipperSound = new Audio("./audio/Open_LP.wav");
function fadeOutZipper() {
    for (let e = 1; e <= 100; e++)
        setTimeout( () => {
            zipperSound.volume = 1 - e / 100
        }
        , e);
    setTimeout( () => {
        zipperSound.pause()
    }
    , 100)
}
zipperSound.addEventListener("timeupdate", function() {
    this.currentTime > this.duration - .44 && (this.currentTime = 0,
    this.play())
});
let lastMove = 0;
function handleStart(e) {
    startX = e.touches ? e.touches[0].clientX : e.clientX,
    isMouseDown = !0
}
function handleEnd(e) {
    isMouseDown = !1,
    document.getElementById("top").style.transition = "all 0.2s",
    document.getElementById("glow").style.transition = "all 0.2s",
    document.getElementById("gradient").style.transition = "all 0.2s",
    document.getElementById("packgrad").style.transition = "all 0.2s",
    updateState(startX),
    setTimeout( () => {
        document.getElementById("top").style.transition = "none"
    }
    , 200),
    setTimeout( () => {
        document.getElementById("glow").style.transition = "none"
    }
    , 200),
    setTimeout( () => {
        document.getElementById("gradient").style.transition = "none"
    }
    , 200),
    setTimeout( () => {
        document.getElementById("packgrad").style.transition = "none"
    }
    , 200),
    setTimeout( () => {
        fadeOutZipper()
    }
    , 200)
}
function handleMove(e) {
    if (lastMove = Date.now(),
    isMouseDown)
        updateState(e.touches ? e.touches[0].clientX : e.clientX),
        zipperSound.paused && !zipDone && (zipperSound.volume = 1,
        zipperSound.play())
}
setInterval( () => {
    Date.now() - lastMove > 50 && isMouseDown && fadeOutZipper()
}
, 100),
document.addEventListener("mousedown", handleStart),
document.addEventListener("touchstart", handleStart),
document.addEventListener("mouseup", handleEnd),
document.addEventListener("touchend", handleEnd),
document.addEventListener("mousemove", handleMove),
document.addEventListener("touchmove", handleMove),
window.addEventListener("resize", () => {
    let e = (window.innerWidth - (rWidth + tWidth)) / 2
      , t = document.getElementById("rarity")
      , a = document.getElementById("type");
    t.style.transition = "none",
    a.style.transition = "none",
    t.style.left = e + tWidth - 1 + "px",
    a.style.left = e + "px",
    t.style.width = rWidth + "px",
    a.style.width = tWidth + "px",
    setTimeout( () => {
        t.style.transition = "all 0.2s",
        a.style.transition = "all 0.2s"
    }
    , 200)
}
);
let zipDone = !1;
function updateState(e) {
    if (isOpen)
        return;
    let t = document.getElementById("glow")
      , a = 3 * e - 3 * startX;
    a <= 0 && (a = 0,
    startX = e);
    let n = document.getElementById("top")
      , r = a / window.innerWidth;
    n.style.transform = "translate(-50%, -50%) rotate(" + 18 * r + "deg)",
    t.style.transform = "translate(" + (-176 + 290 * r) + "px, -208px) scale(" + (1 + 1.7 * r) + ")",
    t.style.opacity = .6 + .5 * r;
    let i = mainColor + Math.round(76.5 + 76.5 * r).toString(16).padStart(2, "0");
    if (t.style.background = "radial-gradient(" + tertiaryColor + "e6 " + r / 2 + "%," + i + " 30%, #00000000 70%)",
    document.getElementById("gradient").style.opacity = r,
    document.getElementById("packgrad").style.opacity = r,
    a > window.innerWidth) {
        zipDone = !0,
        fadeOutZipper(),
        openAud.play();
        let l = new Audio("./audio/AAR_Reward.wav");
        setTimeout( () => {
            l.play()
        }
        , 660),
        setTimeout( () => {
            for (let e = 1; e < 101; e++)
                setTimeout( () => {
                    l.volume = 1 - e / 100
                }
                , e)
        }
        , 1450);
        let s = document.getElementById("card");
        s.style.opacity = 1,
        isOpen = !0,
        a = window.innerWidth,
        t.style.opacity = 0,
        document.getElementById("packgrad").style.opacity = 0,
        n.style.transition = "all 0.7s",
        n.style.transform = "translate(180%, -50%) rotate(97deg)",
        setTimeout( () => {
            n.style.opacity = 0
        }
        , 400);
        let o = document.getElementById("bottom");
        o.style.transition = "all 0.7s",
        o.style.transform = "translate(-45%, 80%) rotate(13deg)",
        setTimeout( () => {
            o.style.opacity = 0
        }
        , 400),
        startParticles(2e3),
        s.style.transform = "translate(-50%, -100%) rotate(-4deg) scale(1.1)",
        setTimeout( () => {
            s.style.transform = "translate(-50%, -50%) rotate(0deg)"
        }
        , 400)
    }
    a <= 0 && (t.style.opacity = 0)
}
function revealItem() {
    rewardAud.play();
    let e = document.getElementById("card");
    e.style.transform = "translate(-50%, -50%) scale(1.2, 1.2) rotate(-4deg)",
    setTimeout( () => {
        e.style.opacity = 0
    }
    , 100),
    setTimeout( () => {
        startParticles(2500)
    }
    , 200),
    setTimeout( () => {
        openCurtain()
    }
    , 300),
    setTimeout( () => {
        continueReveal(),
        e.style.pointerEvents = "none"
    }
    , 500)
}
function openCurtain() {
    let e = document.getElementById("curtain1")
      , t = document.getElementById("curtain2");
    e.style.opacity = .2,
    t.style.opacity = .2,
    setTimeout( () => {
        e.style.left = "-1110px",
        t.style.left = "2113px"
    }
    , 300),
    setTimeout( () => {
        openCurtain2()
    }
    , 100)
}
function openCurtain2() {
    let e = document.getElementById("curtain3")
      , t = document.getElementById("curtain4");
    e.style.opacity = .2,
    t.style.opacity = .2,
    setTimeout( () => {
        e.style.left = "-1110px",
        t.style.left = "2113px"
    }
    , 500)
}
function continueReveal() {
    setTimeout( () => {
        let e = document.getElementById("curtain1")
          , t = document.getElementById("curtain2")
          , a = document.getElementById("curtain3")
          , n = document.getElementById("curtain4");
        e.style.opacity = 0,
        t.style.opacity = 0,
        a.style.opacity = 0,
        n.style.opacity = 0
    }
    , 1200),
    toggleIcons(),
    ripple(),
    document.getElementById("bar1").style.opacity = .5,
    document.getElementById("bar2").style.opacity = .5,
    document.getElementById("bar3").style.opacity = .5,
    document.getElementById("line1").style.opacity = .6,
    document.getElementById("line2").style.opacity = .5,
    document.getElementById("line3").style.opacity = .4,
    document.getElementById("line4").style.opacity = .7,
    document.getElementById("line5").style.opacity = .5;
    let e = document.getElementById("item");
    e.style.transform = "translate(-50%, -50%) scale(1.2, 1.2)",
    e.style.opacity = 1,
    setTimeout( () => {
        e.style.transform = "translate(-50%, -50%) scale(1, 1)"
    }
    , 800),
    setTimeout( () => {
        finalReveal()
    }
    , 1e3)
}
function finalReveal() {
    document.getElementById("buttons").style.visibility = 'visible';
    ripple();
    let e = document.getElementById("name");
    e.style.opacity = 1,
    e.style.top = "72%";
    let t = document.getElementById("type");
    t.style.opacity = 1,
    t.style.top = "82%";
    let a = document.getElementById("rarity");
    a.style.opacity = 1,
    a.style.top = "82%"
}
document.addEventListener("keydown", function(e) {
    if (13 == e.keyCode) {
        for (let t = 0; t < 100; t++)
            setTimeout( () => {
                updateState(window.innerWidth / 100 * t)
            }
            , 10 * t);
        setTimeout( () => {
            revealItem()
        }
        , 1600)
    }
});

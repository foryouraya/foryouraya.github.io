let nama = null
Swal.fire({
    confirmButtonText:'Hi',
    showConfirmButton:true,
    background:'#f7f7f76c',
    html:`<div class="w-full h-fit flex items-center justify-center flex-col">
            <video loop autoplay src="./assets/img/hello.webp" class="w-[150px] h-[150px]" alt="">
            </video>
            <h1 class="text-[20px]">Halo sayang</h1>
    </div>`
}).then((result)=>{
    if(result.isConfirmed){
        lagiapa()
    }
})


function BadEnding(){
    Swal.fire({
        cancelButtonText:'Bye',
        cancelButtonColor:"red",
        showConfirmButton:false,
        showCancelButton:true,
        background:'#f7f7f76c',
        html:`<div class="w-full px-3 h-fit py-3 gap-4 flex items-center justify-center flex-col">
                <img src="./assets/img/hangseed_mochi_agadrwsaauzmovi.webp" class="w-[150px] h-[150px]" alt="">
                </img>
                <h1 class="text-[20px]">ASU KAMU JAHAT YANG</h1>
                
        </div>`
    })

    document.getElementById('x-sd').innerHTML = `
        <div class="w-full h-[100vh] flex-col flex text-[40px] items-center justify-center">
            <img src="./assets/img/a1118747589_by_jelians_1_agadngeaauafivu.png" class="w-[150px] h-[150px]" alt="">
                </img>
            <h1 class="px-5 text-center">FUCK YOU BUAT KAMU YANG 🔥 🔥</h1>
        </div>
        `
}


function lagiapa(){
    Swal.fire({
        confirmButtonText:'Kirim',
        showConfirmButton:true,
        background:'#f7f7f76c',
        html:`<div class="w-full px-3 h-fit py-3 gap-4 flex items-center justify-center flex-col">
                <video loop autoplay src="./assets/img/line192407384c61_by_moe_sticker_bot_agaduqwaasbx2fc_AgADuQwAAsbX.webm" class="w-[150px] h-[150px]" alt="">
                </video>
                <h1 class="text-[20px]">Kamu Lagi apa sayang?</h1>
                <input id="lagiapa" type="text" class=" px-2 w-full h-[40px] bg-white/[0.4] ring-2 ring-blue-400 rounded-md"/>
        </div>`
    }).then(({ isConfirmed })=>{
        if(isConfirmed){
            Getlagiapa()
            bolehNanyaGak()
        }
    })
}


let tolakCounter = 0;
const tolakArray = [
    ['Ulang','Iya','./assets/img/hangseed_mochi_agadowcaakrqofi.webp','APAAAAAA BERANI NOLAK YA KMU?'],
    ['Ulang 2x','Gak','./assets/img/hangseed_mochi_agad0ggaarx9ovi.webp','APALAH NOLAK LAGI!!!! ULANGG!!!'],
    ['Ulang 3x','Sinih klo berani','./assets/img/hangseed_mochi_agadpgcaagamqvi.webp','SEKALI LAGI KU BACOK KAMU!'],
    [null,'Bye','./assets/img/animhuyniabyblazedzn_agadqweaallicbo.webp','BYEEE AKU BT'],
]


function tolak(n,f){
    const d = tolakArray[n]

    Swal.fire({
        confirmButtonText:d[0],
        cancelButtonText:d[1],
        cancelButtonColor:"red",
        showConfirmButton:d[0] ? true : false,
        showCancelButton:d[1] ? true : false,
        background:'#f7f7f76c',
        html:`<div class="w-full px-3 h-fit py-3 gap-4 flex items-center justify-center flex-col">
                <img src="${d[2]}" class="w-[150px] h-[150px]" alt="">
                </img>
                <h1 class="text-[20px]">${d[3]}</h1>
                
        </div>`
    }).then(({ isConfirmed , isDenied , isDismissed})=>{
        if(isConfirmed){
           f()
        }else if(isDismissed){
            BadEnding()
        }

    })
}

function bolehNanyaGak(){
    Swal.fire({
        confirmButtonText:'Boleh',
        cancelButtonText:'Enggak',
        cancelButtonColor:"red",
        showConfirmButton:true,
        showCancelButton:true,
        background:'#f7f7f76c',
        html:`<div class="w-full px-3 h-fit py-3 gap-4 flex items-center justify-center flex-col">
                <video loop autoplay src="./assets/img/line192407384c61_by_moe_sticker_bot_agaduqwaasbx2fc_AgADuQwAAsbX.webm" class="w-[150px] h-[150px]" alt="">
                </video>
                <h1 class="text-[20px]">Sayang Aku mau nanya boleh gak?</h1>
                
        </div>`
    }).then(( {isDismissed, isConfirmed , isDenied} )=>{
        
        
        if(isConfirmed){
            tolakCounter = 0
            kmuSayangAkuGak()
        }else if(isDismissed){
            tolak(tolakCounter,bolehNanyaGak)
            if(tolakCounter !== 3) {
                tolakCounter++
            }
        }

    })
}




function kmuSayangAkuGak(){
    Swal.fire({
        confirmButtonText:'Sayang dong',
        cancelButtonText:'Enggak lah',
        cancelButtonColor:"red",
        showConfirmButton:true,
        showCancelButton:true,
        background:'#f7f7f76c',
        html:`<div class="w-full px-3 h-fit py-3 gap-4 flex items-center justify-center flex-col">
                <video loop autoplay src="./assets/img/line192407384c61_by_moe_sticker_bot_agadzawaamfc2fc_AgADzAwAAmFC.webm" class="w-[150px] h-[150px]" alt="">
                </video>
                <h1 class="text-[20px]">Kamu sayang aku gak?</h1>
        </div>`
    }).then(( {isDismissed, isConfirmed , isDenied} )=>{
        
        
        if(isConfirmed){
            berapaPersenCintanya()
        }else if(isDismissed){
            Swal.fire({
                confirmButtonText:'Iyah',
                cancelButtonText:'Sayang dong',
                cancelButtonColor:"red",
                showConfirmButton:true,
                showCancelButton:true,
                background:'#f7f7f76c',
                html:`<div class="w-full px-3 h-fit py-3 gap-4 flex items-center justify-center flex-col">
                        <img  src="./assets/img/hangseed_mochi_agadrwsaauzmovi.webp" class="w-[150px] h-[150px]" alt="">
                        </img>
                        <h1 class="text-[20px]">Kamu beneran gak sayang?</h1>
                </div>`
            }).then(( {isDismissed, isConfirmed , isDenied} )=>{
        
                
                if(isConfirmed){
                    berapaPersenCintanya()
                }else if(isDismissed){
                    kmuSayangAkuGak()
                }
        
            })
        }

    })
}




function berapaPersenCintanya(){
    Swal.fire({
        confirmButtonText:'Kirim',
        showConfirmButton:true,
        background:'#f7f7f76c',
        html:`<div class="w-full px-3 h-fit py-3 gap-4 flex items-center justify-center flex-col">
                <div style="user-select: none;pointer-events: none;" id="lovepersen" class="z-[99] absolute top-[-55px] font-bold text-[90px] event-none select-none">
                </div>
                <video loop autoplay src="./assets/img/line192407384c61_by_moe_sticker_bot_agad5xoaaqs02vc_AgAD5xoAAqs0.webm" class="w-[150px] h-[150px]" alt="">
                </video>
                <h1 class="text-[20px]">Berapa persen cintanya yang?</h1>
                <input onchange="onpersencinta(this)" type="range" min="0" max="100"/>
        </div>`
    }).then(({ isConfirmed })=>{
        if(isConfirmed){
            
            if(window.persencintaku < 70){
                Swal.fire({
                    confirmButtonText:'Ulangi',
                    cancelButtonText:'Karna gak sayang wlee',
                    cancelButtonColor:"red",
                    showConfirmButton:true,
                    showCancelButton:true,
                    background:'#f7f7f76c',
                    html:`<div class="w-full px-3 h-fit py-3 gap-4 flex items-center justify-center flex-col">
                            <img  src="./assets/img/hangseed_mochi_agadrwsaauzmovi.webp" class="w-[150px] h-[150px]" alt="">
                            </img>
                            <h1 class="text-[20px]">Kenapa sedikit banget :( sayang ?</h1>
                    </div>`
                }).then(({ isConfirmed , isDismissed })=>{

                    if(isConfirmed){
                        berapaPersenCintanya()
                    }else if(isDismissed){
                        BadEnding()
                    }

                })
            }else{
                kmuBisaGakJanganGangbangTerus()
            }
        }
    })
}



function kmuBisaGakJanganGangbangTerus(){
    Swal.fire({
        confirmButtonText:'Bisa sayang',
        cancelButtonText:'Gak bisa',
        cancelButtonColor:"red",
        showConfirmButton:true,
        showCancelButton:true,
        background:'#f7f7f76c',
        html:`<div class="w-full px-3 h-fit py-3 gap-4 flex items-center justify-center flex-col">
                <img  src="./assets/img/hangseed_mochi_agadrwsaauzmovi.webp" class="w-[150px] h-[150px]" alt="">
                </img>
                <h1 class="text-[20px]">Sayang bisa gak jangan gangbang terus ?</h1>
        </div>`
    }).then(( {isDismissed, isConfirmed , isDenied} )=>{
        if(isConfirmed){
            Swal.fire({
                confirmButtonText:'Iya janji sayang',
                showConfirmButton:true,
                background:'#f7f7f76c',
                html:`<div class="w-full px-3 h-fit py-3 gap-4 flex items-center justify-center flex-col">
                        <img  src="./assets/img/hangseed_mochi_agadrwsaauzmovi.webp" class="w-[150px] h-[150px]" alt="">
                        </img>
                        <h1 class="text-[20px]">Janji ya sayang ?</h1>
                </div>`
            }).then(({ isConfirmed })=>{
                document.getElementById('x-sd').innerHTML = `
                <div class="w-full h-[100vh] flex-col flex text-[40px] items-center justify-center">
                    <video loop autoplay src="./assets/img/line192407384c61_by_moe_sticker_bot_agadzawaamfc2fc_AgADzAwAAmFC.webm" class="w-[150px] h-[150px]" alt="">
                    </video>
                    <h1 class="text-center">I L❤️VE Y❤️U SAYANG</h1>
                </div>
                `
            })
        }else if(isDismissed){
            BadEnding()
        }
    })
}





function onpersencinta(event){
    window.persencintaku = event.value
    document.getElementById('lovepersen').style.color = event.value < 70 ? "red" : "white"
    document.getElementById('lovepersen').textContent = event.value

    if(Number(event.value) === 100){
        console.log("100 yey")
        document.getElementById('firework1').style.background = 'rgb(107 114 128 / 0.4)'
        document.getElementById('firework').innerHTML = `
                <div style="user-select: none;pointer-events: none;" id="lovepersen" class="z-[99] absolute top-[41px]
                left-[65px] font-bold text-[90px] event-none select-none">
                ${event.value}
                </div>
                <img src="./assets/img/miabunny_agaddwuaaj-vzao.webp" class="w-[280px] h-[250px]" alt="">
                </img>
                <h1 style="color:white;font-weight:bold;font-size:20px">YEAYYYY KAMU JADI BULOL</h1>
            
        `
        setTimeout(() => {
            document.getElementById('firework1').style.background = 'transparent'
            document.getElementById('firework').innerHTML = ''
        }, 4000);
        
    }
}





function Getlagiapa(){
    window.lagiapa = document.getElementById("lagiapa").value
}
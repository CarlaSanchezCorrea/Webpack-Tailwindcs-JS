import'./style.css';

let content = document.getElementById('root');

let templateBannerHome =
`
    <div class="flex items-center justify-around">  
        <div>  
            <p id="banner-home-template" class="font-black text-6xl tracking-wider">  
                no es solo 
                    <br> 
                Comida, Es una 
                    <br> 
                Experiencia.
            </p> 
            <div class="pt-10"> 
                <button class="rounded-full bg-red-700 px-10 py-2" style="color: #EBE6E6;">
                    Ver Menu   
                </button> 
                <button class="rounded-full bg-gray-50 px-10 py-2 ml-3">    
                    Carta Online    
                </button> 
            </div> 
        </div> 
        <div>
            <img src="../src/imagenes/plato-principal_home.png" width="400" id="plato-principal-home" class="" alt="Plato Principal Fuxshion"/>
        </div>
    </div>
    <section class="flex items-center justify-around">
        <div id="carousel-items-top-10" class="flex flex-row justify-self-start">
        </div>
    </section>
`;

content.innerHTML = templateBannerHome;




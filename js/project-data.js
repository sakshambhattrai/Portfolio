/* 
    PROJECT DATA FILE
    Updated: Glider X-Ray slider now defaults to 80% (showing more internal view).
*/

const projectData = [
    {
        id: 'glider',
        title: "Dragonfly: High Altitude Glider",
        subtitle: "UBCO Aerospace | Rocket Deployed",
        image: "https://placehold.co/800x600/1e293b/475569?text=Dragonfly+Glider+Mechanism", 
        tags: ["SolidWorks", "Mechanism Design", "Force Analysis"],
        shortDesc: "Foldable wing deployment mechanism for a Mach 1.7 rocket-launched glider.",
        fullDesc: `
            <p class="mb-4 text-slate-700 dark:text-slate-300">
                Designed the critical wing deployment mechanism for "Dragonfly," a high-altitude glider launching aboard a competition rocket to around 33,000 ft (10km) with speeds reaching <strong>Mach 1.7</strong>. This project will be competing at Launch Canada 2026 competition.
            </p>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2">Engineering Challenge</h3>
            <p class="mb-4 text-slate-700 dark:text-slate-300">
                The glider body must fit inside the rocket fuselage during ascent and deploy wings autonomously at apogee. The mechanism must withstand extreme G-forces during launch and aerodynamic loads during the transition to gliding flight. The mechanism must also be manufactured with tigh tolerances to avoid flutter.
            </p>
            <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>Mechanism Design:</strong> Engineered a spring-loaded locking hinge mechanism.</li>
                <li><strong>Constraints:</strong> limited to the  thin profile of body and wing aswell as rocket payload bay volume constraints.</li>
                <li><strong>Analysis:</strong> Conducted static force analysis and material selection.</li>
            </ul>
        `,
        techSpecs: [
            { label: "Deployment", value: "Spring-Loaded Hinge" },
            { label: "Max Speed", value: "Mach 1.7" },
            { label: "Altitude", value: "10 km (Target)" },
            { label: "Material", value: "PLA / Carbon fibre / Nylon filament" },
            { label: "Software", value: "SolidWorks" }
        ],
        // --- UPDATED MEDIA SECTION ---
        media: `
        <div id="glider-video-container" class="relative w-full aspect-video bg-slate-900 rounded-lg overflow-hidden border border-slate-700 shadow-2xl group select-none">
            
            <!-- Video 1: External View (Bottom Layer) -->
            <video id="vid-external" class="absolute inset-0 w-full h-full object-cover brightness-90" loop muted playsinline>
                <source src="assets/glider-outside.mp4" type="video/mp4">
            </video>

            <!-- Video 2: Internal View (Top Layer - Clipped) -->
            <!-- UPDATED: Changed width from 50% to 80% -->
            <div id="vid-clipper" class="absolute top-0 left-0 bottom-0 overflow-hidden z-10" style="width: 80%;">
                <video id="vid-internal" class="absolute top-0 left-0 max-w-none h-full object-cover brightness-90" loop muted playsinline>
                    <source src="assets/glider-internal.mp4" type="video/mp4">
                </video>
            </div>

            <!-- Slider Handle -->
            <!-- UPDATED: Changed left from 50% to 80% -->
            <div id="slider-handle" class="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize shadow-[0_0_15px_rgba(0,0,0,0.8)] z-20 hover:bg-sky-400 transition-colors" style="left: 80%;">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-slate-100">
                    <svg class="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l-3 3 3 3m8-6l3 3-3 3"></path></svg>
                </div>
            </div>

            <!-- Labels -->
            <div class="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 pointer-events-none z-0">External</div>
            <div class="absolute top-4 right-4 bg-sky-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-sky-400/30 pointer-events-none z-0">CAD Internal</div>

            <!-- Controls -->
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center gap-4">
                <button id="play-btn" class="text-white hover:text-sky-400 focus:outline-none">
                    <svg id="icon-play" class="w-8 h-8 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    <svg id="icon-pause" class="w-8 h-8 drop-shadow-md hidden" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                </button>
                <input type="range" id="seek-bar" class="flex-1 h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-sky-500 [&::-webkit-slider-thumb]:rounded-full" value="0" min="0" max="100" step="0.1">
            </div>
        </div>
        ` 
    },
    {
        id: 'falcon',
        title: "Millennium Falcon CAD",
        subtitle: "SolidWorks Advanced Modeling",
        image: "assets/falcon.png",
        tags: ["SolidWorks Visualize", "Surfacing", "Top 10 Award"],
        shortDesc: "Placed Top 10 in a competition of 80+ teams. Detailed SolidWorks assembly.",
        fullDesc: `
            <p class="mb-4 text-slate-700 dark:text-slate-300">
                A high-fidelity true scale CAD replication of the Millennium Falcon.
            </p>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2">Advanced Features Used</h3>
            <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>Complex Geometry:</strong> Utilized Loft, Sweep, and Boundary Boss/Base.</li>
                <li><strong>Detailing:</strong> Applied Patterning and Mirroring for mechanical greebles.</li>
                <li><strong>Assembly:</strong> Managed complex mating conditions (Concentric, LimitAngle).</li>
            </ul>
        `,
        techSpecs: [
            { label: "Solids", value: "Boss-Extrude, Loft" },
            { label: "Render Engine", value: "SolidWorks Visualize" },
            { label: "Ranking", value: "Top 10 / 80+" }
        ],
        media: `
        <div class="sketchfab-embed-wrapper w-full aspect-video rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
            <iframe title="Millennium Falcon" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/95a1684fb6824e36bf2373a481265fba/embed?ui_theme=dark" class="w-full h-full"></iframe>
        </div>
        `
    },
    {
        id: 'fire-mon',
        title: "IoT Fire Risk Monitor",
        subtitle: "Electronics & Programming",
        image: "assets/Firepost.png",
        tags: ["C++", "MySQL", "Electronics"],
        shortDesc: "Bollard-style forest monitor with real-time sensor dashboard.",
        fullDesc: `
            <p class="mb-4 text-slate-700 dark:text-slate-300">
                Co-led the design and prototyping of a bollard-style forest fire risk monitoring station.
            </p>
            <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>Hardware:</strong> Microcontroller with Temp, Humidity, CO2 sensors.</li>
                <li><strong>Firmware (C++):</strong> Efficient sensor polling code.</li>
                <li><strong>Data:</strong> MySQL database and live dashboard.</li>
            </ul>
        `,
        techSpecs: [
            { label: "Language", value: "C++ / SQL / CSS / HTML / Javascript / Node-Red" },
            { label: "Sensors", value: "Temp, Hum, CO2" },
            { label: "Database", value: "MySQL" }
        ],
        media: `<iframe class="w-full aspect-video rounded-lg border border-slate-700 shadow-2xl" src="https://www.youtube.com/embed/WrvNdWKVAFg?si=mON7P6zQ_IC07C2S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        id: 'eco-box',
        title: "Sustainable Takeout Container",
        subtitle: "Sustainability & Materials",
        image: "assets/takeout-container-lid.jpg",
        tags: ["OpenLCA", "Prototyping", "Bagasse"],
        shortDesc: "Biodegradable solution using Bagasse and Agar bioplastics.",
        fullDesc: `
            <p class="mb-4 text-slate-700 dark:text-slate-300">
                Designed a fully biodegradable container combining a structural base with a bioplastic sealing layer.
            </p>
            <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>Bagasse:</strong> Sugarcane fiber base for strength.</li>
                <li><strong>Agar:</strong> Seaweed bioplastic for sealing.</li>
                <li><strong>LCA:</strong> Analyzed using OpenLCA.</li>
            </ul>
        `,
        techSpecs: [
            { label: "Base Mat.", value: "Bagasse" },
            { label: "Lid Mat.", value: "Agar" },
            { label: "Analysis", value: "OpenLCA" }
        ],
        media: `<img src="https://placehold.co/800x600/1e293b/475569?text=OpenLCA+Analysis+Graph" class="w-full rounded-lg border border-slate-700 shadow-2xl" alt="LCA Graph">`
    }
];
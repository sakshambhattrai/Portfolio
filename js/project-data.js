/* 
    PROJECT DATA FILE
    Source: Portfolio PDF
*/

const projectData = [
    {
        id: 'glider',
        title: "Dragon Lady: Supersonic Glider",
        subtitle: "Launch Canada 2026 | Mechanism Design",
        image: "assets/mechanism.png", 
        tags: ["SolidWorks", "Mechanism Design", "Carbon Fiber", "Nylon", "DFM"],
        shortDesc: "Fail-safe wing deployment mechanism for a Mach 1.7 rocket-launched glider.",
        fullDesc: `
            <p class="mb-4 text-slate-700 dark:text-slate-300">
                <strong>Project Overview:</strong> Dragon Lady is a high-performance 3-meter flying wing developed for the Launch Canada 2026 competition. Designed to launch stowed inside a rocket payload bay, survive a supersonic ascent, and deploy autonomously at apogee.
            </p>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2">Engineering & Mechanisms</h3>
            <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>Purely Mechanical Actuation:</strong> Designed a fail-safe system using high-tension springs and cam locks, eliminating reliance on batteries or software in high-vibration environments.</li>
                <li><strong>Supersonic Load Management:</strong> Engineered locking mechanisms to withstand <strong>Mach 1.7</strong> aerodynamic forces and vibrations at 10km altitude.</li>
                <li><strong>Compact Integration:</strong> Solved geometric constraints to compress wings securely against the fuselage, deploying only once the payload bay opens.</li>
            </ul>
        `,
        techSpecs: [
            { label: "Est. Max Speed", value: "Mach 1.7" },
            { label: "Target Altitude", value: "33,000 ft (10 km)" },
            { label: "Materials", value: "Carbon Fiber, 3D Printed Nylon, Alluminum" },
            { label: "Actuation", value: "Passive Spring/Cam Lock" }
        ],
        // Main Media (Video Comparison)
        media: `
        <div id="glider-video-container" class="relative w-full aspect-video bg-slate-900 rounded-lg overflow-hidden border border-slate-700 shadow-2xl group select-none">
            <video id="vid-external" class="absolute inset-0 w-full h-full object-cover brightness-90" loop muted playsinline>
                <source src="assets/glider-outside.mp4" type="video/mp4">
            </video>
            <div id="vid-clipper" class="absolute top-0 left-0 bottom-0 overflow-hidden z-10" style="width: 80%;">
                <video id="vid-internal" class="absolute top-0 left-0 max-w-none h-full object-cover brightness-90" loop muted playsinline>
                    <source src="assets/glider-internal.mp4" type="video/mp4">
                </video>
            </div>
            <div id="slider-handle" class="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize shadow-[0_0_15px_rgba(0,0,0,0.8)] z-20 hover:bg-sky-400 transition-colors" style="left: 80%;">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-slate-100">
                    <svg class="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l-3 3 3 3m8-6l3 3-3 3"></path></svg>
                </div>
            </div>
            <div class="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 pointer-events-none z-0">Render</div>
            <div class="absolute top-4 right-4 bg-sky-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-sky-400/30 pointer-events-none z-0">Mechanism Scan</div>
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center gap-4">
                <button id="play-btn" class="text-white hover:text-sky-400 focus:outline-none">
                    <svg id="icon-play" class="w-8 h-8 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    <svg id="icon-pause" class="w-8 h-8 drop-shadow-md hidden" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                </button>
                <input type="range" id="seek-bar" class="flex-1 h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-sky-500 [&::-webkit-slider-thumb]:rounded-full" value="0" min="0" max="100" step="0.1">
            </div>
        </div>
        `,
        // 4 Images below video
        gallery: [
            { url: "assets/glider-1.jpg", caption: "3d printed prototype (side-view)" },
            { url: "assets/glider-2.jpg", caption: "3d printed prototype (front-view)" }  
       ]
    },
    {
        id: 'picar',
        title: "Autonomous PiCarV",
        subtitle: "Machine Learning & Computer Vision",
        image: "assets/picar.jpg",
        tags: ["Python", "TensorFlow", "OpenCV", "AI"],
        shortDesc: "End-to-end autonomous driving system bridging the 'sim-to-real' gap.",
        fullDesc: `
            <p class="mb-4 text-slate-700 dark:text-slate-300">
                Developed a self-driving system for a Raspberry Pi vehicle capable of track following. The project focused on training a Convolutional Neural Network (CNN) on <strong>100,000 synthetic images</strong> generated in Unity and deploying it to physical edge hardware.
            </p>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2">Technical Architecture</h3>
            <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>Deep Learning:</strong> Hybrid CNN with 1.6 million parameters. 4 convolutional layers for spatial features (edges/curves) and dense layers for steering prediction.</li>
                <li><strong>Data Pipeline:</strong> Processed 100k images using OpenCV for HSV masking and normalization to remove environmental noise.</li>
                <li><strong>Deployment:</strong> Optimized model to under 20MB for efficient inference on Raspberry Pi using Google Colab (T4 GPU). Achieved 98-100% success on simulator tracks.</li>
            </ul>
        `,
        techSpecs: [
            { label: "Model", value: "CNN (1.6 Million Parameters)" },
            { label: "Dataset", value: "100k Synthetic Images" },
            { label: "Hardware", value: "Raspberry Pi" },
            { label: "Python Frameworks", value: "Keras, TensorFlow" }
        ],
        media: null, // Will use gallery as main media
        // 7 Images
        gallery: [
            { url: "assets/picar-1.jpg", caption: "The physical PiCarV driving autonomously" },
            { url: "assets/picar-2.jpg", caption: "The physical PiCarV driving autonomously" },
            { url: "assets/picar-3.png", caption: "Unity simulator environment for training." },
            { url: "assets/picar-4.png", caption: "Collected datapoints." },
            { url: "assets/picar-5.png", caption: "Training loss reduction graph." },
            { url: "assets/picar-6.png", caption: "Model architecture." },
            { url: "assets/picar-7.png", caption: "OpenCV HSV masking process." }
        ]
    },
    {
        id: 'train',
        title: "Machined Train Car",
        subtitle: "Design For Manufacturing (DFM)",
        image: "assets/train.png",
        tags: ["Machining", "SolidWorks"],
        shortDesc: "Fully manual machining project of a desktop-scale aluminum locomotive.",
        fullDesc: `
            <p class="mb-4 text-slate-700 dark:text-slate-300">
                A hands-on manufacturing project taking a design from CAD to a finished aluminum assembly. The focus was on <strong>Design for Manufacturability (DFM)</strong>, ensuring components were designed to be made, not just modeled.
            </p>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2">Key Manufacturing Processes</h3>
            <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>Shop Skills:</strong> Applied milling, turning, threading, and waterjet cutting in a professional shop environment.</li>
                <li><strong>Precision:</strong> Executed thermal interference fits and adhered to tight tolerances.</li>
                <li><strong>Outcome:</strong> Demonstrated readiness for rapid prototyping in high-performance engineering environments.</li>
            </ul>
        `,
        techSpecs: [
            { label: "Material", value: "Aluminum" },
            { label: "Processes", value: "Milling, Turning, Waterjet" },
            { label: "Advanced", value: "Thermal Interference Fit" }
        ],
        media: null,
        // 5 Images
        gallery: [
            { url: "assets/train-1.png", caption: "Final assembled aluminum locomotive." },
            { url: "assets/train-2.jpg", caption: "Some Parts of the assembly" },
            { url: "assets/train-3.jpg", caption: "Shop Lathe" },
            { url: "assets/train-4.jpg", caption: "Shop Waterjet" },
            { url: "assets/train-5.jpg", caption: "Shop Mill" }
        ]
    },
    {
        id: 'fire-mon',
        title: "Sylvan Fire-Post",
        subtitle: "IoT & Full Stack Development",
        image: "assets/firepost.png",
        tags: ["C++", "MySQL", "Arduino", "Electronics"],
        shortDesc: "Fire-resistant monitoring post for early wildfire detection in the Okanagan.",
        fullDesc: `
            <p class="mb-4 text-slate-700 dark:text-slate-300">
                A group project designing a device that combines continuous environmental monitoring (CO₂, humidity, temperature, soil moisture) with onboard firefighting equipment storage.
            </p>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2">Engineering Contributions</h3>
            <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>Full Stack:</strong> Developed Arduino firmware, a backend MySQL database, and a web application for real-time fire risk calculation.</li>
                <li><strong>Prototyping:</strong> Built a physical prototype with 3D-printed tool holders and integrated sensor mounting.</li>
            </ul>
        `,
        techSpecs: [
            { label: "Stack", value: "C++, MySQL, Web" },
            { label: "Sensors", value: "CO₂, Humidity, Soil Moisture" },
            { label: "Role", value: "Electrical & Programming" }
        ],
        media: `<iframe class="w-full aspect-video rounded-lg border border-slate-700 shadow-2xl" src="https://www.youtube.com/embed/WrvNdWKVAFg?si=mON7P6zQ_IC07C2S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`, 
        // 7 Images
        gallery: [
            { url: "assets/firepost-1.png", caption: "Physical prototype." },
            { url: "assets/firepost-2.png", caption: "Web dashboard showing real-time risk." },
            { url: "assets/firepost-3.jpg", caption: "Arduino wiring and sensor array." },
            { url: "assets/firepost-4.png", caption: "Cad design" },
            { url: "assets/firepost-5.png", caption: "Cad Design" },
            { url: "assets/firepost-6.png", caption: "Node-Red" },
            { url: "assets/firepost-7.png", caption: "MySQL database" }
        ]
    },
    {
        id: 'falcon',
        title: "Millennium Falcon",
        subtitle: "Advanced SolidWorks Modeling",
        image: "assets/falcon.png",
        tags: ["SolidWorks", "Surfacing", "Sheet Metal"],
        shortDesc: "Independently modeled with 150+ unique parts. Top 10 finish in design competition.",
        fullDesc: `
            <p class="mb-4 text-slate-700 dark:text-slate-300">
                Part of a 6-person team designing Star Wars ships. I independently modeled the Millennium Falcon using advanced surfacing and assembly techniques.
            </p>
            <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>Solid Creation Features:</strong> Boss-Extrude, Revolve, Sweep, Loft, Dome.</li>
                <li><strong>Solid Removal Features:</strong> Cut-Extrude, Cut-Revolve, Cut-Sweep, Cut-Loft, Hole, Body-Delete/Keep.</li>
                <li><strong>Sheet Metal:</strong> Base-Flange, Edge-Flange, Hem, Closed Corner, Break-Corner, Sheet Metal Gusset, Vent, Flat-Pattern.</li>
                <li><strong>Sketch Features:</strong> CirPattern, Mirror, Sketch, 3DSketch.</li>
                <li><strong>Manipulative Features:</strong> Fillet, Chamfer, Scale, Combine, Body-Move/Copy, Thread.</li>
                <li><strong>Assembly Mates:</strong> Coincident, Concentric, Parallel, Tangent, Distance Lock, Width, LimitAngle.</li>
                <li><strong>Other:</strong> 150+ unique parts. This is not an exhaustive list of features used; I probably missed many others that were used in this CAD project.
</li>
            </ul>
        `,
        techSpecs: [
            { label: "Part Count", value: "150+ Unique Parts" },
            { label: "Features", value: "Surfacing, Sheet Metal" },
            { label: "Platform", value: "SolidWorks" }
        ],
        // Keep Sketchfab as main media
        media: `
        <div class="sketchfab-embed-wrapper w-full aspect-video rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
            <iframe title="Millennium Falcon" frameborder="0" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/95a1684fb6824e36bf2373a481265fba/embed?ui_theme=dark" class="w-full h-full"></iframe>
        </div>
        `,
        // 2 Images below
        gallery: [
            { url: "assets/falcon-1.png", caption: "Complete render of ship with realistic textures" },
            { url: "assets/falcon-2.jpg", caption: "Full project with all members' ships" },
            { url: "assets/falcon-3.jpg", caption: "Complete render of ship without any textures" }
        ]
    },
    {
        id: 'eco-box',
        title: "Sustainable Container",
        subtitle: "Materials Science & Sustainability",
        image: "assets/container.jpg",
        tags: ["OpenLCA", "Bioplastics", "Prototyping"],
        shortDesc: "Eco-friendly takeout container using Bagasse and Agar-based bioplastics.",
        fullDesc: `
            <p class="mb-4 text-slate-700 dark:text-slate-300">
                Designed and prototyped a takeout container to replace conventional plastics without compromising functionality.
            </p>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2">Technical Highlights</h3>
            <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>Material Synthesis:</strong> Synthesized agar bioplastic from raw agar powder, gelatin, and sorbitol to create a heat-resistant film.</li>
                <li><strong>Base Material:</strong> Trapezoidal bagasse (sugarcane fiber) for structural stiffness.</li>
                <li><strong>Analysis:</strong> Conducted Lifecycle Assessment (LCA) using OpenLCA to prove environmental benefits.</li>
            </ul>
        `,
        techSpecs: [
            { label: "Base", value: "Bagasse (Sugarcane)" },
            { label: "Lid", value: "Agar Bioplastic" },
            { label: "Validation", value: "OpenLCA, Moisture Testing" }
        ],
        media: null,
        // 6 Images
        gallery: [
            { url: "assets/eco-1.jpg", caption: "Digital Render of Container" },
            { url: "assets/eco-2.png", caption: "3d-printed prototype" },
            { url: "assets/eco-3.png", caption: "Ingredients for bioplastic synthesis" },
            { url: "assets/eco-4.png", caption: "Cost Benefit Analysis" },
            { url: "assets/eco-5.png", caption: "OpenLCA Life Cycle Analysis" },
            { url: "assets/eco-6.png", caption: "OpenLCA Life Cycle Analysis" }
        ]
    },
    {
        id: 'plane',
        title: "\"Arts and Crafts\"",
        subtitle: "Plane Design & Analysis",
        image: "assets/plane.png",
        tags: ["XFLR5", "Aerodynamics", "Prototyping"],
        shortDesc: "Cost-optimized foam board plane analyzed in XFLR5.",
        fullDesc: `
            <p class="mb-4 text-slate-700 dark:text-slate-300">
                Named for the maximum cost savings achieved during construction. I designed this plane in XFLR5, tuning it to be stable and easy to manufacture.
            </p>
            <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                <li><strong>Construction:</strong> Built entirely from foam board with rubber bands, hot glue and tape; used pencils skewed through the fuselage to secure wings.</li>
                <li><strong>Performance:</strong> Successfully flew for 25 seconds (ended due to pilot error/nose dive).</li>
                <li><strong>Software:</strong> XFLR5 for stability analysis.</li>
            </ul>
        `,
        techSpecs: [
            { label: "Material", value: "Foam Board" },
            { label: "Flight Time", value: "25 Seconds" },
            { label: "Analysis", value: "XFLR5" }
        ],
        media: null,
        // 5 Images
        gallery: [
            { url: "assets/plane-1.jpg", caption: "Completed Plane" },
            { url: "assets/plane-2.jpg", caption: "Construction phase using foam board." },
            { url: "assets/plane-3.jpg", caption: "Wiring up internal electronics" },
            { url: "assets/plane-4.png", caption: "XLFR5 Fluid Flow and Lift Visualization" },
            { url: "assets/plane-5.png", caption: "XFLR5 stability analysis graph." }
        ]
    }
];
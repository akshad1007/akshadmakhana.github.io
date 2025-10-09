/* ===================================================================
 * AKSHAD MAKHANA - Main JS
 *
 * ------------------------------------------------------------------- */

(function(html) {

    "use strict";

    html.className = html.className.replace(/\bno-js\b/g, '') + ' js ';



   /* Animations
    * -------------------------------------------------- */
    const tl = anime.timeline( {
        easing: 'easeInOutCubic',
        duration: 800,
        autoplay: false
    })
    .add({
        targets: '#loader',
        opacity: 0,
        duration: 1000,
        begin: function(anim) {
            window.scrollTo(0, 0);
        }
    })
    .add({
        targets: '#preloader',
        opacity: 0,
        complete: function(anim) {
            document.querySelector("#preloader").style.visibility = "hidden";
            document.querySelector("#preloader").style.display = "none";
        }
    })
    .add({
        targets: '.s-header',
        translateY: [-100, 0],
        opacity: [0, 1]
    }, '-=200')
    .add({
        targets: [ '.s-intro .text-pretitle', '.s-intro .text-huge-title'],
        translateX: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(400)
    })
    .add({
        targets: '.circles span',
        keyframes: [
            {opacity: [0, .3]},
            {opacity: [.3, .1], delay: anime.stagger(100, {direction: 'reverse'})}
        ],
        delay: anime.stagger(100, {direction: 'reverse'})
    })
    .add({
        targets: '.intro-social li',
        translateX: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, {direction: 'reverse'})
    })
    .add({
        targets: '.intro-scrolldown',
        translateY: [100, 0],
        opacity: [0, 1]
    }, '-=800');



   /* Preloader
    * -------------------------------------------------- */
    const ssPreloader = function() {

        const preloader = document.querySelector('#preloader');
        if (!preloader) return;
        
        window.addEventListener('load', function() {
            document.querySelector('html').classList.remove('ss-preload');
            document.querySelector('html').classList.add('ss-loaded');

            document.querySelectorAll('.ss-animated').forEach(function(item){
                item.classList.remove('ss-animated');
            });

            tl.play();
        });

        // force page scroll position to top at page refresh
        // window.addEventListener('beforeunload' , function () {
        //     // window.scrollTo(0, 0);
        // });

    }; // end ssPreloader


   /* Mobile Menu
    * ---------------------------------------------------- */ 
    const ssMobileMenu = function() {

        const toggleButton = document.querySelector('.mobile-menu-toggle');
        const mainNavWrap = document.querySelector('.main-nav-wrap');
        const siteBody = document.querySelector("body");

        if (!(toggleButton && mainNavWrap)) return;

        toggleButton.addEventListener('click', function(event) {
            event.preventDefault();
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
        });

        mainNavWrap.querySelectorAll('.main-nav a').forEach(function(link) {
            link.addEventListener("click", function(event) {

                // at 800px and below
                if (window.matchMedia('(max-width: 800px)').matches) {
                    toggleButton.classList.toggle('is-clicked');
                    siteBody.classList.toggle('menu-is-open');
                }
            });
        });

        window.addEventListener('resize', function() {

            // above 800px
            if (window.matchMedia('(min-width: 801px)').matches) {
                if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
                if (toggleButton.classList.contains("is-clicked")) toggleButton.classList.remove("is-clicked");
            }
        });

    }; // end ssMobileMenu


   /* Highlight active menu link on pagescroll
    * ------------------------------------------------------ */
    const ssScrollSpy = function() {

        const sections = document.querySelectorAll(".target-section");

        // Add an event listener listening for scroll
        window.addEventListener("scroll", navHighlight);

        function navHighlight() {
        
            // Get current scroll position
            let scrollY = window.pageYOffset;
        
            // Loop through sections to get height(including padding and border), 
            // top and ID values for each
            sections.forEach(function(current) {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute("id");
            
               /* If our current scroll position enters the space where current section 
                * on screen is, add .current class to parent element(li) of the thecorresponding 
                * navigation link, else remove it. To know which link is active, we use 
                * sectionId variable we are getting while looping through sections as 
                * an selector
                */
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(".main-nav a[href*=" + sectionId + "]").parentNode.classList.add("current");
                } else {
                    document.querySelector(".main-nav a[href*=" + sectionId + "]").parentNode.classList.remove("current");
                }
            });
        }

    }; // end ssScrollSpy


   /* Animate elements if in viewport
    * ------------------------------------------------------ */
    const ssViewAnimate = function() {

        const blocks = document.querySelectorAll("[data-animate-block]");

        window.addEventListener("scroll", viewportAnimation);

        function viewportAnimation() {

            let scrollY = window.pageYOffset;

            blocks.forEach(function(current) {

                const viewportHeight = window.innerHeight;
                const triggerTop = (current.offsetTop + (viewportHeight * .2)) - viewportHeight;
                const blockHeight = current.offsetHeight;
                const blockSpace = triggerTop + blockHeight;
                const inView = scrollY > triggerTop && scrollY <= blockSpace;
                const isAnimated = current.classList.contains("ss-animated");

                if (inView && (!isAnimated)) {
                    anime({
                        targets: current.querySelectorAll("[data-animate-el]"),
                        opacity: [0, 1],
                        translateY: [100, 0],
                        delay: anime.stagger(400, {start: 200}),
                        duration: 800,
                        easing: 'easeInOutCubic',
                        begin: function(anim) {
                            current.classList.add("ss-animated");
                        }
                    });
                }
            });
        }

    }; // end ssViewAnimate


   /* Swiper
    * ------------------------------------------------------ */ 
    const ssSwiper = function() {

        const mySwiper = new Swiper('.swiper-container', {

            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                // when window width is > 400px
                401: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is > 800px
                801: {
                    slidesPerView: 2,
                    spaceBetween: 32
                },
                // when window width is > 1200px
                1201: {
                    slidesPerView: 2,
                    spaceBetween: 80
                }
            }
         });

        // Initialize Swiper for Testimonials
        const testimonialSlider = new Swiper('.testimonial-slider', {
            loop: true,
            autoplay: {
                delay: 5000, // 5 seconds per slide
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

    }; // end ssSwiper


   /* Lightbox
    * ------------------------------------------------------ */
    const ssLightbox = function() {

        const folioLinks = document.querySelectorAll('.folio-list__item-link');
        const modals = [];

        folioLinks.forEach(function(link) {
            let modalbox = link.getAttribute('href');
            let instance = basicLightbox.create(
                document.querySelector(modalbox),
                {
                    onShow: function(instance) {
                        //detect Escape key press
                        document.addEventListener("keydown", function(event) {
                            event = event || window.event;
                            if (event.keyCode === 27) {
                                instance.close();
                            }
                        });
                    }
                }
            )
            modals.push(instance);
        });

        folioLinks.forEach(function(link, index) {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                modals[index].show();
            });
        });

    };  // end ssLightbox


   /* Alert boxes
    * ------------------------------------------------------ */
    const ssAlertBoxes = function() {

        const boxes = document.querySelectorAll('.alert-box');
  
        boxes.forEach(function(box){

            box.addEventListener('click', function(event) {
                if (event.target.matches(".alert-box__close")) {
                    event.stopPropagation();
                    event.target.parentElement.classList.add("hideit");

                    setTimeout(function(){
                        box.style.display = "none";
                    }, 500)
                }    
            });

        })

    }; // end ssAlertBoxes


   /* Smoothscroll
    * ------------------------------------------------------ */
    const ssMoveTo = function(){

        const easeFunctions = {
            easeInQuad: function (t, b, c, d) {
                t /= d;
                return c * t * t + b;
            },
            easeOutQuad: function (t, b, c, d) {
                t /= d;
                return -c * t* (t - 2) + b;
            },
            easeInOutQuad: function (t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t + b;
                t--;
                return -c/2 * (t*(t-2) - 1) + b;
            },
            easeInOutCubic: function (t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t*t + b;
                t -= 2;
                return c/2*(t*t*t + 2) + b;
            }
        }

        const triggers = document.querySelectorAll('.smoothscroll');
        
        const moveTo = new MoveTo({
            tolerance: 0,
            duration: 1200,
            easing: 'easeInOutCubic',
            container: window
        }, easeFunctions);

        triggers.forEach(function(trigger) {
            moveTo.registerTrigger(trigger);
        });

    }; // end ssMoveTo


    /* MAP Tracking Functionality - Simplified Version
     * ---------------------------------------------------- */
    const ssMapTracking = function() {

        // MAP data storage - Simplified structure
        let mapData = {
            totalPoints: 100,
            earnedPoints: 15,
            categories: {
                technical: { earned: 10, total: 45, name: 'Technical Skills', letter: 'T' },
                sports: { earned: 5, total: 10, name: 'Sports & Cultural', letter: 'S' },
                community: { earned: 0, total: 10, name: 'Community Outreach', letter: 'C' },
                innovation: { earned: 0, total: 25, name: 'Innovation & IPR', letter: 'I' },
                leadership: { earned: 0, total: 10, name: 'Leadership', letter: 'L' }
            },
            uploadedFiles: []
        };

        // Calculate total points
        function calculateTotalPoints() {
            let total = 0;
            Object.keys(mapData.categories).forEach(categoryKey => {
                total += mapData.categories[categoryKey].earned;
            });
            mapData.earnedPoints = total;
            return total;
        }

        // Update progress displays
        function updateProgressDisplay() {
            const totalPoints = calculateTotalPoints();
            const percentage = Math.round((totalPoints / mapData.totalPoints) * 100);

            // Update main progress circle
            const progressCircle = document.querySelector('.circle-progress');
            const percentageElement = document.querySelector('.percentage');
            
            if (progressCircle) {
                progressCircle.style.setProperty('--progress', percentage);
            }
            if (percentageElement) {
                percentageElement.textContent = percentage + '%';
            }

            // Update quick stats
            const completedCount = Object.values(mapData.categories).filter(cat => cat.earned > 0).length;
            const remainingPoints = mapData.totalPoints - totalPoints;
            
            const statNumbers = document.querySelectorAll('.stat-number');
            if (statNumbers.length >= 3) {
                statNumbers[0].textContent = totalPoints;
                statNumbers[1].textContent = completedCount;
                statNumbers[2].textContent = remainingPoints;
            }

            // Update category progress bars
            Object.keys(mapData.categories).forEach(categoryKey => {
                const category = mapData.categories[categoryKey];
                const categoryFill = document.querySelector(`#cat-${categoryKey} .cat-fill`);
                const categoryScore = document.querySelector(`#cat-${categoryKey} .cat-score`);
                
                if (categoryFill) {
                    const catPercentage = (category.earned / category.total) * 100;
                    categoryFill.style.width = catPercentage + '%';
                }
                
                if (categoryScore) {
                    categoryScore.textContent = `${category.earned}/${category.total}`;
                }
            });
        }

        // File upload functionality
        function initializeFileUpload() {
            const uploadZone = document.querySelector('.upload-zone');
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.multiple = true;
            fileInput.accept = '.pdf,.jpg,.jpeg,.png,.doc,.docx';
            fileInput.style.display = 'none';

            document.body.appendChild(fileInput);

            if (uploadZone) {
                uploadZone.addEventListener('click', () => {
                    fileInput.click();
                });

                uploadZone.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    uploadZone.classList.add('drag-over');
                });

                uploadZone.addEventListener('dragleave', () => {
                    uploadZone.classList.remove('drag-over');
                });

                uploadZone.addEventListener('drop', (e) => {
                    e.preventDefault();
                    uploadZone.classList.remove('drag-over');
                    handleFiles(e.dataTransfer.files);
                });

                fileInput.addEventListener('change', (e) => {
                    handleFiles(e.target.files);
                });
            }
        }

        function handleFiles(files) {
            Array.from(files).forEach(file => {
                const fileData = {
                    id: Date.now() + Math.random(),
                    name: file.name,
                    size: formatFileSize(file.size),
                    type: file.type,
                    uploadDate: new Date().toLocaleDateString(),
                    url: URL.createObjectURL(file)
                };
                
                mapData.uploadedFiles.push(fileData);
                displayUploadedFile(fileData);
            });
        }

        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }

        function displayUploadedFile(fileData) {
            const uploadedFilesContainer = document.querySelector('.uploaded-files');
            if (!uploadedFilesContainer) return;

            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.innerHTML = `
                <div class="file-info">
                    <div class="file-icon">📄</div>
                    <div class="file-details">
                        <div class="file-name">${fileData.name}</div>
                        <div class="file-size">${fileData.size}</div>
                        <div class="file-date">Uploaded: ${fileData.uploadDate}</div>
                    </div>
                </div>
                <button onclick="removeFile('${fileData.id}')" class="btn btn--small" style="background: #ff4444;">Remove</button>
            `;
            
            uploadedFilesContainer.appendChild(fileItem);
        }

        window.removeFile = function(fileId) {
            mapData.uploadedFiles = mapData.uploadedFiles.filter(file => file.id != fileId);
            const uploadedFilesContainer = document.querySelector('.uploaded-files');
            if (uploadedFilesContainer) {
                const fileItems = uploadedFilesContainer.querySelectorAll('.file-item');
                fileItems.forEach(item => {
                    const removeBtn = item.querySelector('button[onclick*="' + fileId + '"]');
                    if (removeBtn) {
                        item.remove();
                    }
                });
            }
        };

        // Render activities in UI
        function renderActivities(categoryLetter) {
            const categoryKey = 'category' + categoryLetter;
            const category = mapData[categoryKey];
            
            // Find the category card
            const categoryCards = document.querySelectorAll('.category-card');
            let targetCard = null;
            
            categoryCards.forEach(card => {
                const label = card.querySelector('.category-label');
                if (label && label.textContent.trim() === categoryLetter) {
                    targetCard = card;
                }
            });

            if (!targetCard) return;

            const activitiesContainer = targetCard.querySelector('.category-activities');
            if (!activitiesContainer) return;

            // Clear existing activities except add button
            const addButton = activitiesContainer.querySelector('.add-new');
            activitiesContainer.innerHTML = '';

            // Add completed activities
            category.activities.forEach(activity => {
                const activityElement = document.createElement('div');
                activityElement.className = 'activity-item completed';
                activityElement.innerHTML = `
                    <span class="activity-name">${activity.name}</span>
                    <span class="activity-points">+${activity.points}</span>
                `;
                activitiesContainer.appendChild(activityElement);
            });

            // Re-add the add button
            if (addButton) {
                activitiesContainer.appendChild(addButton);
            }
            
            // Update the activity display in progress section
            updateActivityDisplay();
        }

        // Export MAP record
        window.exportMAPRecord = function() {
            const totalPoints = calculateTotalPoints();
            const exportData = {
                student: 'Akshad Makhana',
                program: 'B.Tech AI & Data Science',
                year: 'First Year (2024-25)',
                totalPoints: totalPoints,
                requiredPoints: mapData.totalPoints,
                completionPercentage: (totalPoints / mapData.totalPoints * 100).toFixed(1),
                categories: mapData.categories,
                uploadedFiles: mapData.uploadedFiles.length,
                exportDate: new Date().toISOString()
            };

            // Create downloadable JSON file
            const dataStr = JSON.stringify(exportData, null, 2);
            const dataBlob = new Blob([dataStr], {type: 'application/json'});
            
            const link = document.createElement('a');
            link.href = URL.createObjectURL(dataBlob);
            link.download = 'MAP_Record_Akshad_Makhana_' + new Date().toISOString().split('T')[0] + '.json';
            link.click();

            alert('📊 MAP Record exported successfully!\n\nIncludes:\n• Progress summary\n• Category breakdown\n• File count: ' + mapData.uploadedFiles.length + '\n• Export date: ' + new Date().toLocaleDateString());
        };

        // View detailed breakdown
        window.viewDetailedBreakdown = function() {
            const totalPoints = calculateTotalPoints();
            let breakdown = `📊 MAP DETAILED BREAKDOWN - Akshad Makhana\n`;
            breakdown += `====================================================\n\n`;
            breakdown += `🎯 Overall Progress: ${totalPoints}/${mapData.totalPoints} points (${(totalPoints/mapData.totalPoints*100).toFixed(1)}%)\n`;
            breakdown += `📚 Program: B.Tech AI & Data Science (2024-28)\n`;
            breakdown += `📅 Current Year: First Year (Target: 20 points)\n`;
            breakdown += `� Files Uploaded: ${mapData.uploadedFiles.length}\n\n`;
            
            Object.keys(mapData.categories).forEach(categoryKey => {
                const category = mapData.categories[categoryKey];
                const percentage = category.total > 0 ? (category.earned / category.total * 100).toFixed(1) : 0;
                
                breakdown += `${category.name}\n`;
                breakdown += `Progress: ${category.earned}/${category.total} (${percentage}%)\n`;
                breakdown += `Status: ${category.earned > 0 ? '✅ In Progress' : '⏳ Not Started'}\n\n`;
            });

            breakdown += `📝 Next Steps:\n`;
            breakdown += `• Complete remaining ${Math.max(0, 20 - totalPoints)} points for First Year\n`;
            breakdown += `• Upload certificates and documents\n`;
            breakdown += `• Focus on categories with 0 points\n`;
            breakdown += `• Submit to ERP before semester end\n`;

            alert(breakdown);
        };

        // Generate ERP Report
        window.generateERPReport = function() {
            const totalPoints = calculateTotalPoints();
            
            const report = {
                studentInfo: {
                    name: 'Akshad Makhana',
                    enrollmentNo: 'Your_Enrollment_Number',
                    program: 'B.Tech AI & Data Science',
                    semester: 'First Year (2024-25)'
                },
                mapSummary: {
                    totalPoints: totalPoints,
                    requiredPoints: mapData.totalPoints,
                    completionPercentage: (totalPoints / mapData.totalPoints * 100).toFixed(1),
                    uploadedFiles: mapData.uploadedFiles.length
                },
                categoryBreakdown: mapData.categories,
                uploadedFiles: mapData.uploadedFiles,
                submissionReady: totalPoints >= 15,
                generatedOn: new Date().toISOString()
            };

            // Create ERP-ready report
            const reportStr = JSON.stringify(report, null, 2);
            const reportBlob = new Blob([reportStr], {type: 'application/json'});
            
            const link = document.createElement('a');
            link.href = URL.createObjectURL(reportBlob);
            link.download = 'MAP_Report_Akshad_Makhana_' + new Date().toISOString().split('T')[0] + '.json';
            link.click();

            alert('📊 MAP Report Generated!\n\nReport includes:\n✅ Student information\n✅ MAP points breakdown\n✅ Category-wise progress\n✅ Uploaded files (' + mapData.uploadedFiles.length + ')\n✅ Progress summary\n\nFile downloaded successfully!');
        };

        // Initialize MAP tracking
        function init() {
            initializeFileUpload();
            updateProgressDisplay();
        }

        // Initialize on load
        init();
            
            if (content && icon) {
                content.classList.toggle('collapsed');
                if (content.classList.contains('collapsed')) {
                    icon.textContent = '▶';
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    icon.textContent = '▼';
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        };

        // Initialize sections (categories open by default, others closed)
        function initializeSections() {
            // Categories section open by default
            const categoriesContent = document.getElementById('categories-content');
            if (categoriesContent) {
                categoriesContent.classList.remove('collapsed');
            }
            
            // Other sections closed by default
            const progressContent = document.getElementById('progress-content');
            const actionsContent = document.getElementById('actions-content');
            
            if (progressContent) {
                progressContent.classList.add('collapsed');
            }
            if (actionsContent) {
                actionsContent.classList.add('collapsed');
            }
        }

        // Update activity display
        function updateActivityDisplay() {
            const activityList = document.querySelector('.activity-list');
            if (!activityList) return;

            // Clear existing activities
            activityList.innerHTML = '';

            // Add activities from all categories
            Object.keys(mapData).forEach(categoryKey => {
                const category = mapData[categoryKey];
                const categoryLetter = categoryKey.slice(-1);
                
                category.activities.forEach(activity => {
                    const activityElement = document.createElement('div');
                    activityElement.className = 'activity-entry';
                    
                    const badgeClass = {
                        'A': 'tech',
                        'B': 'sports',
                        'C': 'community',
                        'D': 'innovation',
                        'E': 'leadership'
                    }[categoryLetter] || 'tech';
                    
                    activityElement.innerHTML = `
                        <span class="activity-badge ${badgeClass}">${categoryLetter}</span>
                        <span class="activity-text">${activity.name} (${activity.points} pts)</span>
                    `;
                    activityList.appendChild(activityElement);
                });
            });



    }; // end ssMapTracking

   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        ssMobileMenu();
        ssScrollSpy();
        ssViewAnimate();
        ssSwiper();
        ssLightbox();
        ssAlertBoxes();
        ssMoveTo();
        ssMapTracking();

    })();

})(document.documentElement);
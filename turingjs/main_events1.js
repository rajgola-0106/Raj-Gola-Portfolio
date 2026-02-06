    // Main JavaScript functionality
    document.addEventListener("DOMContentLoaded", () => {
        
    
        // FAQ accordion
        const faqItems = document.querySelectorAll(".faq-item")
    
        faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question")
    
        question.addEventListener("click", () => {
            // Close all other items
            faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove("active")
            }
            })
    
            // Toggle current item
            item.classList.toggle("active")
        })
        })
    
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
    
            const targetId = this.getAttribute("href")
            if (targetId === "#") return
    
            const targetElement = document.querySelector(targetId)
            if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
    
            // Close mobile menu if open
            if (nav.classList.contains("active")) {
                nav.classList.remove("active")
                menuToggle.classList.remove("active")
            }
            }
        })
        })
    
        // Lazy loading for images
        if ("loading" in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]')
        images.forEach((img) => {
            img.src = img.src
        })
        } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement("script")
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
        document.body.appendChild(script)
        }
    
        // Add animation on scroll
        const animateOnScroll = () => {
        const elements = document.querySelectorAll(".event-card, .gallery-item, .speaker-card, .stat-item, .faq-item")
    
        elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top
            const screenPosition = window.innerHeight / 1.2
    
            if (elementPosition < screenPosition) {
            element.style.opacity = "1"
            element.style.transform = "translateY(0)"
            }
        })
        }
    
        // Set initial styles for animation
        const elementsToAnimate = document.querySelectorAll(
        ".event-card, .gallery-item, .speaker-card, .stat-item, .faq-item",
        )
        elementsToAnimate.forEach((element) => {
        element.style.opacity = "0"
        element.style.transform = "translateY(20px)"
        element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
        })
    
        // Run animation on scroll
        window.addEventListener("scroll", animateOnScroll)
    
        // Run once on page load
        animateOnScroll()
    })
    
    
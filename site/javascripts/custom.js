document.addEventListener("DOMContentLoaded", function () {
  // Function to customize the header
  function customizeHeader() {
    const header = document.querySelector(".md-header");
    if (header) {
      // Create a container for the header content
      const headerContent = document.createElement("div");
      headerContent.style.textAlign = "center";

      // Create a row for the site name
      const siteName = document.createElement("div");
      siteName.textContent = "AI Innovations by Maria Nadeem";
      siteName.style.fontSize = "24px";
      siteName.style.fontWeight = "bold";
      siteName.style.marginBottom = "5px";

      // Add favicon image
      const faviconImg = document.createElement("img");
      faviconImg.src = "images/favicon.ico";
      faviconImg.alt = "AI Innovations by Maria Nadeem";
      faviconImg.className = "favicon";
      faviconImg.style.maxWidth = "30px";
      faviconImg.style.height = "30px";
      faviconImg.style.marginBottom = "10px";

      // Create a container for the navigation links
      const navLinksContainer = document.createElement("div");
      navLinksContainer.style.marginTop = "10px";
      navLinksContainer.style.textAlign = "center";

      // List of navigation links
      const navLinks = [
        { name: "Home", url: "index.md" },
        { name: "About", url: "about.md" },
        { name: "Projects", url: "projects.md" },
        { name: "Skills", url: "skills.md" },
        { name: "Certifications", url: "certifications.md" },
        { name: "Resume", url: "resume.md" },
        { name: "Achievements & Future Goals", url: "achievements_and_future_goals.md" }
      ];

      // Add navigation links
      navLinks.forEach(link => {
        const navItem = document.createElement("a");
        navItem.href = link.url;
        navItem.textContent = link.name;
        navItem.style.margin = "0 15px";
        navItem.style.textDecoration = "none";
        navItem.style.color = "inherit";
        navItem.style.fontWeight = "normal";
        navItem.addEventListener("mouseover", () => {
          navItem.style.textDecoration = "underline";
        });
        navItem.addEventListener("mouseout", () => {
          navItem.style.textDecoration = "none";
        });
        navLinksContainer.appendChild(navItem);
      });

      // Append site name, favicon, and nav links to the header content
      headerContent.appendChild(siteName);
      headerContent.appendChild(faviconImg);
      headerContent.appendChild(navLinksContainer);

      // Clear existing header content and add the new structured header
      header.innerHTML = "";
      header.appendChild(headerContent);
    }
  }

  // Function to customize the footer
  function customizeFooter() {
    const existingFooter = document.querySelector(".custom-footer");
    if (existingFooter) return;

    const footer = document.createElement("div");
    footer.className = "custom-footer";

    const footerIcons = document.createElement("div");
    footerIcons.className = "footer-icons";
    footerIcons.innerHTML = `
      <a href="https://github.com/marianadeem755" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://www.kaggle.com/marianadeem755" target="_blank" title="Kaggle"><i class="fab fa-kaggle"></i></a>
      <a href="mailto:marianadeem755@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
    `;

    footer.appendChild(footerIcons);
    document.body.appendChild(footer);

    const defaultFooter = document.querySelector(".md-footer");
    if (defaultFooter) defaultFooter.remove();
  }

  // Observe DOM changes to ensure customizations persist
  const observer = new MutationObserver(() => {
    customizeHeader();
    customizeFooter();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Initial customization
  customizeHeader();
  customizeFooter();
});
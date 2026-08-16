document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-card");
  const projectCountEl = document.getElementById("project-count");
  const tagCountEl = document.getElementById("tag-count");
  const filterAllCountEl = document.getElementById("filter-all-count");
  const searchInput = document.getElementById("project-search");
  
  if (projectCountEl) projectCountEl.textContent = projects.length;
  if (filterAllCountEl) filterAllCountEl.textContent = projects.length;

  const uniqueTags = new Set();
  projects.forEach(project => {
    const tags = project.querySelectorAll(".tag");
    tags.forEach(tag => {
      uniqueTags.add(tag.textContent.trim().toLowerCase());
    });
  });

  if (tagCountEl) tagCountEl.textContent = uniqueTags.size;

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      projects.forEach(project => {
        if (filter === "all") {
          project.style.display = "flex";
        } else {
          const categories = project.getAttribute("data-category") || "";
          if (categories.includes(filter)) {
            project.style.display = "flex";
          } else {
            project.style.display = "none";
          }
        }
      });
      
      if (searchInput) searchInput.value = "";
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();

      filterButtons.forEach(btn => btn.classList.remove("active"));
      const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
      if (allBtn) allBtn.classList.add("active");

      projects.forEach(project => {
        const titleEl = project.querySelector(".project-info h3");
        const title = titleEl ? titleEl.textContent.toLowerCase() : "";
        
        const tags = Array.from(project.querySelectorAll(".tag")).map(tag => tag.textContent.toLowerCase());
        const matchesTag = tags.some(tag => tag.includes(searchTerm));

        if (title.includes(searchTerm) || matchesTag || searchTerm === "") {
          project.style.display = "flex";
        } else {
          project.style.display = "none";
        }
      });
    });
  }
});
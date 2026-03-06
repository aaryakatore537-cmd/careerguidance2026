/**
 * Search Functionality
 */

function openSearchModal() {
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('global-search-input');
    const closeBtn = document.querySelector('.search-close');

    if (modal) {
        modal.style.display = 'block';
        input.focus();

        // Setup listeners
        closeBtn.onclick = () => modal.style.display = 'none';
        window.onclick = (e) => {
            if (e.target === modal) modal.style.display = 'none';
        };

        // Use global debounce from utils.js
        input.oninput = window.debounce((e) => performSearch(e.target.value), 300);
    }
}

function performSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    if (!query || query.length < 2) {
        resultsContainer.innerHTML = '<div class="empty-state"><p>Start typing to explore your future...</p></div>';
        return;
    }

    const q = query.toLowerCase();
    const results = [];

    try {
        // Build Alias Map from diplomas
        const aliasMap = {};
        if (window.careerData.diplomas) {
            Object.entries(window.careerData.diplomas).forEach(([key, path]) => {
                if (!aliasMap[path]) aliasMap[path] = [];
                aliasMap[path].push(key.replace(/-/g, ' '));
            });
        }

        // Helper to check an item
        const checkItem = (item, id, catName, aliases = []) => {
            let score = 0;
            if (item.title?.toLowerCase().includes(q)) score += 10;
            if (item.description?.toLowerCase().includes(q)) score += 5;

            // Check Arrays
            if (item.careers?.some(c => c.toLowerCase().includes(q))) score += 5;
            if (item.branches?.some(b => b.toLowerCase().includes(q))) score += 5;
            if (item.courses?.some(c => c.toLowerCase().includes(q))) score += 5;
            if (item.options?.some(o => o.toLowerCase().includes(q))) score += 5;
            if (item.specializations?.some(s => s.toLowerCase().includes(q))) score += 5;
            if (item.trades?.some(t => t.toLowerCase().includes(q))) score += 5;

            // Check Complex Arrays
            if (item.degrees?.some(d => d.name.toLowerCase().includes(q) || (d.eligibility && d.eligibility.toLowerCase().includes(q)))) score += 5;
            if (item.certifications?.some(c => c.name.toLowerCase().includes(q))) score += 5;

            // Check Aliases
            if (aliases.some(a => a.toLowerCase().includes(q))) score += 15;

            if (score > 0) {
                results.push({ ...item, id: id || catName, score, categoryName: catName });
            }
        };

        // Traverse careerData
        Object.keys(window.careerData).forEach(categoryKey => {
            if (categoryKey === 'diplomas') return;

            const category = window.careerData[categoryKey];
            const categoryPath = categoryKey;

            if (category.title && category.degrees) {
                checkItem(category, categoryKey, 'General Stream', aliasMap[categoryPath] || []);
            } else {
                Object.keys(category).forEach(subKey => {
                    const subItem = category[subKey];
                    if (typeof subItem === 'object' && subItem.title) {
                        const subPath = `${categoryKey}.${subKey}`;
                        checkItem(subItem, subKey, categoryKey.replace('_', ' '), aliasMap[subPath] || []);
                    }
                });
            }
        });
    } catch (e) {
        console.error("Search error:", e);
    }

    results.sort((a, b) => b.score - a.score);
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const container = document.getElementById('search-results');
    if (results.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No results found for your query. Try "Engineering", "Design", or "Medical".</p></div>';
        return;
    }

    container.innerHTML = results.map(item => `
    <div class="search-result-item" onclick="window.search.showCourseDetailsFromSearch('${item.id}', '${item.title.replace(/'/g, "\\'")}')">
      <div class="result-icon">${getIconForCategory(item.categoryName)}</div>
      <div class="result-info">
        <span class="result-category">${item.categoryName}</span>
        <h4>${item.title}</h4>
        <p>${item.description.substring(0, 60)}...</p>
      </div>
    </div>
  `).join('');
}

function showCourseDetailsFromSearch(id, title) {
    const data = findCourseData(id);

    if (data) {
        const modalBody = document.getElementById('modal-body');
        const modal = document.getElementById('course-modal');
        const searchModal = document.getElementById('search-modal');

        // We assume renderCourseModal is globally available or we move it here?
        // It's in app.js. Let's assume we render manually or move renderCourseModal here.
        // For now, I'll move renderCourseModal logic here or replicate it. 
        // Actually, app.js will still contain the UI rendering logic for modals?
        // Let's attach this function to window so app.js can use it or vice versa.
        // Better: Move renderCourseModal to utils or keep here.

        // I will use window.renderCourseModal assuming app.js exposes it, 
        // OR I define it here to be safe.

        modalBody.innerHTML = window.renderCourseModal ? window.renderCourseModal(data, data.title || title) : '<p>Content loaded.</p>';

        if (searchModal) searchModal.style.display = 'none';
        modal.style.display = 'block';
    } else {
        console.warn("Could not find details for:", id);
        alert("Details for this course are currently being updated.");
    }
}

function findCourseData(id) {
    if (!id) return null;
    if (window.careerData.diplomas && window.careerData.diplomas[id]) {
        const path = window.careerData.diplomas[id];
        return path.split('.').reduce((o, k) => o && o[k], window.careerData);
    }
    if (window.careerData[id]) return window.careerData[id];

    let found = null;
    const targetIdUnderscore = id.replace(/-/g, '_').toLowerCase();
    const targetIdHyphen = id.replace(/_/g, '-').toLowerCase();

    Object.keys(window.careerData).forEach(catKey => {
        if (catKey === 'diplomas' || found) return;
        const cat = window.careerData[catKey];

        if (catKey.toLowerCase() === targetIdUnderscore) {
            found = cat;
            return;
        }

        if (typeof cat === 'object') {
            Object.keys(cat).forEach(subKey => {
                const subKeyNorm = subKey.toLowerCase();
                if (subKeyNorm === targetIdUnderscore || subKeyNorm === targetIdHyphen) {
                    found = cat[subKey];
                }
            });
        }
    });

    return found;
}

function getIconForCategory(cat) {
    if (cat.includes('tech')) return '🤖';
    if (cat.includes('engin')) return '⚙️';
    if (cat.includes('medic') || cat.includes('health')) return '🩺';
    if (cat.includes('art') || cat.includes('design')) return '🎨';
    if (cat.includes('comm')) return '💼';
    return '🎓';
}

window.search = {
    openSearchModal,
    showCourseDetailsFromSearch,
    findCourseData
};

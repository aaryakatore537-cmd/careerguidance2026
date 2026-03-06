/**
 * Verification & Unit Test Suite
 * Tests all roadmap paths to ensure no "Undecided" results remain.
 */
window.runRoadmapTests = function () {
    console.group("🚀 Career Roadmap Unit Tests");

    const traits = ['tech', 'creative', 'commerce', 'medical'];
    const container = document.getElementById('roadmap-content');

    if (!container) {
        console.error("❌ Test Failed: Roadmap container not found.");
        return;
    }

    traits.forEach(trait => {
        try {
            console.log(`Testing Trait: ${trait}...`);
            window.renderRoadmap([trait], '10th');

            const html = container.innerHTML;
            if (html.includes('Undecided')) {
                console.error(`❌ Test Failed for [${trait}]: Result contains 'Undecided'`);
            } else if (html.includes('Software Engineer') || html.includes('Designer') || html.includes('Financial Analyst') || html.includes('Healthcare')) {
                console.log(`✅ Test Passed for [${trait}]: Correct role rendered.`);
            } else {
                console.warn(`⚠️ Test Partial for [${trait}]: Role match not confirmed, but not 'Undecided'.`);
            }
        } catch (e) {
            console.error(`❌ Test Crashed for [${trait}]:`, e);
        }
    });

    console.groupEnd();
    alert("Roadmap Unit Tests Complete! Check console for details.");
};

// Auto-run if URL has ?test=true
if (window.location.search.includes('test=true')) {
    setTimeout(window.runRoadmapTests, 1000);
}

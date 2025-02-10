const animation_elements = document.querySelectorAll('.animate-on-scroll, .animate-top-down, .animate-up');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animater');
		} else {
			entry.target.classList.remove('animater');
		}
	})
}, {
	threshold: 0.5
});

for (let i = 0; i < animation_elements.length; i++) {
	const el = animation_elements[i];

	observer.observe(el);
}



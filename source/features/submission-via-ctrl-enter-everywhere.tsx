import select from 'select-dom';
import * as pageDetect from 'github-url-detection';

import features from '.';

export default function addQuickSubmit(): void {
	select([
		'input#commit-summary-input',
		'textarea[aria-label="Describe this release"]',
	])!.classList.add('js-quick-submit');
}

void features.add(import.meta.url, {
	include: [
		pageDetect.isNewFile,
		pageDetect.isEditingFile,
		pageDetect.isNewRelease,
		pageDetect.isEditingRelease,
	],
	exclude: [
		pageDetect.isBlank,
	],
	init: addQuickSubmit,
});
